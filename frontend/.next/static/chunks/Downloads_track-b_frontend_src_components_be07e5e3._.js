(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logoClasses",
    ()=>logoClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
const logoClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('logo__root')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Logo(param) {
    let { sx, disabled, className, href = '/', isSingle = true, ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const TEXT_PRIMARY = theme.vars.palette.text.primary;
    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARKER = theme.vars.palette.primary.dark;
    /*
    * OR using local (public folder)
    *
    const singleLogo = (
      <img
        alt="Single logo"
        src={`${CONFIG.assetsDir}/logo/logo-single.svg`}
        width="100%"
        height="100%"
      />
    );

    const fullLogo = (
      <img
        alt="Full logo"
        src={`${CONFIG.assetsDir}/logo/logo-full.svg`}
        width="100%"
        height="100%"
      />
    );
    *
    */ const singleLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-1"),
                        x1: "152",
                        y1: "167.79",
                        x2: "65.523",
                        y2: "259.624",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_DARKER
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-2"),
                        x1: "86",
                        y1: "128",
                        x2: "86",
                        y2: "384",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-3"),
                        x1: "402",
                        y1: "288",
                        x2: "402",
                        y2: "384",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-1"), ")"),
                d: "M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-2"), ")"),
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-3"), ")"),
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
    const fullLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 360 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-1"),
                        x1: "38",
                        y1: "41.9469",
                        x2: "16.381",
                        y2: "64.906",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_DARKER
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-2"),
                        x1: "21.5",
                        y1: "32",
                        x2: "21.5",
                        y2: "96",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "".concat(uniqueId, "-3"),
                        x1: "100.5",
                        y1: "72",
                        x2: "100.5",
                        y2: "96",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: PRIMARY_MAIN
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-1"), ")"),
                d: "M21.588 61.59C34.378 53.546 40.458 61.254 45.792 71.393C41.379 79.429 38.459 84.333 37.032 86.105C34.343 89.447 31.409 91.978 27.8 93.438C20.214 97.004 10.783 97.17 3.5 92.762L21.588 61.59Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-2"), ")"),
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M111.078 57.431C99.51 37.194 87.552 18.124 73.817 46.096C71.937 49.69 70.568 56.68 67.5 56.68V56.644C64.432 56.644 63.063 49.656 61.184 46.06C47.448 18.09 35.49 37.157 23.922 57.396C23.052 58.922 22.216 60.379 21.5 61.645C48.01 44.863 45.778 95.562 67.5 95.965V96C89.223 95.597 86.99 44.899 113.5 61.68C112.785 60.414 111.949 58.957 111.078 57.431Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#".concat("".concat(uniqueId, "-3"), ")"),
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M112.5 96C119.127 96 124.5 90.627 124.5 84C124.5 77.373 119.127 72 112.5 72C105.873 72 100.5 77.373 100.5 84C100.5 90.627 105.873 96 112.5 96Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: TEXT_PRIMARY,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M146.031 45.215C149.553 45.215 152.103 42.825 152.103 39.587C152.103 36.348 149.553 34 146.031 34C142.591 34 140 36.348 140 39.587C140 42.826 142.591 45.215 146.031 45.215ZM146.031 93.838C149.351 93.838 151.374 91.854 151.374 87.968V55.984C151.374 52.097 149.351 50.073 146.072 50.073C142.753 50.073 140.729 52.097 140.729 55.983V87.968C140.729 91.814 142.753 93.838 146.031 93.838ZM200.394 88.008C200.394 91.773 198.491 93.838 195.091 93.838C191.65 93.838 189.748 91.733 189.748 87.968V67.563C189.748 61.935 186.955 58.777 182.017 58.777C176.471 58.777 172.99 62.867 172.99 69.547V87.967C172.99 91.733 171.047 93.838 167.647 93.838C164.247 93.838 162.304 91.733 162.304 87.968V55.78C162.304 52.258 164.328 50.072 167.566 50.072C170.764 50.072 172.626 51.975 172.747 55.416V58.048H173.273C174.933 52.946 179.75 49.788 186.064 49.788C195.213 49.788 200.394 55.214 200.394 64.647V88.008ZM216.302 45.215C219.823 45.215 222.374 42.825 222.374 39.587C222.374 36.348 219.823 34 216.302 34C212.861 34 210.27 36.348 210.27 39.587C210.27 42.826 212.861 45.215 216.302 45.215ZM221.645 87.968C221.645 91.854 219.621 93.838 216.302 93.838C213.023 93.838 210.999 91.814 210.999 87.968V55.984C210.999 52.097 213.023 50.073 216.342 50.073C219.621 50.073 221.645 52.097 221.645 55.983V87.968ZM289.001 93.838C292.401 93.838 294.344 91.773 294.344 87.968V63.433C294.344 54.931 289.163 49.789 280.5 49.789C274.307 49.789 269.45 52.907 267.588 57.887H267.102C265.685 52.867 261.314 49.789 255.282 49.789C249.454 49.789 244.96 52.785 243.544 57.603H243.017V55.58C242.856 52.139 240.953 50.074 237.836 50.074C234.598 50.074 232.574 52.26 232.574 55.823V87.969C232.574 91.774 234.517 93.839 237.917 93.839C241.317 93.839 243.26 91.774 243.26 87.969V67.199C243.26 61.977 246.296 58.616 250.83 58.616C255.444 58.616 258.318 61.734 258.318 66.835V87.969C258.318 91.774 260.14 93.839 263.459 93.839C266.819 93.839 268.64 91.774 268.64 87.969V67.239C268.64 62.058 271.757 58.616 276.331 58.616C280.946 58.616 283.698 61.531 283.698 66.633V87.969C283.698 91.774 285.601 93.838 289.001 93.838ZM328.265 87.968C326.079 91.814 321.829 94 316.567 94C308.188 94 302.521 88.737 302.521 80.923C302.521 72.988 308.39 68.089 318.145 68.089H328.346V64.567C328.346 60.235 325.634 57.967 320.736 57.967C317.498 57.967 315.19 59.182 312.802 61.327C311.588 62.3 310.454 62.745 308.714 62.745C306.366 62.745 304.909 61.166 304.909 58.98C304.909 56.47 306.65 53.919 310.414 52.016C313.126 50.599 316.729 49.789 321.424 49.789C332.677 49.789 338.992 55.134 338.992 64.648V88.13C338.992 91.773 337.13 93.838 333.811 93.838C330.977 93.838 329.115 92.259 328.791 89.466V87.968H328.265ZM320.129 86.308C315.96 86.308 313.126 83.838 313.126 80.275C313.126 76.753 315.717 74.648 320.088 74.648H328.346V79.1C328.346 83.149 324.743 86.308 320.129 86.308ZM360 87.968C360 91.854 357.936 93.838 354.657 93.838C351.338 93.838 349.314 91.854 349.314 87.968V40.842C349.314 36.956 351.338 34.932 354.657 34.932C357.936 34.932 360 36.955 360 40.842V87.968Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRoot, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterLink"],
        href: href,
        "aria-label": "Logo",
        underline: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoClasses"].root,
            className
        ]),
        sx: [
            {
                width: 40,
                height: 40,
                ...!isSingle && {
                    width: 102,
                    height: 36
                },
                ...disabled && {
                    pointerEvents: 'none'
                }
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: isSingle ? singleLogo : fullLogo
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
_s(Logo, "77rwgoOXCH9s5enMMBFrn+Ikbw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Logo;
// ----------------------------------------------------------------------
const LogoRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>({
        flexShrink: 0,
        color: 'transparent',
        display: 'inline-flex',
        verticalAlign: 'middle'
    }));
_c1 = LogoRoot;
var _c, _c1;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "LogoRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/utils/create-nav-item.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNavItem",
    ()=>createNavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-client] (ecmascript)");
;
;
function createNavItem(param) {
    let { path, icon, info, depth, render, hasChild, externalLink, enabledRootRedirect } = param;
    const rootItem = depth === 1;
    const subItem = !rootItem;
    const subDeepItem = Number(depth) > 2;
    const linkProps = externalLink ? {
        href: path,
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterLink"],
        href: path
    };
    const baseProps = hasChild && !enabledRootRedirect ? {
        component: 'div'
    } : linkProps;
    /**
   * Render @icon
   */ let renderIcon = null;
    if (icon && (render === null || render === void 0 ? void 0 : render.navIcon) && typeof icon === 'string') {
        renderIcon = render === null || render === void 0 ? void 0 : render.navIcon[icon];
    } else {
        renderIcon = icon;
    }
    /**
   * Render @info
   */ let renderInfo = null;
    if (info && (render === null || render === void 0 ? void 0 : render.navInfo) && Array.isArray(info)) {
        const [key, value] = info;
        const element = render.navInfo(value)[key];
        renderInfo = element ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element) : null;
    } else {
        renderInfo = info;
    }
    return {
        subItem,
        rootItem,
        subDeepItem,
        baseProps,
        renderIcon,
        renderInfo
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/utils/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/create-nav-item.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navSectionClasses",
    ()=>navSectionClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
const navSectionClasses = {
    mini: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__section__mini'),
    vertical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__section__vertical'),
    horizontal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__section__horizontal'),
    li: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__li'),
    ul: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__ul'),
    subheader: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__subheader'),
    dropdown: {
        root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__dropdown__root'),
        paper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__dropdown__paper')
    },
    item: {
        root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__root'),
        sub: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__sub'),
        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__icon'),
        info: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__info'),
        texts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__texts'),
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__title'),
        arrow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__arrow'),
        caption: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('nav__item__caption')
    },
    state: {
        open: '--open',
        active: '--active',
        disabled: '--disabled'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bulletColor",
    ()=>bulletColor,
    "navSectionCssVars",
    ()=>navSectionCssVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
;
const bulletColor = {
    dark: '#282F37',
    light: '#EDEFF2'
};
function colorVars(theme, variant) {
    const { vars: { palette } } = theme;
    return {
        '--nav-item-color': palette.text.secondary,
        '--nav-item-hover-bg': palette.action.hover,
        '--nav-item-caption-color': palette.text.disabled,
        // root
        '--nav-item-root-active-color': palette.primary.main,
        '--nav-item-root-active-color-on-dark': palette.primary.light,
        '--nav-item-root-active-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(palette.primary.mainChannel, 0.08),
        '--nav-item-root-active-hover-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(palette.primary.mainChannel, 0.16),
        '--nav-item-root-open-color': palette.text.primary,
        '--nav-item-root-open-bg': palette.action.hover,
        // sub
        '--nav-item-sub-active-color': palette.text.primary,
        '--nav-item-sub-active-bg': palette.action.selected,
        '--nav-item-sub-open-color': palette.text.primary,
        '--nav-item-sub-open-bg': palette.action.hover,
        ...variant === 'vertical' && {
            '--nav-item-sub-active-bg': palette.action.hover,
            '--nav-subheader-color': palette.text.disabled,
            '--nav-subheader-hover-color': palette.text.primary
        }
    };
}
// ----------------------------------------------------------------------
function verticalVars(theme) {
    const { shape } = theme;
    return {
        ...colorVars(theme, 'vertical'),
        '--nav-item-gap': '4px',
        '--nav-item-radius': "".concat(shape.borderRadius, "px"),
        '--nav-item-pt': '4px',
        '--nav-item-pr': '8px',
        '--nav-item-pb': '4px',
        '--nav-item-pl': '12px',
        // root
        '--nav-item-root-height': '44px',
        // sub
        '--nav-item-sub-height': '36px',
        // icon
        '--nav-icon-size': '24px',
        '--nav-icon-margin': '0 12px 0 0',
        // bullet
        '--nav-bullet-size': '12px',
        '--nav-bullet-light-color': bulletColor.light,
        '--nav-bullet-dark-color': bulletColor.dark
    };
}
// ----------------------------------------------------------------------
function miniVars(theme) {
    const { shape } = theme;
    return {
        ...colorVars(theme, 'mini'),
        '--nav-item-gap': '4px',
        '--nav-item-radius': "".concat(shape.borderRadius, "px"),
        // root
        '--nav-item-root-height': '56px',
        '--nav-item-root-padding': '8px 4px 6px 4px',
        // sub
        '--nav-item-sub-height': '34px',
        '--nav-item-sub-padding': '0 8px',
        // icon
        '--nav-icon-size': '22px',
        '--nav-icon-root-margin': '0 0 6px 0',
        '--nav-icon-sub-margin': '0 8px 0 0'
    };
}
// ----------------------------------------------------------------------
function horizontalVars(theme) {
    const { shape } = theme;
    return {
        ...colorVars(theme, 'horizontal'),
        '--nav-item-gap': '6px',
        '--nav-height': '56px',
        '--nav-item-radius': "".concat(Number(shape.borderRadius) * 0.75, "px"),
        // root
        '--nav-item-root-height': '32px',
        '--nav-item-root-padding': '0 6px',
        // sub
        '--nav-item-sub-height': '34px',
        '--nav-item-sub-padding': '0 8px',
        // icon
        '--nav-icon-size': '22px',
        '--nav-icon-sub-margin': '0 8px 0 0',
        '--nav-icon-root-margin': '0 8px 0 0'
    };
}
const navSectionCssVars = {
    mini: miniVars,
    vertical: verticalVars,
    horizontal: horizontalVars
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/styles/nav-item-styles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navItemStyles",
    ()=>navItemStyles
]);
const navItemStyles = {
    icon: {
        width: 22,
        height: 22,
        flexShrink: 0,
        display: 'inline-flex',
        /**
     * As ':first-child' for ssr
     * https://github.com/emotion-js/emotion/issues/1105#issuecomment-1126025608
     */ '& > :first-of-type:not(style):not(:first-of-type ~ *), & > style + *': {
            width: '100%',
            height: '100%'
        }
    },
    texts: {
        flex: '1 1 auto',
        display: 'inline-flex',
        flexDirection: 'column'
    },
    title: (theme)=>({
            ...theme.mixins.maxLine({
                line: 1
            }),
            flex: '1 1 auto'
        }),
    info: {
        fontSize: 12,
        flexShrink: 0,
        fontWeight: 600,
        marginLeft: '6px',
        lineHeight: 18 / 12,
        display: 'inline-flex'
    },
    arrow: (theme)=>({
            width: 16,
            height: 16,
            flexShrink: 0,
            marginLeft: '6px',
            display: 'inline-flex',
            ...theme.direction === 'rtl' && {
                transform: 'scaleX(-1)'
            }
        }),
    captionIcon: {
        width: 16,
        height: 16
    },
    captionText: (theme)=>({
            ...theme.mixins.maxLine({
                line: 1
            }),
            ...theme.typography.caption
        }),
    disabled: {
        opacity: 0.48,
        pointerEvents: 'none'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/nav-item-styles.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItem",
    ()=>NavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/create-nav-item.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/nav-item-styles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function NavItem(param) {
    let { path, icon, info, title, caption, /********/ open, active, disabled, /********/ depth, render, hasChild, slotProps, className, externalLink, enabledRootRedirect, ...other } = param;
    const navItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNavItem"])({
        path,
        icon,
        info,
        depth,
        render,
        hasChild,
        externalLink,
        enabledRootRedirect
    });
    const ownerState = {
        open,
        active,
        disabled,
        variant: navItem.rootItem ? 'rootItem' : 'subItem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemRoot, {
        "aria-label": title,
        ...ownerState,
        ...navItem.baseProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.root,
            className
        ], {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.open]: open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.active]: active,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.disabled]: disabled
        }),
        sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx,
        ...other,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.icon,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon,
                children: navItem.renderIcon
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTitle, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.title,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.title,
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: caption,
                arrow: true,
                placement: "right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCaptionIcon, {
                    ...ownerState,
                    icon: "eva:info-outline",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.caption,
                    sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.caption
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            info && navItem.subItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemInfo, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.info,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.info,
                children: navItem.renderInfo
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            hasChild && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemArrow, {
                ...ownerState,
                icon: "eva:arrow-ios-forward-fill",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.arrow,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = NavItem;
const shouldForwardProp = (prop)=>![
        'open',
        'active',
        'disabled',
        'variant',
        'sx'
    ].includes(prop);
/**
 * @slot root
 */ const ItemRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp
})((param)=>{
    let { active, open, theme } = param;
    const rootItemStyles = {
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: 'var(--nav-item-root-height)',
        padding: 'var(--nav-item-root-padding)',
        ...open && {
            color: 'var(--nav-item-root-open-color)',
            backgroundColor: 'var(--nav-item-root-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-root-active-color)',
            backgroundColor: 'var(--nav-item-root-active-bg)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-root-active-hover-bg)'
            },
            ...theme.applyStyles('dark', {
                color: 'var(--nav-item-root-active-color-on-dark)'
            })
        }
    };
    const subItemStyles = {
        minHeight: 'var(--nav-item-sub-height)',
        padding: 'var(--nav-item-sub-padding)',
        color: theme.vars.palette.text.secondary,
        ...open && {
            color: 'var(--nav-item-sub-open-color)',
            backgroundColor: 'var(--nav-item-sub-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-sub-active-color)',
            backgroundColor: 'var(--nav-item-sub-active-bg)'
        }
    };
    return {
        width: '100%',
        color: 'var(--nav-item-color)',
        borderRadius: 'var(--nav-item-radius)',
        '&:hover': {
            backgroundColor: 'var(--nav-item-hover-bg)'
        },
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: rootItemStyles
            },
            {
                props: {
                    variant: 'subItem'
                },
                style: subItemStyles
            },
            {
                props: {
                    disabled: true
                },
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].disabled
            }
        ]
    };
});
_c1 = ItemRoot;
/**
 * @slot icon
 */ const ItemIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})(()=>({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].icon,
        width: 'var(--nav-icon-size)',
        height: 'var(--nav-icon-size)',
        margin: 'var(--nav-icon-root-margin)',
        variants: [
            {
                props: {
                    variant: 'subItem'
                },
                style: {
                    margin: 'var(--nav-icon-sub-margin)'
                }
            }
        ]
    }));
