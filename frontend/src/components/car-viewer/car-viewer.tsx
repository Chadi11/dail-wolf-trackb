'use client';

/**
 * 3D damage viewer.
 *
 * Scene setup (camera distance/FOV, env map, floor, shadow blob, lighting,
 * two-stage lite->full model load, drag-to-orbit) is ported from
 * reference-demo/car-viewer.js. The damage layer on top of it is new: the
 * reference demo never highlighted anything, it only drew a 2D text callout.
 *
 * How highlighting works: car.glb is ONE unsegmented mesh (1 node / 1 mesh /
 * 1 primitive, 231k tris), so there is no sub-mesh to toggle. Instead we
 * classify every vertex geometrically (src/lib/car-model) and write a COLOR
 * attribute, then let vertexColors tint the damaged panels in place.
 */

import type { Severity, DamageZone } from 'src/lib/extraction/types';

import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Box from '@mui/material/Box';

import { buildHighlightMask } from 'src/lib/car-model/zone-mapping';

// Severity -> highlight colour. Amber/orange/red reads as escalating damage.
const SEVERITY_COLOR: Record<Severity | 'default', number> = {
  leicht: 0xffc043,
  mittel: 0xff7a1a,
  schwer: 0xe5342b,
  default: 0xff7a1a,
};

const BASE_TINT = new THREE.Color(0xffffff);

type Props = {
  zones: readonly DamageZone[];
  severity: Severity | null;
  /** Rotate automatically when the user is not dragging. */
  auto?: boolean;
  height?: number | string;
};

