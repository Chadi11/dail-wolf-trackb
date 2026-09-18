'use client';

/**
 * Damage intelligence view.
 *
 * Click a case on the left -> POST /api/extract/ -> the returned zones drive
 * the 3D highlight on the right.
 *
 * NOTE the trailing slash on the fetch URL: next.config.ts sets
 * `trailingSlash: true`, so POSTing to /api/extract (no slash) answers
 * 308 Permanent Redirect and the body is lost.
 */

import type { Severity, ExtractionResult } from 'src/lib/extraction/types';

import { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import CircularProgress from '@mui/material/CircularProgress';

import CASES from 'src/_mock/_cases.json';

import { CarViewer } from 'src/components/car-viewer';

type SampleCase = {
  id: number;
  licensePlate: string;
  manufacturer: string;
  model: string;
  mileage: number;
  freitext: string;
  states?: { id?: number; name: string; category_id?: number; is_done?: boolean }[];
  canceledAt?: string | null;
};

const SAMPLE_CASES = CASES as SampleCase[];

const SEVERITY_CHIP: Record<Severity, 'warning' | 'error'> = {
  leicht: 'warning',
  mittel: 'warning',
  schwer: 'error',
};

export function DamageView() {
  const [selectedId, setSelectedId] = useState<number>(SAMPLE_CASES[0]?.id);
  const [result, setResult] = useState<ExtractionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runExtract = useCallback(async (c: SampleCase) => {
    setLoading(true);
    setError(null);
    try {
      // Trailing slash is required -- see note at top of file.
      const res = await fetch('/api/extract/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          freitext: c.freitext,
          caseId: c.id,
          states: c.states,
          canceledAt: c.canceledAt ?? null,
          useLlm: true,
        }),
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      const json = await res.json();
      setResult(json.result as ExtractionResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const c = SAMPLE_CASES.find((x) => x.id === selectedId);
    if (c) runExtract(c);
  }, [selectedId, runExtract]);

  const selected = SAMPLE_CASES.find((c) => c.id === selectedId);

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        Schadenvisualisierung
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
        Fall auswählen — die Freitextnotiz wird strukturiert und am 3D-Modell markiert.
      </Typography>

      <Grid container spacing={3}>
        {/* ---------------- case list */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Card sx={{ maxHeight: 620, overflow: 'auto' }}>
            <Typography variant="subtitle2" sx={{ px: 2, pt: 2, pb: 1 }}>
              Vorgänge ({SAMPLE_CASES.length})
            </Typography>
            <Divider />
            <List dense disablePadding>
              {SAMPLE_CASES.map((c) => (
                <ListItemButton
                  key={c.id}
                  selected={c.id === selectedId}
                  onClick={() => setSelectedId(c.id)}
                >
                  <ListItemText
                    primary={`#${c.id}`}
                    secondary={`${c.manufacturer} ${c.model} · ${c.licensePlate}`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Card>
        </Grid>

        {/* ---------------- 3D viewer */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
              <Typography variant="subtitle2">
                {selected ? `${selected.manufacturer} ${selected.model}` : '—'}
              </Typography>
              {loading && <CircularProgress size={16} />}
            </Stack>

            <CarViewer zones={result?.zones ?? []} severity={result?.severity ?? null} height={420} />

            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
              {(result?.zones ?? []).map((z) => (
                <Chip
                  key={z}
                  label={z}
                  size="small"
                  color={result?.severity ? SEVERITY_CHIP[result.severity] : 'default'}
                />
              ))}
              {result && result.zones.length === 0 && (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Keine Schadenzonen erkannt (Servicefall).
                </Typography>
              )}
            </Stack>
          </Card>
        </Grid>

        {/* ---------------- extraction detail */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack spacing={2}>
            {error && <Alert severity="error">Extraktion fehlgeschlagen: {error}</Alert>}

            <Card sx={{ p: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
                Extraktion
              </Typography>
              <Field label="Typ" value={result?.caseType} />
              <Field label="Art" value={result?.caseKind} />
              <Field label="Schwere" value={result?.severity} />
              <Field label="Kostenträger" value={result?.insuranceType} />
              <Field label="Status" value={result?.lifecycleStage} />
              {result?.trace?.length ? (
                <Box sx={{ mt: 1.5 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Pipeline: {result.trace.join(' → ')}
                  </Typography>
                </Box>
              ) : null}
            </Card>

            <Card sx={{ p: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Ersatzteile
              </Typography>
              {(result?.replacementParts ?? []).length ? (
                <Stack spacing={0.5}>
                  {result!.replacementParts.map((p) => (
                    <Typography key={p} variant="body2">
                      • {p}
                    </Typography>
                  ))}
                </Stack>
              ) : (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  —
                </Typography>
              )}
            </Card>

            <Card sx={{ p: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Freitext
              </Typography>
              <Typography
                variant="caption"
                sx={{ whiteSpace: 'pre-wrap', color: 'text.secondary', display: 'block' }}
              >
                {selected?.freitext ?? '—'}
              </Typography>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ py: 0.4 }}>
      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 600 }}>
        {value ?? '—'}
      </Typography>
    </Stack>
  );
}