_c2 = ItemIcon;
/**
 * @slot title
 */ const ItemTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { active, theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].title(theme),
        lineHeight: '16px',
        fontSize: theme.typography.pxToRem(10),
        fontWeight: theme.typography.fontWeightSemiBold,
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: {
                    ...active && {
                        fontWeight: theme.typography.fontWeightBold
                    }
                }
            },
            {
                props: {
                    variant: 'subItem'
                },
                style: {
                    ...theme.typography.body2,
                    fontWeight: theme.typography.fontWeightMedium,
                    ...active && {
                        fontWeight: theme.typography.fontWeightSemiBold
                    }
                }
            }
        ]
    };
});
_c3 = ItemTitle;
/**
 * @slot caption icon
 */ const ItemCaptionIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].captionIcon,
        color: 'var(--nav-item-caption-color)',
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: {
                    top: 11,
                    left: 6,
                    position: 'absolute'
                }
            }
        ]
    };
});
_c4 = ItemCaptionIcon;
/**
 * @slot info
 */ const ItemInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].info
    };
});
_c5 = ItemInfo;
/**
 * @slot arrow
 */ const ItemArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].arrow(theme),
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: {
                    margin: 0,
                    top: 11,
                    right: 6,
                    position: 'absolute'
                }
            },
            {
                props: {
                    variant: 'subItem'
                },
                style: {
                    marginRight: theme.spacing(-0.5)
                }
            }
        ]
    };
});
_c6 = ItemArrow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "ItemRoot");
__turbopack_context__.k.register(_c2, "ItemIcon");
__turbopack_context__.k.register(_c3, "ItemTitle");
__turbopack_context__.k.register(_c4, "ItemCaptionIcon");
__turbopack_context__.k.register(_c5, "ItemInfo");
__turbopack_context__.k.register(_c6, "ItemArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-collapse.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavCollapse",
    ()=>NavCollapse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
;
;
;
const NavCollapse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>![
            'depth',
            'sx'
        ].includes(prop)
})((param)=>{
    let { depth, theme } = param;
    const verticalLineStyles = {
        top: 0,
        left: 0,
        width: '2px',
        content: '""',
        position: 'absolute',
        backgroundColor: 'var(--nav-bullet-light-color)',
        bottom: 'calc(var(--nav-item-sub-height) - 2px - var(--nav-bullet-size) / 2)',
        ...theme.applyStyles('dark', {
            backgroundColor: 'var(--nav-bullet-dark-color)'
        })
    };
    return {
        ...depth && {
            ...depth + 1 !== 1 && {
                paddingLeft: 'calc(var(--nav-item-pl) + var(--nav-icon-size) / 2)',
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].ul)]: {
                    position: 'relative',
                    paddingLeft: 'var(--nav-bullet-size)',
                    '&::before': verticalLineStyles
                }
            }
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-dropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavDropdown",
    ()=>NavDropdown,
    "NavDropdownPaper",
    ()=>NavDropdownPaper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$popoverClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__popoverClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Popover/popoverClasses.js [app-client] (ecmascript) <export default as popoverClasses>");
;
;
const NavDropdownPaper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')((param)=>{
    let { theme } = param;
    return {
        minWidth: 180,
        ...theme.mixins.paperStyles(theme, {
            dropdown: true
        })
    };
});
const NavDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { open, theme } = param;
    return {
        pointerEvents: 'none',
        ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$popoverClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__popoverClasses$3e$__["popoverClasses"].paper)]: {
            boxShadow: 'none',
            overflow: 'unset',
            backdropFilter: 'none',
            background: 'transparent',
            padding: theme.spacing(0, 0.75),
            ...open && {
                pointerEvents: 'auto'
            }
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav,
    "NavLi",
    ()=>NavLi,
    "NavUl",
    ()=>NavUl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
;
;
const Nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('nav')(_templateObject());
const NavLi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])((props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].li,
            props.className
        ])
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), {
    shouldForwardProp: (prop)=>![
            'disabled',
            'sx'
        ].includes(prop)
})(()=>({
        display: 'inline-block',
        variants: [
            {
                props: {
                    disabled: true
                },
                style: {
                    cursor: 'not-allowed'
                }
            }
        ]
    }));
const NavUl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])((props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].ul,
            props.className
        ])
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)))(()=>({
        display: 'flex',
        flexDirection: 'column'
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-subheader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSubheader",
    ()=>NavSubheader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListSubheader/ListSubheader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/classes.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const NavSubheader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])((param)=>{
    let { open, children, className, ...other } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListSubheader$2f$ListSubheader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        disableSticky: true,
        component: "div",
        ...other,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].subheader,
            className
        ]),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
                width: 16,
                icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-subheader.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-subheader.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
})((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.overline,
        cursor: 'pointer',
        alignItems: 'center',
        position: 'relative',
        gap: theme.spacing(1),
        display: 'inline-flex',
        alignSelf: 'flex-start',
        color: 'var(--nav-subheader-color)',
        padding: theme.spacing(2, 1, 1, 1.5),
        fontSize: theme.typography.pxToRem(11),
        transition: theme.transitions.create([
            'color',
            'padding-left'
        ], {
            duration: theme.transitions.duration.standard
        }),
        ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconifyClasses"].root)]: {
            left: -4,
            opacity: 0,
            position: 'absolute',
            transition: theme.transitions.create([
                'opacity'
            ], {
                duration: theme.transitions.duration.standard
            })
        },
        '&:hover': {
            paddingLeft: theme.spacing(2),
            color: 'var(--nav-subheader-hover-color)',
            ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iconifyClasses"].root)]: {
                opacity: 1
            }
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$collapse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-collapse.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$subheader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-subheader.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavList",
    ()=>NavList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-dropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function NavList(param) {
    let { data, depth, render, cssVars, slotProps, checkPermissions, enabledRootRedirect } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _data_deepMatch;
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveLink"])(pathname, data.path, (_data_deepMatch = data.deepMatch) !== null && _data_deepMatch !== void 0 ? _data_deepMatch : !!data.children);
    const { open, onOpen, onClose, anchorEl, elementRef: navItemRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverHover"])();
    const isRtl = theme.direction === 'rtl';
    const id = open ? "".concat(data.title, "-popover") : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavList.useEffect": ()=>{
            // If the pathname changes, close the menu
            if (open) {
                onClose();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NavList.useEffect"], [
        pathname
    ]);
    const handleOpenMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavList.useCallback[handleOpenMenu]": ()=>{
            if (data.children) {
                onOpen();
            }
        }
    }["NavList.useCallback[handleOpenMenu]"], [
        data.children,
        onOpen
    ]);
    const renderNavItem = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavItem"], {
            ref: navItemRef,
            "aria-describedby": id,
            // slots
            path: data.path,
            icon: data.icon,
            info: data.info,
            title: data.title,
            caption: data.caption,
            // state
            active: isActive,
            open: open,
            disabled: data.disabled,
            // options
            depth: depth,
            render: render,
            hasChild: !!data.children,
            externalLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalLink"])(data.path),
            enabledRootRedirect: enabledRootRedirect,
            // styles
            slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem,
            // actions
            onMouseEnter: handleOpenMenu,
            onMouseLeave: onClose
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
            lineNumber: 60,
            columnNumber: 5
        }, this);
    const renderDropdown = ()=>{
        var _slotProps_dropdown;
        return !!data.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavDropdown"], {
            disableScrollLock: true,
            "aria-hidden": !open,
            id: id,
            open: open,
            anchorEl: anchorEl,
            anchorOrigin: {
                vertical: 'center',
                horizontal: isRtl ? 'left' : 'right'
            },
            transformOrigin: {
                vertical: 'center',
                horizontal: isRtl ? 'right' : 'left'
            },
            slotProps: {
                paper: {
                    onMouseEnter: handleOpenMenu,
                    onMouseLeave: onClose,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].dropdown.root
                }
            },
            sx: {
                ...cssVars
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavDropdownPaper"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].dropdown.paper,
                sx: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_dropdown = slotProps.dropdown) === null || _slotProps_dropdown === void 0 ? void 0 : _slotProps_dropdown.paper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSubList, {
                    data: data.children,
                    depth: depth,
                    render: render,
                    cssVars: cssVars,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    };
    // Hidden item by role
    if (data.allowedRoles && checkPermissions && checkPermissions(data.allowedRoles)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        disabled: data.disabled,
        children: [
            renderNavItem(),
            renderDropdown()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_s(NavList, "Rc3x+Q9aTqdWCpnnBZE5BO4z6Sg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverHover"]
    ];
});
_c = NavList;
// ----------------------------------------------------------------------
function NavSubList(param) {
    let { data, render, cssVars, depth = 0, slotProps, checkPermissions, enabledRootRedirect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
        sx: {
            gap: 0.5
        },
        children: data.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavList, {
                data: list,
                render: render,
                depth: depth + 1,
                cssVars: cssVars,
                slotProps: slotProps,
                checkPermissions: checkPermissions,
                enabledRootRedirect: enabledRootRedirect
            }, list.title, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c1 = NavSubList;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavList");
__turbopack_context__.k.register(_c1, "NavSubList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSectionMini",
    ()=>NavSectionMini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function NavSectionMini(param) {
    let { sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const cssVars = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionCssVars"].mini(theme),
        ...overridesVars
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].mini,
            className
        ]),
        sx: [
            {
                ...cssVars
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
            sx: {
                flex: '1 1 auto',
                gap: 'var(--nav-item-gap)'
            },
            children: data.map((group)=>{
                var _group_subheader;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                    render: render,
                    cssVars: cssVars,
                    items: group.items,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, (_group_subheader = group.subheader) !== null && _group_subheader !== void 0 ? _group_subheader : group.items[0].title, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(NavSectionMini, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"]
    ];
});
_c = NavSectionMini;
// ----------------------------------------------------------------------
function Group(param) {
    let { items, render, cssVars, slotProps, checkPermissions, enabledRootRedirect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
            sx: {
                gap: 'var(--nav-item-gap)'
            },
            children: items.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavList"], {
                    depth: 1,
                    data: list,
                    render: render,
                    cssVars: cssVars,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, list.title, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c1 = Group;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavSectionMini");
__turbopack_context__.k.register(_c1, "Group");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/mini/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$section$2d$mini$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-item.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItem",
    ()=>NavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/create-nav-item.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/nav-item-styles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function NavItem(param) {
    let { path, icon, info, title, caption, /********/ open, active, disabled, /********/ depth, render, hasChild, slotProps, className, externalLink, enabledRootRedirect, ...other } = param;
    const navItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNavItem"])({
        path,
        icon,
        info,
        depth,
        render,
        hasChild,
        externalLink,
        enabledRootRedirect
    });
    const ownerState = {
        open,
        active,
        disabled,
        variant: navItem.rootItem ? 'rootItem' : 'subItem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemRoot, {
        "aria-label": title,
        ...ownerState,
        ...navItem.baseProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.root,
            className
        ], {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.open]: open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.active]: active,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.disabled]: disabled
        }),
        sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx,
        ...other,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.icon,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon,
                children: navItem.renderIcon
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTexts, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.texts,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.texts,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTitle, {
                        ...ownerState,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.title,
                        sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: caption,
                        placement: "top-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCaptionText, {
                            ...ownerState,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.caption,
                            sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.caption,
                            children: caption
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemInfo, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.info,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.info,
                children: navItem.renderInfo
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            hasChild && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemArrow, {
                ...ownerState,
                icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill',
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.arrow,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = NavItem;
const shouldForwardProp = (prop)=>![
        'open',
        'active',
        'disabled',
        'variant',
        'sx'
    ].includes(prop);
/**
 * @slot root
 */ const ItemRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp
})((param)=>{
    let { active, open, theme } = param;
    const bulletSvg = "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\"";
    const bulletStyles = {
        left: 0,
        content: '""',
        position: 'absolute',
        width: 'var(--nav-bullet-size)',
        height: 'var(--nav-bullet-size)',
        backgroundColor: 'var(--nav-bullet-light-color)',
        mask: "url(".concat(bulletSvg, ") no-repeat 50% 50%/100% auto"),
        WebkitMask: "url(".concat(bulletSvg, ") no-repeat 50% 50%/100% auto"),
        transform: theme.direction === 'rtl' ? 'translate(calc(var(--nav-bullet-size) * 1), calc(var(--nav-bullet-size) * -0.4)) scaleX(-1)' : 'translate(calc(var(--nav-bullet-size) * -1), calc(var(--nav-bullet-size) * -0.4))',
        ...theme.applyStyles('dark', {
            backgroundColor: 'var(--nav-bullet-dark-color)'
        })
    };
    const rootItemStyles = {
        minHeight: 'var(--nav-item-root-height)',
        ...open && {
            color: 'var(--nav-item-root-open-color)',
            backgroundColor: 'var(--nav-item-root-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-root-active-color)',
            backgroundColor: 'var(--nav-item-root-active-bg)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-root-active-hover-bg)'
            },
            ...theme.applyStyles('dark', {
                color: 'var(--nav-item-root-active-color-on-dark)'
            })
        }
    };
    const subItemStyles = {
        minHeight: 'var(--nav-item-sub-height)',
        '&::before': bulletStyles,
        ...open && {
            color: 'var(--nav-item-sub-open-color)',
            backgroundColor: 'var(--nav-item-sub-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-sub-active-color)',
            backgroundColor: 'var(--nav-item-sub-active-bg)'
        }
    };
    return {
        width: '100%',
        paddingTop: 'var(--nav-item-pt)',
        paddingLeft: 'var(--nav-item-pl)',
        paddingRight: 'var(--nav-item-pr)',
        paddingBottom: 'var(--nav-item-pb)',
        borderRadius: 'var(--nav-item-radius)',
        color: 'var(--nav-item-color)',
        '&:hover': {
            backgroundColor: 'var(--nav-item-hover-bg)'
        },
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: rootItemStyles
            },
            {
                props: {
                    variant: 'subItem'
                },
                style: subItemStyles
            },
            {
                props: {
                    disabled: true
                },
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].disabled
            }
        ]
    };
});
_c1 = ItemRoot;
/**
 * @slot icon
 */ const ItemIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})(()=>({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].icon,
        width: 'var(--nav-icon-size)',
        height: 'var(--nav-icon-size)',
        margin: 'var(--nav-icon-margin)'
    }));