export function CarViewer({ zones, severity, auto = true, height = 460 }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [message, setMessage] = useState<string>('3D-Modell wird geladen …');

  // Live refs so zone changes repaint without rebuilding the scene.
  const carMeshRef = useRef<THREE.Mesh | null>(null);
  const zonesRef = useRef<readonly DamageZone[]>(zones);
  const severityRef = useRef<Severity | null>(severity);
  const repaintRef = useRef<() => void>(() => {});

  zonesRef.current = zones;
  severityRef.current = severity;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    // --- WebGL probe: fail with an honest message, not a blank stage.
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) {
      setStatus('error');
      setMessage('WebGL ist in diesem Browser nicht verfügbar.');
      return undefined;
    }

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let disposed = false;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(DPR);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.cssText =
      'width:100%;height:100%;display:block;cursor:grab;touch-action:pan-y;';
    mount.appendChild(renderer.domElement);

    // --- scene (ported from reference-demo buildScene, light mode)
    const scene = new THREE.Scene();
    const bg = new THREE.Color(0xf6f5f2);
    scene.background = bg;
    scene.fog = new THREE.Fog(bg, 11, 22);
    scene.environment = makeEnv();

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(15.05, 48),
      new THREE.MeshStandardMaterial({ color: 0xe9e7e2, roughness: 0.95, metalness: 0 })
    );
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(5.6, 3.0),
      new THREE.MeshBasicMaterial({ map: makeShadowTex(), transparent: true, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.01;
    scene.add(shadow);

    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(4, 7, 3);
    scene.add(key);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9b6b0, 0.55));

    const ringMat = new THREE.MeshBasicMaterial({ color: 0xd8d5cf });
    for (const [r0, r1] of [
      [2.9, 2.96],
      [3.3, 3.33],
    ]) {
      const ring = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 72), ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.012;
      scene.add(ring);
    }

    const carRoot = new THREE.Group();
    carRoot.name = 'carRoot';
    scene.add(carRoot);

    const camera = new THREE.PerspectiveCamera(30, 2, 0.1, 60);
    let az = 0.65;
    const el = 0.2;
    const dist = 7.9;

    // --- interaction
    let dragging = false;
    let lastX = 0;
    const cv = renderer.domElement;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      cv.setPointerCapture(e.pointerId);
      cv.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      az -= (e.clientX - lastX) * 0.007;
      lastX = e.clientX;
    };
    const onUp = () => {
      dragging = false;
      cv.style.cursor = 'grab';
    };
    cv.addEventListener('pointerdown', onDown);
    cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerup', onUp);
    cv.addEventListener('pointercancel', onUp);

    const resize = () => {
      const w = Math.max(2, mount.clientWidth);
      const h = Math.max(2, mount.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let visible = true;
    const io = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
    });
    io.observe(mount);

    /**
     * Paint the COLOR attribute from the current zone list.
     *
     * The mask is computed in the mesh's own local space, which is what
     * classifyPoint() expects -- so this must read the ORIGINAL geometry
     * positions, before normalise() moved/scaled the wrapper group.
     */
    const repaint = () => {
      const mesh = carMeshRef.current;
      if (!mesh) return;
      const geom = mesh.geometry;
      const posAttr = geom.getAttribute('position');
      if (!posAttr) return;

      const activeZones = zonesRef.current;
      const hl = new THREE.Color(
        SEVERITY_COLOR[(severityRef.current ?? 'default') as Severity | 'default']
      );

      let colorAttr = geom.getAttribute('color') as THREE.BufferAttribute | undefined;
      if (!colorAttr) {
        colorAttr = new THREE.BufferAttribute(new Float32Array(posAttr.count * 3), 3);
        geom.setAttribute('color', colorAttr);
      }

      if (!activeZones.length) {
        for (let i = 0; i < posAttr.count; i += 1) {
          colorAttr.setXYZ(i, BASE_TINT.r, BASE_TINT.g, BASE_TINT.b);
        }
      } else {
        // positions are Float32 in local space; buildHighlightMask handles
        // both quantized and scaled inputs.
        const { mask } = buildHighlightMask(posAttr.array as ArrayLike<number>, activeZones);
        for (let i = 0; i < posAttr.count; i += 1) {
          if (mask[i]) colorAttr.setXYZ(i, hl.r, hl.g, hl.b);
          else colorAttr.setXYZ(i, BASE_TINT.r, BASE_TINT.g, BASE_TINT.b);
        }
      }
      colorAttr.needsUpdate = true;
    };
    repaintRef.current = repaint;

    /** Fit an arbitrary glTF scene to the ~4.3-unit car the scene assumes. */
    const normalise = (obj: THREE.Object3D) => {
      let box = new THREE.Box3().setFromObject(obj);
      let size = box.getSize(new THREE.Vector3());
      const wrap = new THREE.Group();
      wrap.name = 'glbCar';
      wrap.add(obj);
      if (size.z > size.x) obj.rotation.y = Math.PI / 2;
      wrap.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(wrap);
      size = box.getSize(new THREE.Vector3());
      wrap.scale.setScalar(4.3 / Math.max(size.x, size.z));
      wrap.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(wrap);
      const ctr = box.getCenter(new THREE.Vector3());
      wrap.position.x -= ctr.x;
      wrap.position.z -= ctr.z;
      wrap.position.y -= box.min.y;
      return wrap;
    };

    const install = (root: THREE.Object3D) => {
      carRoot.clear();
      carRoot.add(root);
      // Find the single big mesh and switch it to vertex-colour tinting.
      let target: THREE.Mesh | null = null;
      let best = -1;
      root.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh || !m.geometry) return;
        const c = m.geometry.getAttribute('position')?.count ?? 0;
        if (c > best) {
          best = c;
          target = m;
        }
      });
      if (target) {
        const mesh = target as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const mt of mats) {
          const std = mt as THREE.MeshStandardMaterial;
          std.vertexColors = true;
          std.needsUpdate = true;
        }
        carMeshRef.current = mesh;
        repaint();
      }
      setStatus('ready');
    };

    // --- two-stage load: lite paints fast, full swaps in behind it
    const loader = new GLTFLoader();
    const load = (url: string) =>
      new Promise<THREE.Object3D>((res, rej) => {
        loader.load(url, (g) => res(g.scene), undefined, rej);
      });

    (async () => {
      let painted = false;
      try {
        const lite = await load('/assets/models/car-lite.glb');
        if (disposed) return;
        install(normalise(lite));
        painted = true;
      } catch {
        /* stage 2 still has a chance */
      }
      try {
        const full = await load('/assets/models/car.glb');
        if (disposed) return;
        install(normalise(full));
        painted = true;
      } catch {
        /* keep stage 1 */
      }
      if (!painted && !disposed) {
        setStatus('error');
        setMessage('3D-Modell konnte nicht geladen werden.');
      }
    })();

    // --- render loop, throttled to ~30fps
    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      if (t - last < 33) return;
      const dt = Math.min((t - last) / 1000, 0.1);
      last = t;
      if (!visible) return;
      if (auto && !dragging) az += 0.14 * dt;
      camera.position.set(
        Math.cos(az) * dist * Math.cos(el),
        0.62 + Math.sin(el) * dist,
        Math.sin(az) * dist * Math.cos(el)
      );
      camera.lookAt(0, 0.62, 0);
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      cv.removeEventListener('pointerdown', onDown);
      cv.removeEventListener('pointermove', onMove);
      cv.removeEventListener('pointerup', onUp);
      cv.removeEventListener('pointercancel', onUp);
      carRoot.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry) m.geometry.dispose();
        const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
        for (const mt of mats) mt.dispose();
      });
      renderer.dispose();
      if (cv.parentNode === mount) mount.removeChild(cv);
      carMeshRef.current = null;
    };
    // Scene is built once; zone/severity updates go through repaintRef.
     
  }, [auto]);

  // Repaint when the selected case changes.
  useEffect(() => {
    repaintRef.current?.();
  }, [zones, severity]);

  return (
    <Box sx={{ position: 'relative', width: '100%', height, borderRadius: 2, overflow: 'hidden' }}>
      <Box ref={mountRef} sx={{ width: '100%', height: '100%' }} />
      {status !== 'ready' && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.secondary',
            typography: 'body2',
            pointerEvents: 'none',
          }}
        >
          {message}
        </Box>
      )}
    </Box>
  );
}

// ---------------------------------------------------------------- helpers
// (ported from reference-demo/car-viewer.js)

function makeEnv(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 512;
  const x = c.getContext('2d')!;
  const g = x.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#ffffff');
  g.addColorStop(0.48, '#e2e0dc');
  g.addColorStop(0.55, '#c9c6c0');
  g.addColorStop(1, '#b2afaa');
  x.fillStyle = g;
  x.fillRect(0, 0, 1024, 512);
  x.filter = 'blur(16px)';
  x.fillStyle = 'rgba(255,255,255,0.95)';
  x.fillRect(120, 70, 260, 64);
  x.fillRect(540, 55, 320, 74);
  x.fillRect(880, 110, 130, 42);
  x.filter = 'none';
  const t = new THREE.CanvasTexture(c);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeShadowTex(): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const x = c.getContext('2d')!;
  const g = x.createRadialGradient(128, 64, 8, 128, 64, 120);
  g.addColorStop(0, 'rgba(0,0,0,0.42)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.20)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  x.save();
  x.translate(128, 64);
  x.scale(1, 0.5);
  x.translate(-128, -64);
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 128);
  x.restore();
  return new THREE.CanvasTexture(c);
}