_c2 = ItemIcon;
/**
 * @slot texts
 */ const ItemTexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})(()=>({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].texts
    }));
_c3 = ItemTexts;
/**
 * @slot title
 */ const ItemTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].title(theme),
        ...theme.typography.body2,
        fontWeight: theme.typography.fontWeightMedium,
        variants: [
            {
                props: {
                    active: true
                },
                style: {
                    fontWeight: theme.typography.fontWeightSemiBold
                }
            }
        ]
    };
});
_c4 = ItemTitle;
/**
 * @slot caption text
 */ const ItemCaptionText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].captionText(theme),
        color: 'var(--nav-item-caption-color)'
    };
});
_c5 = ItemCaptionText;
/**
 * @slot info
 */ const ItemInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].info
    };
});
_c6 = ItemInfo;
/**
 * @slot arrow
 */ const ItemArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].arrow(theme)
    };
});
_c7 = ItemArrow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "ItemRoot");
__turbopack_context__.k.register(_c2, "ItemIcon");
__turbopack_context__.k.register(_c3, "ItemTexts");
__turbopack_context__.k.register(_c4, "ItemTitle");
__turbopack_context__.k.register(_c5, "ItemCaptionText");
__turbopack_context__.k.register(_c6, "ItemInfo");
__turbopack_context__.k.register(_c7, "ItemArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavList",
    ()=>NavList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$collapse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-collapse.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function NavList(param) {
    let { data, depth, render, slotProps, checkPermissions, enabledRootRedirect } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _data_deepMatch;
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveLink"])(pathname, data.path, (_data_deepMatch = data.deepMatch) !== null && _data_deepMatch !== void 0 ? _data_deepMatch : !!data.children);
    const { value: open, onFalse: onClose, onToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"])(isActive);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavList.useEffect": ()=>{
            if (!isActive) {
                onClose();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NavList.useEffect"], [
        pathname
    ]);
    const handleToggleMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavList.useCallback[handleToggleMenu]": ()=>{
            if (data.children) {
                onToggle();
            }
        }
    }["NavList.useCallback[handleToggleMenu]"], [
        data.children,
        onToggle
    ]);
    const renderNavItem = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavItem"], {
            ref: navItemRef,
            // slots
            path: data.path,
            icon: data.icon,
            info: data.info,
            title: data.title,
            caption: data.caption,
            // state
            open: open,
            active: isActive,
            disabled: data.disabled,
            // options
            depth: depth,
            render: render,
            hasChild: !!data.children,
            externalLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalLink"])(data.path),
            enabledRootRedirect: enabledRootRedirect,
            // styles
            slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem,
            // actions
            onClick: handleToggleMenu
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, this);
    const renderCollapse = ()=>!!data.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$collapse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavCollapse"], {
            mountOnEnter: true,
            unmountOnExit: true,
            depth: depth,
            in: open,
            "data-group": data.title,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSubList, {
                data: data.children,
                render: render,
                depth: depth,
                slotProps: slotProps,
                checkPermissions: checkPermissions,
                enabledRootRedirect: enabledRootRedirect
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    // Hidden item by role
    if (data.allowedRoles && checkPermissions && checkPermissions(data.allowedRoles)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        disabled: data.disabled,
        sx: {
            ...!!data.children && {
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].li)]: {
                    '&:first-of-type': {
                        mt: 'var(--nav-item-gap)'
                    }
                }
            }
        },
        children: [
            renderNavItem(),
            renderCollapse()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(NavList, "S32NPRrQLCEcH97rsn1f4hS34jc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"]
    ];
});
_c = NavList;
// ----------------------------------------------------------------------
function NavSubList(param) {
    let { data, render, depth = 0, slotProps, checkPermissions, enabledRootRedirect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
        sx: {
            gap: 'var(--nav-item-gap)'
        },
        children: data.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavList, {
                data: list,
                render: render,
                depth: depth + 1,
                slotProps: slotProps,
                checkPermissions: checkPermissions,
                enabledRootRedirect: enabledRootRedirect
            }, list.title, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c1 = NavSubList;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavList");
__turbopack_context__.k.register(_c1, "NavSubList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSectionVertical",
    ()=>NavSectionVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Collapse/Collapse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$subheader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-subheader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function NavSectionVertical(param) {
    let { sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const cssVars = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionCssVars"].vertical(theme),
        ...overridesVars
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].vertical,
            className
        ]),
        sx: [
            {
                ...cssVars
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
            sx: {
                flex: '1 1 auto',
                gap: 'var(--nav-item-gap)'
            },
            children: data.map((group)=>{
                var _group_subheader;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                    subheader: group.subheader,
                    items: group.items,
                    render: render,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, (_group_subheader = group.subheader) !== null && _group_subheader !== void 0 ? _group_subheader : group.items[0].title, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(NavSectionVertical, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"]
    ];
});
_c = NavSectionVertical;
// ----------------------------------------------------------------------
function Group(param) {
    let { items, render, subheader, slotProps, checkPermissions, enabledRootRedirect } = param;
    _s1();
    const groupOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"])(true);
    const renderContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
            sx: {
                gap: 'var(--nav-item-gap)'
            },
            children: items.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavList"], {
                    data: list,
                    render: render,
                    depth: 1,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, list.title, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        children: subheader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$subheader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavSubheader"], {
                    "data-title": subheader,
                    open: groupOpen.value,
                    onClick: groupOpen.onToggle,
                    sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.subheader,
                    children: subheader
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Collapse$2f$Collapse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    in: groupOpen.value,
                    children: renderContent()
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : renderContent()
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s1(Group, "tsaOCkCl1x13al09g8mKulohypE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoolean"]
    ];
});
_c1 = Group;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavSectionVertical");
__turbopack_context__.k.register(_c1, "Group");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$section$2d$vertical$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-item.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItem",
    ()=>NavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/create-nav-item.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/nav-item-styles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function NavItem(param) {
    let { path, icon, info, title, caption, /********/ open, active, disabled, /********/ depth, render, hasChild, slotProps, className, externalLink, enabledRootRedirect, ...other } = param;
    const navItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$create$2d$nav$2d$item$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNavItem"])({
        path,
        icon,
        info,
        depth,
        render,
        hasChild,
        externalLink,
        enabledRootRedirect
    });
    const ownerState = {
        open,
        active,
        disabled,
        variant: navItem.rootItem ? 'rootItem' : 'subItem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemRoot, {
        "aria-label": title,
        ...ownerState,
        ...navItem.baseProps,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.root,
            className
        ], {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.open]: open,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.active]: active,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].state.disabled]: disabled
        }),
        sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.sx,
        ...other,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.icon,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon,
                children: navItem.renderIcon
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTitle, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.title,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.title,
                children: title
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: caption,
                arrow: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemCaptionIcon, {
                    ...ownerState,
                    icon: "eva:info-outline",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.caption,
                    sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.caption
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemInfo, {
                ...ownerState,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.info,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.info,
                children: navItem.renderInfo
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            hasChild && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemArrow, {
                ...ownerState,
                icon: navItem.subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill',
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].item.arrow,
                sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.arrow
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = NavItem;
const shouldForwardProp = (prop)=>![
        'open',
        'active',
        'disabled',
        'variant',
        'sx'
    ].includes(prop);
/**
 * @slot root
 */ const ItemRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp
})((param)=>{
    let { active, open, theme } = param;
    const rootItemStyles = {
        padding: 'var(--nav-item-root-padding)',
        minHeight: 'var(--nav-item-root-height)',
        ...open && {
            color: 'var(--nav-item-root-open-color)',
            backgroundColor: 'var(--nav-item-root-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-root-active-color)',
            backgroundColor: 'var(--nav-item-root-active-bg)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-root-active-hover-bg)'
            },
            ...theme.applyStyles('dark', {
                color: 'var(--nav-item-root-active-color-on-dark)'
            })
        }
    };
    const subItemStyles = {
        padding: 'var(--nav-item-sub-padding)',
        minHeight: 'var(--nav-item-sub-height)',
        color: theme.vars.palette.text.secondary,
        ...open && {
            color: 'var(--nav-item-sub-open-color)',
            backgroundColor: 'var(--nav-item-sub-open-bg)'
        },
        ...active && {
            color: 'var(--nav-item-sub-active-color)',
            backgroundColor: 'var(--nav-item-sub-active-bg)'
        }
    };
    return {
        width: '100%',
        flexShrink: 0,
        color: 'var(--nav-item-color)',
        borderRadius: 'var(--nav-item-radius)',
        '&:hover': {
            backgroundColor: 'var(--nav-item-hover-bg)'
        },
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: rootItemStyles
            },
            {
                props: {
                    variant: 'subItem'
                },
                style: subItemStyles
            },
            {
                props: {
                    disabled: true
                },
                style: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].disabled
            }
        ]
    };
});
_c1 = ItemRoot;
/**
 * @slot icon
 */ const ItemIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})(()=>({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].icon,
        width: 'var(--nav-icon-size)',
        height: 'var(--nav-icon-size)',
        margin: 'var(--nav-icon-root-margin)',
        variants: [
            {
                props: {
                    variant: 'subItem'
                },
                style: {
                    margin: 'var(--nav-icon-sub-margin)'
                }
            }
        ]
    }));
_c2 = ItemIcon;
/**
 * @slot title
 */ const ItemTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].title(theme),
        ...theme.typography.body2,
        whiteSpace: 'nowrap',
        fontWeight: theme.typography.fontWeightMedium,
        variants: [
            {
                props: {
                    active: true
                },
                style: {
                    fontWeight: theme.typography.fontWeightSemiBold
                }
            }
        ]
    };
});
_c3 = ItemTitle;
/**
 * @slot caption icon
 */ const ItemCaptionIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].captionIcon,
        color: 'var(--nav-item-caption-color)',
        variants: [
            {
                props: {
                    variant: 'rootItem'
                },
                style: {
                    marginLeft: theme.spacing(0.75)
                }
            }
        ]
    };
});
_c4 = ItemCaptionIcon;
/**
 * @slot info
 */ const ItemInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].info
    };
});
_c5 = ItemInfo;
/**
 * @slot arrow
 */ const ItemArrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
    shouldForwardProp
})((param)=>{
    let { theme } = param;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$nav$2d$item$2d$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItemStyles"].arrow(theme),
        variants: [
            {
                props: {
                    variant: 'subItem'
                },
                style: {
                    marginRight: theme.spacing(-0.5)
                }
            }
        ]
    };
});
_c6 = ItemArrow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "NavItem");
__turbopack_context__.k.register(_c1, "ItemRoot");
__turbopack_context__.k.register(_c2, "ItemIcon");
__turbopack_context__.k.register(_c3, "ItemTitle");
__turbopack_context__.k.register(_c4, "ItemCaptionIcon");
__turbopack_context__.k.register(_c5, "ItemInfo");
__turbopack_context__.k.register(_c6, "ItemArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavList",
    ()=>NavList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$popoverClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__popoverClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Popover/popoverClasses.js [app-client] (ecmascript) <export default as popoverClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-dropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function NavList(param) {
    let { data, depth, render, cssVars, slotProps, checkPermissions, enabledRootRedirect } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    var _data_deepMatch;
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveLink"])(pathname, data.path, (_data_deepMatch = data.deepMatch) !== null && _data_deepMatch !== void 0 ? _data_deepMatch : !!data.children);
    const { open, onOpen, onClose, anchorEl, elementRef: navItemRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverHover"])();
    const isRtl = theme.direction === 'rtl';
    const id = open ? "".concat(data.title, "-popover") : undefined;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavList.useEffect": ()=>{
            // If the pathname changes, close the menu
            if (open) {
                onClose();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["NavList.useEffect"], [
        pathname
    ]);
    const handleOpenMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavList.useCallback[handleOpenMenu]": ()=>{
            if (data.children) {
                onOpen();
            }
        }
    }["NavList.useCallback[handleOpenMenu]"], [
        data.children,
        onOpen
    ]);
    const renderNavItem = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavItem"], {
            ref: navItemRef,
            "aria-describedby": id,
            // slots
            title: data.title,
            path: data.path,
            icon: data.icon,
            info: data.info,
            caption: data.caption,
            // state
            active: isActive,
            open: open,
            disabled: data.disabled,
            // options
            depth: depth,
            render: render,
            hasChild: !!data.children,
            externalLink: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalLink"])(data.path),
            enabledRootRedirect: enabledRootRedirect,
            // styles
            slotProps: depth === 1 ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.rootItem : slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem,
            // actions
            onMouseEnter: handleOpenMenu,
            onMouseLeave: onClose
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
            lineNumber: 61,
            columnNumber: 5
        }, this);
    const renderDropdown = ()=>{
        var _slotProps_dropdown;
        return !!data.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavDropdown"], {
            disableScrollLock: true,
            "aria-hidden": !open,
            id: id,
            open: open,
            anchorEl: anchorEl,
            anchorOrigin: depth === 1 ? {
                vertical: 'bottom',
                horizontal: isRtl ? 'right' : 'left'
            } : {
                vertical: 'center',
                horizontal: isRtl ? 'left' : 'right'
            },
            transformOrigin: depth === 1 ? {
                vertical: 'top',
                horizontal: isRtl ? 'right' : 'left'
            } : {
                vertical: 'center',
                horizontal: isRtl ? 'right' : 'left'
            },
            slotProps: {
                paper: {
                    onMouseEnter: handleOpenMenu,
                    onMouseLeave: onClose,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].dropdown.root
                }
            },
            sx: {
                ...cssVars,
                ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$popoverClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__popoverClasses$3e$__["popoverClasses"].paper)]: {
                    ...depth === 1 && {
                        pt: 1,
                        ml: -0.75
                    }
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavDropdownPaper"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].dropdown.paper,
                sx: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_dropdown = slotProps.dropdown) === null || _slotProps_dropdown === void 0 ? void 0 : _slotProps_dropdown.paper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSubList, {
                    data: data.children,
                    depth: depth,
                    render: render,
                    cssVars: cssVars,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    // Hidden item by role
    if (data.allowedRoles && checkPermissions && checkPermissions(data.allowedRoles)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        disabled: data.disabled,
        children: [
            renderNavItem(),
            renderDropdown()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(NavList, "Rc3x+Q9aTqdWCpnnBZE5BO4z6Sg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopoverHover"]
    ];
});
_c = NavList;
// ----------------------------------------------------------------------
function NavSubList(param) {
    let { data, render, cssVars, depth = 0, slotProps, checkPermissions, enabledRootRedirect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
        sx: {
            gap: 0.5
        },
        children: data.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavList, {
                data: list,
                render: render,
                depth: depth + 1,
                cssVars: cssVars,
                slotProps: slotProps,
                checkPermissions: checkPermissions,
                enabledRootRedirect: enabledRootRedirect
            }, list.title, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_c1 = NavSubList;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavList");
__turbopack_context__.k.register(_c1, "NavSubList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavSectionHorizontal",
    ()=>NavSectionHorizontal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-list.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/nav-elements.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function NavSectionHorizontal(param) {
    let { sx, data, render, className, slotProps, checkPermissions, enabledRootRedirect, cssVars: overridesVars, ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const cssVars = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionCssVars"].horizontal(theme),
        ...overridesVars
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scrollbar"], {
        sx: {
            height: 1
        },
        slotProps: {
            contentSx: {
                height: 1,
                display: 'flex',
                alignItems: 'center'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSectionClasses"].horizontal,
                className
            ]),
            sx: [
                ()=>({
                        ...cssVars,
                        height: 1,
                        mx: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: 'var(--nav-height)'
                    }),
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            ...other,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
                sx: {
                    flexDirection: 'row',
                    gap: 'var(--nav-item-gap)'
                },
                children: data.map((group)=>{
                    var _group_subheader;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        render: render,
                        cssVars: cssVars,
                        items: group.items,
                        slotProps: slotProps,
                        checkPermissions: checkPermissions,
                        enabledRootRedirect: enabledRootRedirect
                    }, (_group_subheader = group.subheader) !== null && _group_subheader !== void 0 ? _group_subheader : group.items[0].title, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(NavSectionHorizontal, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"]
    ];
});
_c = NavSectionHorizontal;
// ----------------------------------------------------------------------
function Group(param) {
    let { items, render, cssVars, slotProps, checkPermissions, enabledRootRedirect } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLi"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$nav$2d$elements$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavUl"], {
            sx: {
                flexDirection: 'row',
                gap: 'var(--nav-item-gap)'
            },
            children: items.map((list)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavList"], {
                    depth: 1,
                    data: list,
                    render: render,
                    cssVars: cssVars,
                    slotProps: slotProps,
                    checkPermissions: checkPermissions,
                    enabledRootRedirect: enabledRootRedirect
                }, list.title, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c1 = Group;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavSectionHorizontal");
__turbopack_context__.k.register(_c1, "Group");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$section$2d$horizontal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-item.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/nav-section/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/utils/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/index.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchNotFound",
    ()=>SearchNotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
'use client';
;
;
;
function SearchNotFound(param) {
    let { query, sx, slotProps, ...other } = param;
    var _slotProps_title, _slotProps_title1;
    if (!query) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            variant: "body2",
            ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.description,
            children: "Please enter keywords"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: [
            {
                gap: 1,
                display: 'flex',
                borderRadius: 1.5,
                textAlign: 'center',
                flexDirection: 'column'
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "h6",
                ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.title,
                sx: [
                    {
                        color: 'text.primary'
                    },
                    ...Array.isArray(slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_title = slotProps.title) === null || _slotProps_title === void 0 ? void 0 : _slotProps_title.sx) ? slotProps.title.sx : [
                        slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_title1 = slotProps.title) === null || _slotProps_title1 === void 0 ? void 0 : _slotProps_title1.sx
                    ]
                ],
                children: "Not found"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "body2",
                ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.description,
                children: [
                    "No results found for  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: '"'.concat(query, '"')
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    " Try checking for typos or using complete words."
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = SearchNotFound;
var _c;
__turbopack_context__.k.register(_c, "SearchNotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/search-not-found/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$search$2d$not$2d$found$2f$search$2d$not$2d$found$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varPath",
    ()=>varPath
]);
const varPath = (props)=>({
        animate: {
            fillOpacity: [
                0,
                0,
                1
            ],
            pathLength: [
                1,
                0.4,
                0
            ],
            ...props,
            transition: {
                duration: 2,
                ease: [
                    0.43,
                    0.13,
                    0.23,
                    0.96
                ],
                ...props === null || props === void 0 ? void 0 : props.transition
            }
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitionEnter",
    ()=>transitionEnter,
    "transitionExit",
    ()=>transitionExit
]);
const transitionEnter = (props)=>({
        duration: 0.64,
        ease: [
            0.43,
            0.13,
            0.23,
            0.96
        ],
        ...props
    });
const transitionExit = (props)=>({
        duration: 0.48,
        ease: [
            0.43,
            0.13,
            0.23,
            0.96
        ],
        ...props
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varFade",
    ()=>varFade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varFade = (direction, options)=>{
    const distance = (options === null || options === void 0 ? void 0 : options.distance) || 120;
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])()
            },
            exit: {
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])()
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/zoom.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varZoom",
    ()=>varZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varZoom = (direction, options)=>{
    const distance = (options === null || options === void 0 ? void 0 : options.distance) || 720;
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inUp: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inDown: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inLeft: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inRight: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outUp: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outDown: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outLeft: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outRight: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/flip.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varFlip",
    ()=>varFlip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varFlip = (direction, options)=>{
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ inX: {
            initial: {
                rotateX: -180,
                opacity: 0
            },
            animate: {
                rotateX: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                rotateX: -180,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inY: {
            initial: {
                rotateY: -180,
                opacity: 0
            },
            animate: {
                rotateY: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                rotateY: -180,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ outX: {
            initial: {
                rotateX: 0,
                opacity: 1
            },
            animate: {
                rotateX: 70,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outY: {
            initial: {
                rotateY: 0,
                opacity: 1
            },
            animate: {
                rotateY: 70,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/slide.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varSlide",
    ()=>varSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varSlide = (direction, options)=>{
    const distance = (options === null || options === void 0 ? void 0 : options.distance) || 160;
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ inUp: {
            initial: {
                y: distance
            },
            animate: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inDown: {
            initial: {
                y: -distance
            },
            animate: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inLeft: {
            initial: {
                x: -distance
            },
            animate: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inRight: {
            initial: {
                x: distance
            },
            animate: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ outUp: {
            initial: {
                y: 0
            },
            animate: {
                y: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outDown: {
            initial: {
                y: 0
            },
            animate: {
                y: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outLeft: {
            initial: {
                x: 0
            },
            animate: {
                x: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outRight: {
            initial: {
                x: 0
            },
            animate: {
                x: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/scale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varScale",
    ()=>varScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varScale = (direction, options)=>{
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inX: {
            initial: {
                scaleX: 0,
                opacity: 0
            },
            animate: {
                scaleX: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scaleX: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inY: {
            initial: {
                scaleY: 0,
                opacity: 0
            },
            animate: {
                scaleY: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scaleY: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outX: {
            initial: {
                scaleX: 1,
                opacity: 1
            },
            animate: {
                scaleX: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        },
        outY: {
            initial: {
                scaleY: 1,
                opacity: 1
            },
            animate: {
                scaleY: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/bounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varBounce",
    ()=>varBounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varBounce = (direction, options)=>{
    const distance = (options === null || options === void 0 ? void 0 : options.distance) || 720;
    const variants = {
        /**** In ****/ in: {
            initial: {},
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        inUp: {
            initial: {},
            animate: {
                y: [
                    distance,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(options === null || options === void 0 ? void 0 : options.transition)
                }
            }
        },
        inDown: {
            initial: {},
            animate: {
                y: [
                    -distance,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        inLeft: {
            initial: {},
            animate: {
                x: [
                    -distance,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        inRight: {
            initial: {},
            animate: {
                x: [
                    distance,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        /**** Out ****/ out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -distance
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    distance
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -distance
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    distance
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(options === null || options === void 0 ? void 0 : options.transition)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/rotate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varRotate",
    ()=>varRotate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
;
const varRotate = (direction, options)=>{
    const deg = (options === null || options === void 0 ? void 0 : options.deg) || 360;
    const transitionIn = options === null || options === void 0 ? void 0 : options.transitionIn;
    const transitionOut = options === null || options === void 0 ? void 0 : options.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                opacity: 0,
                rotate: -deg
            },
            animate: {
                opacity: 1,
                rotate: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                opacity: 0,
                rotate: -deg,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ out: {
            initial: {
                opacity: 1,
                rotate: 0
            },
            animate: {
                opacity: 0,
                rotate: -deg,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transitionHover",
    ()=>transitionHover,
    "transitionTap",
    ()=>transitionTap,
    "varHover",
    ()=>varHover,
    "varTap",
    ()=>varTap
]);
const varHover = function() {
    let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1.09;
    return {
        scale: value
    };
};
const varTap = function() {
    let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.9;
    return {
        scale: value
    };
};
const transitionTap = (props)=>({
        type: 'spring',
        stiffness: 400,
        damping: 18,
        ...props
    });
const transitionHover = (props)=>({
        duration: 0.32,
        ease: [
            0.43,
            0.13,
            0.23,
            0.96
        ],
        ...props
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varContainer",
    ()=>varContainer
]);
const varContainer = (props)=>({
        animate: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
                ...props === null || props === void 0 ? void 0 : props.transitionIn
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                ...props === null || props === void 0 ? void 0 : props.transitionOut
            }
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/background.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varBgColor",
    ()=>varBgColor,
    "varBgKenburns",
    ()=>varBgKenburns,
    "varBgPan",
    ()=>varBgPan
]);
const varBgColor = (colors, options)=>({
        animate: {
            background: colors,
            ...options,
            transition: {
                duration: 5,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
                ...options === null || options === void 0 ? void 0 : options.transition
            }
        }
    });
const varBgKenburns = (direction, options)=>{
    const transition = {
        duration: 5,
        ease: 'easeOut',
        ...options === null || options === void 0 ? void 0 : options.transition
    };
    const variants = {
        top: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    '50% 16%',
                    '50% top'
                ],
                ...options,
                transition
            }
        },
        bottom: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    '50% 84%',
                    '50% bottom'
                ],
                ...options,
                transition
            }
        },
        left: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    20
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    '16% 50%',
                    '0% left'
                ],
                ...options,
                transition
            }
        },
        right: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    -20
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    '84% 50%',
                    '0% right'
                ],
                ...options,
                transition
            }
        }
    };
    return variants[direction];
};
const varBgPan = (direction, colors, options)=>{
    const gradient = (deg)=>"linear-gradient(".concat(deg, "deg, ").concat(colors.join(', '), ")");
    const transition = {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
        ...options === null || options === void 0 ? void 0 : options.transition
    };
    const variants = {
        top: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    'center 99%',
                    'center 1%'
                ],
                backgroundSize: [
                    '100% 600%',
                    '100% 600%'
                ],
                ...options,
                transition
            }
        },
        right: {
            animate: {
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundPosition: [
                    '1% center',
                    '99% center'
                ],
                backgroundSize: [
                    '600% 100%',
                    '600% 100%'
                ],
                ...options,
                transition
            }
        },
        bottom: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    'center 1%',
                    'center 99%'
                ],
                backgroundSize: [
                    '100% 600%',
                    '100% 600%'
                ],
                ...options,
                transition
            }
        },
        left: {
            animate: {
                backgroundPosition: [
                    '99% center',
                    '1% center'
                ],
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundSize: [
                    '600% 100%',
                    '600% 100%'
                ],
                ...options,
                transition
            }
        }
    };
    return variants[direction];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$zoom$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/zoom.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$flip$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/flip.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$slide$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/slide.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/scale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/bounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$rotate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/rotate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$background$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/background.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateText",
    ()=>AnimateText,
    "animateTextClasses",
    ()=>animateTextClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        ""
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const animateTextClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__root'),
    lines: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__lines'),
    line: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__line'),
    word: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__word'),
    char: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__char'),
    space: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__space'),
    srOnly: 'sr-only'
};
const srOnlyStyles = {
    p: 0,
    width: '1px',
    height: '1px',
    margin: '-1px',
    borderWidth: 0,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0, 0, 0, 0)'
};
function AnimateText(param) {
    let { sx, variants, className, textContent, once = true, amount = 1 / 3, component = 'p', repeatDelayMs = 100, ...other } = param;
    _s();
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimateText.useMemo[textArray]": ()=>Array.isArray(textContent) ? textContent : [
                textContent
            ]
    }["AnimateText.useMemo[textArray]"], [
        textContent
    ]);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(textRef, {
        once,
        amount
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateText.useEffect": ()=>{
            let timeout;
            const triggerAnimation = {
                "AnimateText.useEffect.triggerAnimation": ()=>{
                    if (repeatDelayMs) {
                        timeout = setTimeout({
                            "AnimateText.useEffect.triggerAnimation": async ()=>{
                                await animationControls.start('initial');
                                animationControls.start('animate');
                            }
                        }["AnimateText.useEffect.triggerAnimation"], repeatDelayMs);
                    } else {
                        animationControls.start('animate');
                    }
                }
            }["AnimateText.useEffect.triggerAnimation"];
            if (isInView) {
                triggerAnimation();
            } else {
                animationControls.start('initial');
            }
            return ({
                "AnimateText.useEffect": ()=>clearTimeout(timeout)
            })["AnimateText.useEffect"];
        }
    }["AnimateText.useEffect"], [
        animationControls,
        isInView,
        repeatDelayMs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            animateTextClasses.root,
            className
        ]),
        sx: [
            {
                p: 0,
                m: 0,
                /**
           * Utilities for improving accessibility with screen readers.
           * https://v1.tailwindcss.com/docs/screen-readers
           */ ["& .".concat(animateTextClasses.srOnly)]: srOnlyStyles
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: animateTextClasses.srOnly,
                children: textArray.join(' ')
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTextContainer, {
                "aria-hidden": true,
                ref: textRef,
                initial: "initial",
                animate: animationControls,
                exit: "exit",
                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varContainer"])(),
                className: animateTextClasses.lines,
                children: textArray === null || textArray === void 0 ? void 0 : textArray.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextLine, {
                        "data-index": lineIndex,
                        className: animateTextClasses.line,
                        sx: {
                            display: 'block'
                        },
                        children: line.split(' ').map((word, wordIndex)=>{
                            const lastWordInline = line.split(' ')[line.split(' ').length - 1];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextWord, {
                                "data-index": wordIndex,
                                className: animateTextClasses.word,
                                sx: {
                                    display: 'inline-block'
                                },
                                children: [
                                    word.split('').map((char, charIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTextChar, {
                                            variants: variants !== null && variants !== void 0 ? variants : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varFade"])('in'),
                                            "data-index": charIndex,
                                            className: animateTextClasses.char,
                                            sx: {
                                                display: 'inline-block'
                                            },
                                            children: char
                                        }, "".concat(char, "-").concat(charIndex), false, {
                                            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this)),
                                    lastWordInline !== word && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextWord, {
                                        className: animateTextClasses.space,
                                        sx: {
                                            display: 'inline-block'
                                        },
                                        children: " "
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                                        lineNumber: 154,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, "".concat(word, "-").concat(wordIndex), true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this);
                        })
                    }, "".concat(line, "-").concat(lineIndex), false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(AnimateText, "GIOFwBMdWis5czoN6ZoVyapfvBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = AnimateText;
// ----------------------------------------------------------------------
const TextLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')(_templateObject());
_c1 = TextLine;
const TextWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')(_templateObject1());
_c2 = TextWord;
const AnimatedTextContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span)(_templateObject2());
_c3 = AnimatedTextContainer;
const AnimatedTextChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span)(_templateObject3());
_c4 = AnimatedTextChar;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "AnimateText");
__turbopack_context__.k.register(_c1, "TextLine");
__turbopack_context__.k.register(_c2, "TextWord");
__turbopack_context__.k.register(_c3, "AnimatedTextContainer");
__turbopack_context__.k.register(_c4, "AnimatedTextChar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateLogoRotate",
    ()=>AnimateLogoRotate,
    "AnimateLogoZoom",
    ()=>AnimateLogoZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function AnimateLogoZoom(param) {
    let { logo, slotProps, sx, ...other } = param;
    var _slotProps_logo, _slotProps_logo1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomRoot, {
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span, {
                animate: {
                    scale: [
                        1,
                        0.9,
                        0.9,
                        1,
                        1
                    ],
                    opacity: [
                        1,
                        0.48,
                        0.48,
                        1,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeatDelay: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                children: logo !== null && logo !== void 0 ? logo : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                    disabled: true,
                    ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.logo,
                    sx: [
                        {
                            width: 64,
                            height: 64
                        },
                        ...Array.isArray(slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_logo = slotProps.logo) === null || _slotProps_logo === void 0 ? void 0 : _slotProps_logo.sx) ? slotProps.logo.sx : [
                            slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_logo1 = slotProps.logo) === null || _slotProps_logo1 === void 0 ? void 0 : _slotProps_logo1.sx
                        ]
                    ]
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomPrimaryOutline, {
                animate: {
                    scale: [
                        1.6,
                        1,
                        1,
                        1.6,
                        1.6
                    ],
                    rotate: [
                        270,
                        0,
                        0,
                        270,
                        270
                    ],
                    opacity: [
                        0.25,
                        1,
                        1,
                        1,
                        0.25
                    ],
                    borderRadius: [
                        '25%',
                        '25%',
                        '50%',
                        '50%',
                        '25%'
                    ]
                },
                transition: {
                    ease: 'linear',
                    duration: 3.2,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomSecondaryOutline, {
                animate: {
                    scale: [
                        1,
                        1.2,
                        1.2,
                        1,
                        1
                    ],
                    rotate: [
                        0,
                        270,
                        270,
                        0,
                        0
                    ],
                    opacity: [
                        1,
                        0.25,
                        0.25,
                        0.25,
                        1
                    ],
                    borderRadius: [
                        '25%',
                        '25%',
                        '50%',
                        '50%',
                        '25%'
                    ]
                },
                transition: {
                    ease: 'linear',
                    duration: 3.2,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = AnimateLogoZoom;
const LogoZoomRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        width: 120,
        height: 120,
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center'
    }));
_c1 = LogoZoomRoot;
const LogoZoomPrimaryOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span)((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
        border: "solid 3px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.primary.darkChannel, 0.24))
    };
});
_c2 = LogoZoomPrimaryOutline;
const LogoZoomSecondaryOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span)((param)=>{
    let { theme } = param;
    return {
        width: '100%',
        height: '100%',
        position: 'absolute',
        border: "solid 8px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.primary.darkChannel, 0.24))
    };
});
_c3 = LogoZoomSecondaryOutline;
function AnimateLogoRotate(param) {
    let { logo, sx, slotProps, ...other } = param;
    var _slotProps_logo, _slotProps_logo1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRotateRoot, {
        sx: sx,
        ...other,
        children: [
            logo !== null && logo !== void 0 ? logo : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.logo,
                sx: [
                    {
                        zIndex: 9,
                        width: 40,
                        height: 40
                    },
                    ...Array.isArray(slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_logo = slotProps.logo) === null || _slotProps_logo === void 0 ? void 0 : _slotProps_logo.sx) ? slotProps.logo.sx : [
                        slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_logo1 = slotProps.logo) === null || _slotProps_logo1 === void 0 ? void 0 : _slotProps_logo1.sx
                    ]
                ]
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRotateBackground, {
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_c4 = AnimateLogoRotate;
const LogoRotateRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        width: 96,
        height: 96,
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center'
    }));
_c5 = LogoRotateRoot;
const LogoRotateBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span)((param)=>{
    let { theme } = param;
    return {
        width: '100%',
        height: '100%',
        opacity: 0.16,
        borderRadius: '50%',
        position: 'absolute',
        backgroundImage: "linear-gradient(135deg, transparent 50%, ".concat(theme.vars.palette.primary.main, " 100%)"),
        transition: theme.transitions.create([
            'opacity'
        ], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        })
    };
});
_c6 = LogoRotateBackground;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "AnimateLogoZoom");
__turbopack_context__.k.register(_c1, "LogoZoomRoot");
__turbopack_context__.k.register(_c2, "LogoZoomPrimaryOutline");
__turbopack_context__.k.register(_c3, "LogoZoomSecondaryOutline");
__turbopack_context__.k.register(_c4, "AnimateLogoRotate");
__turbopack_context__.k.register(_c5, "LogoRotateRoot");
__turbopack_context__.k.register(_c6, "LogoRotateBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateBorder",
    ()=>AnimateBorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "translateX(",
        "px) translateY(",
        "px) translateX(-50%) translateY(-50%)"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// ----------------------------------------------------------------------
const animateBorderClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__root'),
    primaryBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__primary'),
    secondaryBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__secondary'),
    svgWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__svg__wrapper'),
    movingShape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__moving__shape')
};
function AnimateBorder(param) {
    let { sx, children, duration, slotProps, className, ...other } = param;
    var _slotProps_svgSettings, _slotProps_svgSettings1, _slotProps_primaryBorder;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primaryBorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const secondaryBorderStyles = useComputedElementStyles(theme, primaryBorderRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateBorder.useEffect": ()=>{
            const handleVisibility = {
                "AnimateBorder.useEffect.handleVisibility": ()=>{
                    if (rootRef.current) {
                        const displayStyle = getComputedStyle(rootRef.current).display;
                        setIsHidden(displayStyle === 'none');
                    }
                }
            }["AnimateBorder.useEffect.handleVisibility"];
            handleVisibility();
            window.addEventListener('resize', handleVisibility);
            return ({
                "AnimateBorder.useEffect": ()=>{
                    window.removeEventListener('resize', handleVisibility);
                }
            })["AnimateBorder.useEffect"];
        }
    }["AnimateBorder.useEffect"], []);
    const outlineColor = typeof (slotProps === null || slotProps === void 0 ? void 0 : slotProps.outlineColor) === 'function' ? slotProps === null || slotProps === void 0 ? void 0 : slotProps.outlineColor(theme) : slotProps === null || slotProps === void 0 ? void 0 : slotProps.outlineColor;
    const borderProps = {
        duration,
        isHidden,
        rx: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_svgSettings = slotProps.svgSettings) === null || _slotProps_svgSettings === void 0 ? void 0 : _slotProps_svgSettings.rx,
        ry: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_svgSettings1 = slotProps.svgSettings) === null || _slotProps_svgSettings1 === void 0 ? void 0 : _slotProps_svgSettings1.ry
    };
    const renderPrimaryBorder = ()=>{
        var _slotProps_primaryBorder, _slotProps_primaryBorder1, _slotProps_primaryBorder2, _slotProps_primaryBorder3;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingBorder, {
            ...borderProps,
            ref: primaryBorderRef,
            size: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder = slotProps.primaryBorder) === null || _slotProps_primaryBorder === void 0 ? void 0 : _slotProps_primaryBorder.size,
            sx: [
                {
                    ...theme.mixins.borderGradient({
                        padding: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder1 = slotProps.primaryBorder) === null || _slotProps_primaryBorder1 === void 0 ? void 0 : _slotProps_primaryBorder1.width
                    })
                },
                ...Array.isArray(slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder2 = slotProps.primaryBorder) === null || _slotProps_primaryBorder2 === void 0 ? void 0 : _slotProps_primaryBorder2.sx) ? slotProps.primaryBorder.sx : [
                    slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder3 = slotProps.primaryBorder) === null || _slotProps_primaryBorder3 === void 0 ? void 0 : _slotProps_primaryBorder3.sx
                ]
            ]
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
            lineNumber: 97,
            columnNumber: 5
        }, this);
    };
    const renderSecondaryBorder = ()=>{
        var _slotProps_secondaryBorder, _slotProps_primaryBorder, _slotProps_secondaryBorder1, _slotProps_secondaryBorder2, _slotProps_secondaryBorder3;
        var _slotProps_secondaryBorder_size, _slotProps_secondaryBorder_width;
        return (slotProps === null || slotProps === void 0 ? void 0 : slotProps.secondaryBorder) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingBorder, {
            ...borderProps,
            size: (_slotProps_secondaryBorder_size = slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_secondaryBorder = slotProps.secondaryBorder) === null || _slotProps_secondaryBorder === void 0 ? void 0 : _slotProps_secondaryBorder.size) !== null && _slotProps_secondaryBorder_size !== void 0 ? _slotProps_secondaryBorder_size : slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder = slotProps.primaryBorder) === null || _slotProps_primaryBorder === void 0 ? void 0 : _slotProps_primaryBorder.size,
            sx: [
                {
                    ...theme.mixins.borderGradient({
                        padding: (_slotProps_secondaryBorder_width = slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_secondaryBorder1 = slotProps.secondaryBorder) === null || _slotProps_secondaryBorder1 === void 0 ? void 0 : _slotProps_secondaryBorder1.width) !== null && _slotProps_secondaryBorder_width !== void 0 ? _slotProps_secondaryBorder_width : secondaryBorderStyles.padding
                    }),
                    borderRadius: secondaryBorderStyles.borderRadius,
                    transform: 'scale(-1, -1)'
                },
                ...Array.isArray(slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_secondaryBorder2 = slotProps.secondaryBorder) === null || _slotProps_secondaryBorder2 === void 0 ? void 0 : _slotProps_secondaryBorder2.sx) ? slotProps.secondaryBorder.sx : [
                    slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_secondaryBorder3 = slotProps.secondaryBorder) === null || _slotProps_secondaryBorder3 === void 0 ? void 0 : _slotProps_secondaryBorder3.sx
                ]
            ]
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        dir: "ltr",
        ref: rootRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            animateBorderClasses.root,
            className
        ]),
        sx: [
            {
                minWidth: 40,
                minHeight: 40,
                overflow: 'hidden',
                position: 'relative',
                width: 'fit-content',
                '&::before': theme.mixins.borderGradient({
                    color: outlineColor,
                    padding: slotProps === null || slotProps === void 0 ? void 0 : (_slotProps_primaryBorder = slotProps.primaryBorder) === null || _slotProps_primaryBorder === void 0 ? void 0 : _slotProps_primaryBorder.width
                }),
                ...!!children && {
                    minWidth: 'unset',
                    minHeight: 'unset'
                }
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            renderPrimaryBorder(),
            renderSecondaryBorder(),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(AnimateBorder, "HStExg5p2T4i8M0NyjEFUYbVhhA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        useComputedElementStyles
    ];
});
_c = AnimateBorder;
function MovingBorder(param) {
    let { sx, size, isHidden, rx = '30%', ry = '30%', duration = 8, ...other } = param;
    _s1();
    const svgRectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const updateAnimationFrame = (time)=>{
        if (!svgRectRef.current) return;
        try {
            const pathLength = svgRectRef.current.getTotalLength();
            const pixelsPerMs = pathLength / (duration * 1000);
            progress.set(time * pixelsPerMs % pathLength);
        } catch (e) {
            return;
        }
    };
    const calculateTransform = (val)=>{
        if (!svgRectRef.current) return {
            x: 0,
            y: 0
        };
        try {
            const point = svgRectRef.current.getPointAtLength(val);
            return point ? {
                x: point.x,
                y: point.y
            } : {
                x: 0,
                y: 0
            };
        } catch (e) {
            return {
                x: 0,
                y: 0
            };
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])({
        "MovingBorder.useAnimationFrame": (time)=>!isHidden ? updateAnimationFrame(time) : undefined
    }["MovingBorder.useAnimationFrame"]);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, {
        "MovingBorder.useTransform[x]": (val)=>calculateTransform(val).x
    }["MovingBorder.useTransform[x]"]);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, {
        "MovingBorder.useTransform[y]": (val)=>calculateTransform(val).y
    }["MovingBorder.useTransform[y]"]);
    const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"])(_templateObject(), x, y);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: "span",
        sx: [
            {
                textAlign: 'initial'
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                width: "100%",
                height: "100%",
                className: animateBorderClasses.svgWrapper,
                style: {
                    position: 'absolute'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    ref: svgRectRef,
                    fill: "none",
                    width: "100%",
                    height: "100%",
                    rx: rx,
                    ry: ry
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span,
                style: {
                    transform
                },
                className: animateBorderClasses.movingShape,
                sx: {
                    width: size,
                    height: size,
                    filter: 'blur(8px)',
                    position: 'absolute',
                    background: "radial-gradient(currentColor 40%, transparent 80%)"
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s1(MovingBorder, "r++cE/ZV39YKUbUDod9Hhrwloc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = MovingBorder;
// ----------------------------------------------------------------------
function useComputedElementStyles(theme, ref) {
    _s2();
    const [computedStyles, setComputedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isRtl = theme.direction === 'rtl';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useComputedElementStyles.useEffect": ()=>{
            if (ref.current) {
                const style = getComputedStyle(ref.current);
                setComputedStyles({
                    paddingTop: style.paddingBottom,
                    paddingBottom: style.paddingTop,
                    paddingLeft: isRtl ? style.paddingLeft : style.paddingRight,
                    paddingRight: isRtl ? style.paddingRight : style.paddingLeft,
                    borderTopLeftRadius: isRtl ? style.borderBottomLeftRadius : style.borderBottomRightRadius,
                    borderTopRightRadius: isRtl ? style.borderBottomRightRadius : style.borderBottomLeftRadius,
                    borderBottomLeftRadius: isRtl ? style.borderTopLeftRadius : style.borderTopRightRadius,
                    borderBottomRightRadius: isRtl ? style.borderTopRightRadius : style.borderTopLeftRadius
                });
            }
        }
    }["useComputedElementStyles.useEffect"], [
        ref,
        isRtl
    ]);
    return {
        padding: "".concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.paddingTop, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.paddingRight, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.paddingBottom, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.paddingLeft),
        borderRadius: "".concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.borderTopLeftRadius, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.borderTopRightRadius, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.borderBottomRightRadius, " ").concat(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.borderBottomLeftRadius)
    };
}
_s2(useComputedElementStyles, "FJx7OJDwnjaXHOHDVowH+jPfdT4=");
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimateBorder");
__turbopack_context__.k.register(_c1, "MovingBorder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionViewport",
    ()=>MotionViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MotionViewport(param) {
    let { children, viewport, disableAnimate = true, ...other } = param;
    _s();
    const smDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "MotionViewport.useMediaQuery[smDown]": (theme)=>theme.breakpoints.down('sm')
    }["MotionViewport.useMediaQuery[smDown]"]);
    const disabled = smDown && disableAnimate;
    const baseProps = disabled ? {} : {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div,
        initial: 'initial',
        whileInView: 'animate',
        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varContainer"])(),
        viewport: {
            once: true,
            amount: 0.3,
            ...viewport
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...baseProps,
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(MotionViewport, "xar/IzTKwnjTW6REttSHWHWk/7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = MotionViewport;
var _c;
__turbopack_context__.k.register(_c, "MotionViewport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress,
    "scrollProgressClasses",
    ()=>scrollProgressClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const scrollProgressClasses = {
    circular: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('scroll__progress__circular'),
    linear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('scroll__progress__linear')
};
function ScrollProgress(param) {
    let { sx, size, portal, variant, slotProps, className, progress, thickness = 3.6, whenScroll = 'y', color = 'primary', ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isRtl = theme.direction === 'rtl';
    const transformProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
        0,
        -1
    ], [
        0,
        1
    ]);
    const progressValue = isRtl && whenScroll === 'x' ? transformProgress : progress;
    const progressSize = variant === 'circular' ? size !== null && size !== void 0 ? size : 64 : size !== null && size !== void 0 ? size : 3;
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(progressValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const renderCircular = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularRoot, {
            viewBox: "0 0 ".concat(progressSize, " ").concat(progressSize),
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
                scrollProgressClasses.circular,
                className
            ]),
            sx: [
                {
                    width: progressSize,
                    height: progressSize,
                    ...color !== 'inherit' && {
                        color: theme.vars.palette[color].main
                    }
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            ...other,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: progressSize / 2,
                    cy: progressSize / 2,
                    r: progressSize / 2 - thickness - 4,
                    strokeWidth: thickness,
                    strokeOpacity: 0.2
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
                    lineNumber: 80,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].circle, {
                    cx: progressSize / 2,
                    cy: progressSize / 2,
                    r: progressSize / 2 - thickness - 4,
                    strokeWidth: thickness,
                    style: {
                        pathLength: progressValue
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, this);
    const renderLinear = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinearRoot, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
                scrollProgressClasses.linear,
                className
            ]),
            sx: [
                {
                    height: progressSize,
                    ...color !== 'inherit' && {
                        background: "linear-gradient(135deg, ".concat(theme.vars.palette[color].light, ", ").concat(theme.vars.palette[color].main, ")")
                    }
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            style: {
                scaleX
            },
            ...other
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
            lineNumber: 99,
            columnNumber: 5
        }, this);
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrapper,
            children: variant === 'circular' ? renderCircular() : renderLinear()
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s(ScrollProgress, "ZxE8D1eR+CeeZjnwf5SEIkwEX1I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ScrollProgress;
// ----------------------------------------------------------------------
const CircularRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].svg)((param)=>{
    let { theme } = param;
    return {
        transform: 'rotate(-90deg)',
        color: theme.vars.palette.text.primary,
        circle: {
            fill: 'none',
            strokeDashoffset: 0,
            stroke: 'currentColor'
        }
    };
});
_c1 = CircularRoot;
const LinearRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div)((param)=>{
    let { theme } = param;
    return {
        top: 0,
        left: 0,
        right: 0,
        transformOrigin: '0%',
        backgroundColor: theme.vars.palette.text.primary
    };
});
_c2 = LinearRoot;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollProgress");
__turbopack_context__.k.register(_c1, "CircularRoot");
__turbopack_context__.k.register(_c2, "LinearRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/use-scroll-progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollProgress",
    ()=>useScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useScrollProgress() {
    let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'document';
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const options = {
        container: elementRef
    };
    const { scrollYProgress, scrollXProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])(target === 'container' ? options : undefined);
    const memoizedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useScrollProgress.useMemo[memoizedValue]": ()=>({
                elementRef,
                scrollXProgress,
                scrollYProgress
            })
    }["useScrollProgress.useMemo[memoizedValue]"], [
        elementRef,
        scrollXProgress,
        scrollYProgress
    ]);
    return memoizedValue;
}
_s(useScrollProgress, "EibkbVmRmU+LcOrplzVvgbduvbA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$use$2d$scroll$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/use-scroll-progress.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateCountUp",
    ()=>AnimateCountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AnimateCountUp(param) {
    let { to, sx, from = 0, toFixed = 0, once = true, duration = 2, amount = 0.5, unit: unitProp, component = 'p', ...other } = param;
    _s();
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shortNumber = shortenNumber(to);
    const startCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(from);
    const endCount = shortNumber ? shortNumber.value : to;
    const unit = unitProp !== null && unitProp !== void 0 ? unitProp : shortNumber === null || shortNumber === void 0 ? void 0 : shortNumber.unit;
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(countRef, {
        once,
        amount
    });
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(startCount, {
        "AnimateCountUp.useTransform[rounded]": (latest)=>latest.toFixed(isFloat(latest) ? toFixed : 0)
    }["AnimateCountUp.useTransform[rounded]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateCountUp.useEffect": ()=>{
            if (inView) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(startCount, endCount, {
                    duration
                });
            }
        }
    }["AnimateCountUp.useEffect"], [
        duration,
        endCount,
        inView,
        startCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: component,
        sx: [
            {
                p: 0,
                m: 0,
                display: 'inline-flex'
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].span, {
                ref: countRef,
                children: rounded
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            unit
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(AnimateCountUp, "V4v+5bgZfsXd5B4qB+AA8r2tQ6w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = AnimateCountUp;
// ----------------------------------------------------------------------
function isFloat(n) {
    return typeof n === 'number' && !Number.isInteger(n);
}
function shortenNumber(value) {
    if (value >= 1e9) {
        return {
            unit: 'b',
            value: value / 1e9
        };
    }
    if (value >= 1e6) {
        return {
            unit: 'm',
            value: value / 1e6
        };
    }
    if (value >= 1e3) {
        return {
            unit: 'k',
            value: value / 1e3
        };
    }
    return undefined;
}
var _c;
__turbopack_context__.k.register(_c, "AnimateCountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionContainer",
    ()=>MotionContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function MotionContainer(param) {
    let { sx, animate, children, action = false, ...other } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["m"].div,
        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varContainer"])(),
        initial: action ? false : 'initial',
        animate: action ? animate ? 'animate' : 'exit' : 'animate',
        exit: action ? undefined : 'exit',
        sx: sx,
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = MotionContainer;
var _c;
__turbopack_context__.k.register(_c, "MotionContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTopButton",
    ()=>BackToTopButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Fab/Fab.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BackToTopButton(param) {
    let { sx, isDebounce, renderButton, scrollThreshold = '90%', ...other } = param;
    _s();
    const { onBackToTop, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackToTop"])(scrollThreshold, isDebounce);
    if (renderButton) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(renderButton(isVisible), {
            onClick: onBackToTop
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-label": "Back to top",
        onClick: onBackToTop,
        sx: [
            (theme)=>({
                    width: 48,
                    height: 48,
                    position: 'fixed',
                    transform: 'scale(0)',
                    right: {
                        xs: 24,
                        md: 32
                    },
                    bottom: {
                        xs: 24,
                        md: 32
                    },
                    zIndex: theme.zIndex.speedDial,
                    transition: theme.transitions.create([
                        'transform'
                    ]),
                    ...isVisible && {
                        transform: 'scale(1)'
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
            width: 24,
            icon: "solar:double-alt-arrow-up-bold-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(BackToTopButton, "lsQAFLYSDSQLQ/OBqpu3GjR57Jc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBackToTop"]
    ];
});
_c = BackToTopButton;
var _c;
__turbopack_context__.k.register(_c, "BackToTopButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$viewport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$count$2d$up$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$back$2d$to$2d$top$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/flag-icon/classes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flagIconClasses",
    ()=>flagIconClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
const flagIconClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('flag__icon__root'),
    img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('flag__icon__img')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/flag-icon/flag-icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlagIcon",
    ()=>FlagIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/flag-icon/classes.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function FlagIcon(param) {
    let { code, className, sx, ...other } = param;
    if (!code) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flagIconClasses"].root,
            className
        ]),
        sx: sx,
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlagImg, {
            loading: "lazy",
            alt: code,
            src: "https://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(code === null || code === void 0 ? void 0 : code.toUpperCase(), ".svg"),
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flagIconClasses"].img
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/flag-icon/flag-icon.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/flag-icon/flag-icon.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = FlagIcon;
// ----------------------------------------------------------------------
const FlagRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')((param)=>{
    let { theme } = param;
    return {
        width: 26,
        height: 20,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: '5px',
        alignItems: 'center',
        display: 'inline-flex',
        justifyContent: 'center',
        backgroundColor: theme.vars.palette.background.neutral
    };
});
_c1 = FlagRoot;
const FlagImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img')(()=>({
        width: '100%',
        height: '100%',
        maxWidth: 'unset',
        objectFit: 'cover'
    }));
_c2 = FlagImg;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FlagIcon");
__turbopack_context__.k.register(_c1, "FlagRoot");
__turbopack_context__.k.register(_c2, "FlagImg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/flag-icon/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/flag-icon/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$flag$2d$icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/flag-icon/flag-icon.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/custom-popover/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementRect",
    ()=>useElementRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// ----------------------------------------------------------------------
/**
 * Parses a string to a number, defaulting to 0 if invalid.
 */ function toNumber(value) {
    if (!value) return 0;
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
}
/**
 * Extracts translate values from a CSS transform string.
 */ function extractTranslate(translate) {
    if (!translate || translate === 'none') return {
        translateX: 0,
        translateY: 0
    };
    const [x, y] = translate.split(' ');
    return {
        translateX: toNumber(x),
        translateY: toNumber(y)
    };
}
function useElementRect(element, context, open) {
    _s();
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const updateRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useElementRect.useCallback[updateRect]": ()=>{
            if (!element || !open) return;
            let nextRect;
            if (context === 'popoverPaper') {
                const { top, left, width, height, marginTop, marginLeft, translate } = getComputedStyle(element);
                const { translateX, translateY } = extractTranslate(translate);
                nextRect = {
                    width: toNumber(width),
                    height: toNumber(height),
                    top: toNumber(top) + toNumber(marginTop) + translateY,
                    left: toNumber(left) + toNumber(marginLeft) + translateX
                };
            } else {
                const domRect = element.getBoundingClientRect();
                nextRect = {
                    top: domRect.top,
                    left: domRect.left,
                    width: domRect.width,
                    height: domRect.height
                };
            }
            setRect(nextRect);
        }
    }["useElementRect.useCallback[updateRect]"], [
        context,
        element,
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementRect.useEffect": ()=>{
            if (!element || !open) return;
            updateRect();
            const resizeObserver = new ResizeObserver(updateRect);
            resizeObserver.observe(element);
            window.addEventListener('resize', updateRect, {
                passive: true
            });
            window.addEventListener('scroll', updateRect, {
                capture: true
            });
            // eslint-disable-next-line consistent-return
            return ({
                "useElementRect.useEffect": ()=>{
                    resizeObserver.disconnect();
                    window.removeEventListener('resize', updateRect);
                    window.removeEventListener('scroll', updateRect);
                }
            })["useElementRect.useEffect"];
        }
    }["useElementRect.useEffect"], [
        element,
        open,
        updateRect
    ]);
    return rect;
}
_s(useElementRect, "FQ8yiFzwYDjl+rHJpiuU+GFg2VY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/custom-popover/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArrowOffset",
    ()=>getArrowOffset,
    "getPopoverOrigin",
    ()=>getPopoverOrigin
]);
const ORIGIN_MAP = {
    'top-left': {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        }
    },
    'top-center': {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
        }
    },
    'top-right': {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    },
    'bottom-left': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        }
    },
    'bottom-center': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        }
    },
    'bottom-right': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        }
    },
    'left-top': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        }
    },
    'left-center': {
        anchorOrigin: {
            vertical: 'center',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'center',
            horizontal: 'left'
        }
    },
    'left-bottom': {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        }
    },
    'right-top': {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
        }
    },
    'right-center': {
        anchorOrigin: {
            vertical: 'center',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'center',
            horizontal: 'right'
        }
    },
    'right-bottom': {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
        }
    }
};
/**
 * Flips the horizontal position of a PopoverOrigin for RTL support.
 */ function flipHorizontal(origin) {
    if (origin.horizontal === 'left') return {
        ...origin,
        horizontal: 'right'
    };
    if (origin.horizontal === 'right') return {
        ...origin,
        horizontal: 'left'
    };
    return origin;
}
function getPopoverOrigin(placement) {
    let isRtl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const originPair = ORIGIN_MAP[placement];
    if (isRtl) return {
        anchorOrigin: flipHorizontal(originPair.anchorOrigin),
        transformOrigin: flipHorizontal(originPair.transformOrigin)
    };
    return originPair;
}
function getArrowOffset(anchorRect, paperRect, arrowSize) {
    // Calculate the center of the anchor relative to the paper
    const anchorCenterX = anchorRect.left - paperRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top - paperRect.top + anchorRect.height / 2;
    // Initial offset so arrow is centered on anchor
    let offsetX = anchorCenterX - arrowSize / 2;
    let offsetY = anchorCenterY - arrowSize / 2;
    // Clamp the arrow position so it doesn't overflow the paper
    const minOffset = arrowSize / 2;
    const maxOffsetX = paperRect.width - arrowSize * 2;
    const maxOffsetY = paperRect.height - arrowSize * 2;
    offsetX = Math.max(minOffset, Math.min(offsetX, maxOffsetX));
    offsetY = Math.max(minOffset, Math.min(offsetY, maxOffsetY));
    return {
        offsetX,
        offsetY
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/custom-popover/styles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "getPaperOffsetStyles",
    ()=>getPaperOffsetStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/utils.ts [app-client] (ecmascript)");
;
;
;
const ARROW_TRANSLATE = '48%';
const ARROW_COLOR_THRESHOLDS = {
    topCyan: 0.6,
    bottomRed: 0.4,
    sideCyan: 0.6,
    sideRed: 0.4
};
function getPaperOffsetStyles(placement, paperOffsets, isRtl) {
    var _offsetBySide_side;
    if (!placement) return {};
    const [primaryOffset, secondaryOffset] = paperOffsets;
    const rtlDirection = isRtl ? -1 : 1;
    const offsetBySide = {
        top: {
            left: [
                -primaryOffset * rtlDirection,
                secondaryOffset
            ],
            center: [
                0,
                secondaryOffset
            ],
            right: [
                primaryOffset * rtlDirection,
                secondaryOffset
            ]
        },
        bottom: {
            left: [
                -primaryOffset * rtlDirection,
                -secondaryOffset
            ],
            center: [
                0,
                -secondaryOffset
            ],
            right: [
                primaryOffset * rtlDirection,
                -secondaryOffset
            ]
        },
        left: {
            top: [
                secondaryOffset * rtlDirection,
                -primaryOffset
            ],
            center: [
                secondaryOffset * rtlDirection,
                0
            ],
            bottom: [
                secondaryOffset * rtlDirection,
                primaryOffset
            ]
        },
        right: {
            top: [
                -secondaryOffset * rtlDirection,
                -primaryOffset
            ],
            center: [
                -secondaryOffset * rtlDirection,
                0
            ],
            bottom: [
                -secondaryOffset * rtlDirection,
                primaryOffset
            ]
        }
    };
    const [side, align = 'center'] = placement.split('-');
    const [translateX, translateY] = ((_offsetBySide_side = offsetBySide[side]) === null || _offsetBySide_side === void 0 ? void 0 : _offsetBySide_side[align]) || [
        0,
        0
    ];
    return {
        translate: "".concat(translateX, "px ").concat(translateY, "px")
    };
}
// ----------------------------------------------------------------------
function getArrowPlacementStyles(side) {
    let isRtl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const styleBySide = {
        top: {
            top: 0,
            rotate: '135deg',
            translate: "0 -".concat(ARROW_TRANSLATE)
        },
        bottom: {
            bottom: 0,
            rotate: '-45deg',
            translate: "0 ".concat(ARROW_TRANSLATE)
        },
        left: isRtl ? {
            left: 0,
            rotate: '-135deg',
            translate: "".concat(ARROW_TRANSLATE, " 0")
        } : {
            left: 0,
            rotate: '45deg',
            translate: "-".concat(ARROW_TRANSLATE, " 0")
        },
        right: isRtl ? {
            right: 0,
            rotate: '45deg',
            translate: "-".concat(ARROW_TRANSLATE, " 0")
        } : {
            right: 0,
            rotate: '-135deg',
            translate: "".concat(ARROW_TRANSLATE, " 0")
        }
    };
    var _styleBySide_side;
    return (_styleBySide_side = styleBySide[side]) !== null && _styleBySide_side !== void 0 ? _styleBySide_side : {};
}
function getArrowColor(param) {
    let { isRtl, placement, xRatio, yRatio, paperRatio } = param;
    if (!placement) return null;
    const isTop = placement.startsWith('top-');
    const isBottom = placement.startsWith('bottom-');
    const isLeft = placement.startsWith('left-');
    const isRight = placement.startsWith('right-');
    if (isTop && xRatio > ARROW_COLOR_THRESHOLDS.topCyan) return 'cyan';
    if (isBottom && xRatio < ARROW_COLOR_THRESHOLDS.bottomRed) return 'red';
    if (isLeft || isRight) {
        const useCyan = yRatio > ARROW_COLOR_THRESHOLDS.sideCyan || paperRatio >= 1.8;
        const useRed = yRatio < ARROW_COLOR_THRESHOLDS.sideRed || paperRatio >= 1.8;
        if (isRtl) {
            if (isRight && useCyan) return 'red';
            if (isLeft && useRed) return 'cyan';
        } else {
            if (isRight && useRed) return 'cyan';
            if (isLeft && useCyan) return 'red';
        }
    }
    return null;
}
const Arrow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    shouldForwardProp: (prop)=>![
            'size',
            'placement',
            'anchorRect',
            'paperRect',
            'sx'
        ].includes(prop)
})((param)=>{
    let { size = 0, placement = 'top-right', anchorRect, paperRect, theme } = param;
    const isRtl = theme.direction === 'rtl';
    const { offsetX, offsetY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrowOffset"])(anchorRect, paperRect, size);
    const arrowColor = getArrowColor({
        isRtl,
        placement,
        xRatio: offsetX / paperRect.width,
        yRatio: offsetY / paperRect.height,
        paperRatio: Math.round(paperRect.width / paperRect.height * 100) / 100
    });
    const arrowBaseStyle = {
        width: size,
        height: size,
        position: 'absolute',
        borderBottomLeftRadius: isRtl ? 0 : size / 4,
        borderBottomRightRadius: isRtl ? size / 4 : 0,
        clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
        backgroundColor: theme.vars.palette.background.paper,
        border: "solid 1px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.12)),
        ...theme.applyStyles('dark', {
            border: "solid 1px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.common.blackChannel, 0.12))
        })
    };
    const arrowBackgroundStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: "".concat(size * 3, "px ").concat(size * 3, "px"),
        ...arrowColor === 'cyan' && {
            backgroundPosition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noRtlFlip"])('top right'),
            backgroundImage: "linear-gradient(45deg, ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.info.mainChannel, 0.08), ", ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.info.mainChannel, 0.08), ")")
        },
        ...arrowColor === 'red' && {
            backgroundPosition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noRtlFlip"])('bottom left'),
            backgroundImage: "linear-gradient(45deg, ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.error.mainChannel, 0.08), ", ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.error.mainChannel, 0.08), ")")
        }
    };
    return {
        ...arrowBaseStyle,
        ...arrowBackgroundStyle,
        variants: [
            {
                props: (props)=>{
                    var _props_placement;
                    return (_props_placement = props.placement) === null || _props_placement === void 0 ? void 0 : _props_placement.startsWith('top-');
                },
                style: {
                    ...getArrowPlacementStyles('top'),
                    left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noRtlFlip"])("".concat(offsetX, "px"))
                }
            },
            {
                props: (props)=>{
                    var _props_placement;
                    return (_props_placement = props.placement) === null || _props_placement === void 0 ? void 0 : _props_placement.startsWith('bottom-');
                },
                style: {
                    ...getArrowPlacementStyles('bottom'),
                    left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noRtlFlip"])("".concat(offsetX, "px"))
                }
            },
            {
                props: (props)=>{
                    var _props_placement;
                    return (_props_placement = props.placement) === null || _props_placement === void 0 ? void 0 : _props_placement.startsWith('left-');
                },
                style: {
                    ...getArrowPlacementStyles('left', isRtl),
                    top: "".concat(offsetY, "px")
                }
            },
            {
                props: (props)=>{
                    var _props_placement;
                    return (_props_placement = props.placement) === null || _props_placement === void 0 ? void 0 : _props_placement.startsWith('right-');
                },
                style: {
                    ...getArrowPlacementStyles('right', isRtl),
                    top: "".concat(offsetY, "px")
                }
            }
        ]
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomPopover",
    ()=>CustomPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$listClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/List/listClasses.js [app-client] (ecmascript) <export default as listClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/menuItemClasses.js [app-client] (ecmascript) <export default as menuItemClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/styles.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
// ----------------------------------------------------------------------
const DEFAULT_ARROW_SIZE = 14;
const DEFAULT_ARROW_PLACEMENT = 'top-right';
const DEFAULT_PAPER_OFFSET = [
    8,
    2
];
function CustomPopover(param) {
    let { open, onClose, children, anchorEl, slotProps, ...other } = param;
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isRtl = theme.direction === 'rtl';
    const { arrow: arrowProps, paper: paperProps, ...otherSlotProps } = slotProps !== null && slotProps !== void 0 ? slotProps : {};
    var _arrowProps_size;
    const arrowSize = (_arrowProps_size = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.size) !== null && _arrowProps_size !== void 0 ? _arrowProps_size : DEFAULT_ARROW_SIZE;
    var _arrowProps_placement;
    const arrowPlacement = (_arrowProps_placement = arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.placement) !== null && _arrowProps_placement !== void 0 ? _arrowProps_placement : DEFAULT_ARROW_PLACEMENT;
    var _paperProps_offset;
    const paperOffset = (_paperProps_offset = paperProps === null || paperProps === void 0 ? void 0 : paperProps.offset) !== null && _paperProps_offset !== void 0 ? _paperProps_offset : DEFAULT_PAPER_OFFSET;
    const { anchorOrigin, transformOrigin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPopoverOrigin"])(arrowPlacement, isRtl);
    const paperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const paperRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementRect"])(paperRef.current, 'popoverPaper', open);
    const anchorRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementRect"])(anchorEl, 'anchor', open);
    const isArrowVisible = !(arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.hide) && !!paperRect && !!anchorRect;
    const paperStyles = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPaperOffsetStyles"])(arrowPlacement, paperOffset, isRtl),
        overflow: 'inherit',
        ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$listClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__listClasses$3e$__["listClasses"].root)]: {
            minWidth: 140
        },
        ["& .".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].root)]: {
            gap: 2
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-hidden": !open,
        open: !!open,
        anchorEl: anchorEl,
        onClose: onClose,
        anchorOrigin: anchorOrigin,
        transformOrigin: transformOrigin,
        slotProps: {
            ...otherSlotProps,
            paper: {
                ...paperProps,
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])([
                    paperRef,
                    paperProps === null || paperProps === void 0 ? void 0 : paperProps.ref
                ]),
                sx: [
                    paperStyles,
                    ...Array.isArray(paperProps === null || paperProps === void 0 ? void 0 : paperProps.sx) ? paperProps.sx : [
                        paperProps === null || paperProps === void 0 ? void 0 : paperProps.sx
                    ]
                ]
            }
        },
        ...other,
        children: [
            isArrowVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                size: arrowSize,
                placement: arrowPlacement,
                paperRect: paperRect,
                anchorRect: anchorRect,
                sx: arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.sx
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(CustomPopover, "V5pKNR3JPji/Nz0r/THz1ZjsF7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementRect"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementRect"]
    ];
});
_c = CustomPopover;
var _c;
__turbopack_context__.k.register(_c, "CustomPopover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/custom-popover/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/svg-color/classes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svgColorClasses",
    ()=>svgColorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
const svgColorClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('svg__color__root')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/svg-color/svg-color.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SvgColor",
    ()=>SvgColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/svg-color/classes.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function SvgColor(param) {
    let { src, className, sx, ...other } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgColorClasses"].root,
            className
        ]),
        sx: [
            {
                mask: "url(".concat(src, ") no-repeat center / contain"),
                WebkitMask: "url(".concat(src, ") no-repeat center / contain")
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/svg-color/svg-color.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SvgColor;
// ----------------------------------------------------------------------
const SvgRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')(()=>({
        width: 24,
        height: 24,
        flexShrink: 0,
        display: 'inline-flex',
        backgroundColor: 'currentColor'
    }));
_c1 = SvgRoot;
var _c, _c1;
__turbopack_context__.k.register(_c, "SvgColor");
__turbopack_context__.k.register(_c1, "SvgRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/svg-color/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/svg-color/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$svg$2d$color$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/svg-color/svg-color.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXTRA_EXTENSIONS",
    ()=>EXTRA_EXTENSIONS,
    "FILE_FORMATS",
    ()=>FILE_FORMATS,
    "FILE_ICONS",
    ()=>FILE_ICONS,
    "detectFileFormat",
    ()=>detectFileFormat,
    "getFileExtension",
    ()=>getFileExtension,
    "getFileIcon",
    ()=>getFileIcon,
    "getFileMeta",
    ()=>getFileMeta,
    "getFileName",
    ()=>getFileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-client] (ecmascript)");
;
;
const FILE_FORMATS = {
    txt: [
        'txt',
        'md',
        'rtf',
        'csv',
        'log'
    ],
    zip: [
        'zip',
        'rar',
        '7z',
        'tar',
        'gz',
        'bz2',
        'xz',
        'iso'
    ],
    audio: [
        'wav',
        'aif',
        'aiff',
        'mp3',
        'aac',
        'flac',
        'ogg',
        'm4a',
        'wma'
    ],
    image: [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'webp',
        'bmp',
        'tif',
        'tiff',
        'heic',
        'heif',
        'ico',
        'jfif',
        'raw',
        'svg',
        'svg+xml',
        'indd'
    ],
    video: [
        'm4v',
        'avi',
        'mpg',
        'mpeg',
        'mp4',
        'webm',
        'mov',
        'flv',
        'mkv',
        'wmv',
        '3gp'
    ],
    word: [
        'doc',
        'docx',
        'odt'
    ],
    excel: [
        'xls',
        'xlsx',
        'ods',
        'csv'
    ],
    powerpoint: [
        'ppt',
        'pptx',
        'odp'
    ],
    pdf: [
        'pdf',
        'xps'
    ],
    photoshop: [
        'psd'
    ],
    illustrator: [
        'ai',
        'eps'
    ]
};
const EXTRA_EXTENSIONS = [
    'folder'
];
const FILE_ICONS = {
    txt: 'ic-txt',
    zip: 'ic-zip',
    pdf: 'ic-pdf',
    word: 'ic-word',
    image: 'ic-img',
    audio: 'ic-audio',
    video: 'ic-video',
    excel: 'ic-excel',
    unknown: 'ic-file',
    folder: 'ic-folder',
    photoshop: 'ic-pts',
    illustrator: 'ic-ai',
    powerpoint: 'ic-power-point'
};
const ALL_EXTENSIONS = new Set([
    ...EXTRA_EXTENSIONS,
    ...Object.keys(FILE_FORMATS),
    ...Object.values(FILE_FORMATS).flat()
]);
/**
 * Maps file extensions to their corresponding file format.
 * Example: { 'jpg': 'image', 'mp3': 'audio', 'pdf': 'pdf' }
 */ const EXTENSION_TO_FORMAT = Object.fromEntries(_c1 = Object.entries(FILE_FORMATS).flatMap(_c = (param)=>{
    let [format, exts] = param;
    return exts.map((ext)=>[
            ext,
            format
        ]);
}));
_c2 = EXTENSION_TO_FORMAT;
const isSupportedExtension = (ext)=>ALL_EXTENSIONS.has(ext);
function getFileName(input) {
    if (!(input === null || input === void 0 ? void 0 : input.trim())) return '';
    try {
        const cleanInput = input.split(/[?#]/)[0].trim();
        return decodeURIComponent(cleanInput.split('/').pop() || '');
    } catch (e) {
        return '';
    }
}
function getFileExtension(input) {
    var _getFileName_match;
    if (!(input === null || input === void 0 ? void 0 : input.trim())) return 'unknown';
    const cleanInput = input.trim().toLowerCase();
    const [mimeType, mimeSubtype] = cleanInput.split('/');
    const ext = (_getFileName_match = getFileName(cleanInput).match(/\.([^.]+)$/)) === null || _getFileName_match === void 0 ? void 0 : _getFileName_match[1];
    // 1. Extract extension from file name or URL (e.g., 'file.pdf' -> 'pdf')
    if (ext && isSupportedExtension(ext)) return ext;
    // 2. Subtype from MIME type (e.g. 'jpeg' from 'image/jpeg')
    if (mimeSubtype && isSupportedExtension(mimeSubtype)) return mimeSubtype;
    // 3. Type from MIME type (e.g. 'image' from 'image/jpeg')
    if (mimeType && isSupportedExtension(mimeType)) return mimeType;
    // 4. Check if the whole input is a known extension
    if (isSupportedExtension(cleanInput)) return cleanInput;
    return 'unknown';
}
function detectFileFormat(input) {
    const ext = getFileExtension(input);
    var _EXTENSION_TO_FORMAT_ext;
    return (_EXTENSION_TO_FORMAT_ext = EXTENSION_TO_FORMAT[ext]) !== null && _EXTENSION_TO_FORMAT_ext !== void 0 ? _EXTENSION_TO_FORMAT_ext : ext;
}
function getFileIcon(input) {
    const format = detectFileFormat(input);
    const iconName = FILE_ICONS[format] || FILE_ICONS.unknown;
    return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir, "/assets/icons/files/").concat(iconName, ".svg");
}
function getFileMeta(file) {
    if (file instanceof File) {
        const formatFromMime = detectFileFormat(file.type);
        const formatFromName = detectFileFormat(file.name);
        var _path;
        return {
            key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuidv4"])(),
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            lastModifiedDate: new Date(file.lastModified),
            format: formatFromMime !== 'unknown' ? formatFromMime : formatFromName,
            path: (_path = file.path) !== null && _path !== void 0 ? _path : file.webkitRelativePath
        };
    }
    if (typeof file === 'string') {
        return {
            key: file,
            path: file,
            size: 0,
            name: getFileName(file),
            type: getFileExtension(file),
            format: detectFileFormat(file)
        };
    }
    return {
        name: '',
        type: '',
        size: 0,
        format: 'unknown'
    };
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EXTENSION_TO_FORMAT$Object.fromEntries$Object.entries(FILE_FORMATS).flatMap");
__turbopack_context__.k.register(_c1, "EXTENSION_TO_FORMAT$Object.fromEntries");
__turbopack_context__.k.register(_c2, "EXTENSION_TO_FORMAT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/classes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileThumbnailClasses",
    ()=>fileThumbnailClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-client] (ecmascript)");
;
const fileThumbnailClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('file__thumbnail__root'),
    img: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('file__thumbnail__img'),
    icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('file__thumbnail__icon'),
    removeBtn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('file__thumbnail__remove__button'),
    downloadBtn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClasses"])('file__thumbnail__download__button')
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/use-file-preview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "revokeObjectUrls",
    ()=>revokeObjectUrls,
    "useFilePreview",
    ()=>useFilePreview,
    "useFilesPreview",
    ()=>useFilesPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
function useFilePreview(file) {
    _s();
    const objectUrlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilePreview.useEffect": ()=>{
            // Cleanup old object URL
            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current);
                objectUrlRef.current = null;
            }
            if (file instanceof File) {
                const objectUrl = URL.createObjectURL(file);
                objectUrlRef.current = objectUrl;
                setPreviewUrl(objectUrl);
            } else if (typeof file === 'string') {
                setPreviewUrl(file);
            } else {
                setPreviewUrl('');
            }
            return ({
                "useFilePreview.useEffect": ()=>{
                    if (objectUrlRef.current) {
                        URL.revokeObjectURL(objectUrlRef.current);
                        objectUrlRef.current = null;
                    }
                }
            })["useFilePreview.useEffect"];
        }
    }["useFilePreview.useEffect"], [
        file
    ]);
    return {
        previewUrl,
        setPreviewUrl
    };
}
_s(useFilePreview, "Ng2s3IVoUvUsbi3aE8tr4N/C03M=");
function revokeObjectUrls(urls) {
    urls.forEach((url)=>URL.revokeObjectURL(url));
}
function useFilesPreview(files) {
    _s1();
    const objectUrlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [filesPreview, setFilesPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFilesPreview.useEffect": ()=>{
            // Cleanup old object URLs
            revokeObjectUrls(objectUrlsRef.current);
            objectUrlsRef.current = [];
            const previews = files.map({
                "useFilesPreview.useEffect.previews": (file)=>{
                    const isFile = file instanceof File;
                    const previewUrl = isFile ? URL.createObjectURL(file) : file;
                    if (isFile) objectUrlsRef.current.push(previewUrl);
                    return {
                        file,
                        previewUrl
                    };
                }
            }["useFilesPreview.useEffect.previews"]);
            setFilesPreview(previews);
            return ({
                "useFilesPreview.useEffect": ()=>{
                    revokeObjectUrls(objectUrlsRef.current);
                    objectUrlsRef.current = [];
                }
            })["useFilesPreview.useEffect"];
        }
    }["useFilesPreview.useEffect"], [
        files
    ]);
    return {
        filesPreview,
        setFilesPreview
    };
}
_s1(useFilesPreview, "K/MdCVYjNqShILcnhYxNhPFPRBs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/styles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadButton",
    ()=>DownloadButton,
    "RemoveButton",
    ()=>RemoveButton,
    "ThumbnailImage",
    ()=>ThumbnailImage,
    "ThumbnailRoot",
    ()=>ThumbnailRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
;
;
;
;
const ThumbnailRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')((param)=>{
    let { theme } = param;
    return {
        width: 36,
        height: 36,
        flexShrink: 0,
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        borderRadius: Number(theme.shape.borderRadius) * 1.25
    };
});
const ThumbnailImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('img', {
    shouldForwardProp: (prop)=>![
            'showImage',
            'sx'
        ].includes(prop)
})({
    width: '100%',
    height: '100%',
    variants: [
        {
            props: (props)=>!!props.showImage,
            style: {
                objectFit: 'cover',
                borderRadius: 'inherit'
            }
        }
    ]
});
const RemoveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        top: 4,
        right: 4,
        position: 'absolute',
        padding: theme.spacing(0.5),
        color: theme.vars.palette.common.white,
        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['900Channel'], 0.48),
        '&:hover': {
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['900Channel'], 0.72)
        }
    };
});
const DownloadButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((param)=>{
    let { theme } = param;
    return {
        top: 0,
        right: 0,
        zIndex: 9,
        padding: 0,
        opacity: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 'inherit',
        color: theme.vars.palette.common.white,
        transition: theme.transitions.create([
            'opacity'
        ]),
        '&:hover': {
            ...theme.mixins.bgBlur({
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['900Channel'], 0.64)
            }),
            opacity: 1
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileThumbnail",
    ()=>FileThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$use$2d$file$2d$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/use-file-preview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/styles.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function FileThumbnail(param) {
    let { sx, file, tooltip, onRemove, showImage, slotProps, className, onDownload, previewUrl: previewUrlProp, ...other } = param;
    var _tooltipProps_slotProps;
    _s();
    const fileMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileMeta"])(file);
    const previewEnabled = !previewUrlProp && !!file;
    const { previewUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$use$2d$file$2d$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilePreview"])(previewEnabled ? file : null);
    const imageSrc = previewUrlProp !== null && previewUrlProp !== void 0 ? previewUrlProp : previewUrl;
    const canShowImage = fileMeta.format === 'image' && !!showImage && imageSrc;
    const tooltipProps = slotProps === null || slotProps === void 0 ? void 0 : slotProps.tooltip;
    const renderImage = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbnailImage"], {
            showImage: true,
            alt: fileMeta.name,
            src: imageSrc,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileThumbnailClasses"].img,
            ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.img
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, this);
    const renderIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbnailImage"], {
            alt: fileMeta.name,
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFileIcon"])(fileMeta.format),
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileThumbnailClasses"].icon,
            ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
            lineNumber: 50,
            columnNumber: 5
        }, this);
    const renderActions = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveButton"], {
                    onClick: onRemove,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileThumbnailClasses"].removeBtn,
                    ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.removeBtn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
                        icon: "mingcute:close-line",
                        width: 12
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                onDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DownloadButton"], {
                    onClick: onDownload,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileThumbnailClasses"].downloadBtn,
                    ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.downloadBtn,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Iconify"], {
                        width: 24,
                        icon: "eva:cloud-download-fill"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    const renderContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$styles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbnailRoot"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])([
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileThumbnailClasses"].root,
                className
            ]),
            sx: sx,
            ...other,
            children: [
                canShowImage ? renderImage() : renderIcon(),
                renderActions()
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
            lineNumber: 83,
            columnNumber: 5
        }, this);
    if (!file) return null;
    if (!tooltip) return renderContent();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        arrow: true,
        title: fileMeta.name,
        ...tooltipProps,
        slotProps: {
            ...tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.slotProps,
            popper: {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [
                                0,
                                -12
                            ]
                        }
                    }
                ],
                ...tooltipProps === null || tooltipProps === void 0 ? void 0 : (_tooltipProps_slotProps = tooltipProps.slotProps) === null || _tooltipProps_slotProps === void 0 ? void 0 : _tooltipProps_slotProps.popper
            }
        },
        children: renderContent()
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(FileThumbnail, "2yj2tLV7GfpAgEIF+6kbpjuce9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$use$2d$file$2d$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilePreview"]
    ];
});
_c = FileThumbnail;
var _c;
__turbopack_context__.k.register(_c, "FileThumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/file-thumbnail/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$classes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/classes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$file$2d$thumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$use$2d$file$2d$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/use-file-preview.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashScreen",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function SplashScreen(param) {
    let { portal = true, slots, slotProps, sx, ...other } = param;
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    var _slots_logo;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingWrapper, {
            ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContent, {
                sx: sx,
                ...other,
                children: (_slots_logo = slots === null || slots === void 0 ? void 0 : slots.logo) !== null && _slots_logo !== void 0 ? _slots_logo : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateLogoZoom"], {
                    ...slotProps === null || slotProps === void 0 ? void 0 : slotProps.logo
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx",
                    lineNumber: 34,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = SplashScreen;
// ----------------------------------------------------------------------
const LoadingWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
});
_c1 = LoadingWrapper;
const LoadingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')((param)=>{
    let { theme } = param;
    return {
        right: 0,
        bottom: 0,
        zIndex: 9998,
        flexGrow: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.vars.palette.background.default
    };
});
_c2 = LoadingContent;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SplashScreen");
__turbopack_context__.k.register(_c1, "LoadingWrapper");
__turbopack_context__.k.register(_c2, "LoadingContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function LoadingScreen(param) {
    let { portal, slots, slotsProps, sx, ...other } = param;
    var _slotsProps_progress, _slotsProps_progress1;
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"];
    var _slots_progress;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContent, {
            sx: sx,
            ...other,
            children: (_slots_progress = slots === null || slots === void 0 ? void 0 : slots.progress) !== null && _slots_progress !== void 0 ? _slots_progress : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: "inherit",
                sx: [
                    {
                        width: 1,
                        maxWidth: 360
                    },
                    ...Array.isArray(slotsProps === null || slotsProps === void 0 ? void 0 : (_slotsProps_progress = slotsProps.progress) === null || _slotsProps_progress === void 0 ? void 0 : _slotsProps_progress.sx) ? slotsProps.progress.sx : [
                        slotsProps === null || slotsProps === void 0 ? void 0 : (_slotsProps_progress1 = slotsProps.progress) === null || _slotsProps_progress1 === void 0 ? void 0 : _slotsProps_progress1.sx
                    ]
                ],
                ...slotsProps === null || slotsProps === void 0 ? void 0 : slotsProps.progress
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = LoadingScreen;
// ----------------------------------------------------------------------
const LoadingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')((param)=>{
    let { theme } = param;
    return {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    };
});
_c1 = LoadingContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoadingScreen");
__turbopack_context__.k.register(_c1, "LoadingContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/track-b/frontend/src/components/loading-screen/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$splash$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$loading$2d$screen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_track-b_frontend_src_components_be07e5e3._.js.map