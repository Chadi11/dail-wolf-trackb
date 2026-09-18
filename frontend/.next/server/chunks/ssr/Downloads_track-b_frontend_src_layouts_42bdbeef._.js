module.exports = [
"[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutClasses",
    ()=>layoutClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-ssr] (ecmascript)");
;
const layoutClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__root'),
    main: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__main'),
    header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__header'),
    nav: {
        root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__root'),
        mobile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__mobile'),
        vertical: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__vertical'),
        horizontal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__nav__horizontal')
    },
    content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__main__content'),
    sidebarContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('layout__sidebar__container')
};
}),
"[project]/Downloads/track-b/frontend/src/layouts/core/css-vars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "layoutSectionVars",
    ()=>layoutSectionVars
]);
function layoutSectionVars(theme) {
    return {
        '--layout-nav-zIndex': theme.zIndex.drawer + 1,
        '--layout-nav-mobile-width': '288px',
        '--layout-header-blur': '8px',
        '--layout-header-zIndex': theme.zIndex.appBar + 1,
        '--layout-header-mobile-height': '64px',
        '--layout-header-desktop-height': '72px'
    };
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/core/main-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainSection",
    ()=>MainSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MainSection({ children, className, sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].main,
            className
        ]),
        sx: sx,
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/main-section.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
// ----------------------------------------------------------------------
const MainRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('main')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
});
}),
"[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutSection",
    ()=>LayoutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/GlobalStyles/GlobalStyles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/css-vars.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function LayoutSection({ sx, cssVars, children, footerSection, headerSection, sidebarSection, className, ...other }) {
    const inputGlobalStyles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$GlobalStyles$2f$GlobalStyles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        styles: (theme)=>({
                body: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutSectionVars"])(theme),
                    ...cssVars
                }
            })
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            inputGlobalStyles,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutRoot, {
                id: "root__layout",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].root,
                    className
                ]),
                sx: sx,
                ...other,
                children: sidebarSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        sidebarSection,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutSidebarContainer, {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].sidebarContainer,
                            children: [
                                headerSection,
                                children,
                                footerSection
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        headerSection,
                        children,
                        footerSection
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// ----------------------------------------------------------------------
const LayoutRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')``;
const LayoutSidebarContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column'
    }));
}),
"[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderSection",
    ()=>HeaderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/AppBar/AppBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function HeaderSection({ sx, slots, slotProps, className, disableOffset, disableElevation, layoutQuery = 'md', ...other }) {
    const { offsetTop: isOffset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollOffsetTop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderRoot, {
        position: "sticky",
        color: "transparent",
        isOffset: isOffset,
        disableOffset: disableOffset,
        disableElevation: disableElevation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].header,
            className
        ]),
        sx: [
            (theme)=>({
                    ...isOffset && {
                        '--color': `var(--offset-color, ${theme.vars.palette.text.primary})`
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            slots?.topArea,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContainer, {
                layoutQuery: layoutQuery,
                ...slotProps?.container,
                children: [
                    slots?.leftArea,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderCenterArea, {
                        ...slotProps?.centerArea,
                        children: slots?.centerArea
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    slots?.rightArea
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            slots?.bottomArea
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
const HeaderRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>![
            'isOffset',
            'disableOffset',
            'disableElevation',
            'sx'
        ].includes(prop)
})(({ isOffset, disableOffset, disableElevation, theme })=>{
    const pauseZindex = {
        top: -1,
        bottom: -2
    };
    const pauseStyles = {
        opacity: 0,
        content: '""',
        visibility: 'hidden',
        position: 'absolute',
        transition: theme.transitions.create([
            'opacity',
            'visibility'
        ], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        })
    };
    const bgStyles = {
        ...theme.mixins.bgBlur({
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.background.defaultChannel, 0.8)
        }),
        ...pauseStyles,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: pauseZindex.top,
        ...isOffset && {
            opacity: 1,
            visibility: 'visible'
        }
    };
    const shadowStyles = {
        ...pauseStyles,
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        margin: 'auto',
        borderRadius: '50%',
        width: `calc(100% - 48px)`,
        zIndex: pauseZindex.bottom,
        boxShadow: theme.vars.customShadows.z8,
        ...isOffset && {
            opacity: 0.48,
            visibility: 'visible'
        }
    };
    return {
        zIndex: 'var(--layout-header-zIndex)',
        ...!disableOffset && {
            '&::before': bgStyles
        },
        ...!disableElevation && {
            '&::after': shadowStyles
        }
    };
});
const HeaderContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    shouldForwardProp: (prop)=>![
            'layoutQuery',
            'sx'
        ].includes(prop)
})(({ layoutQuery = 'md', theme })=>({
        display: 'flex',
        alignItems: 'center',
        color: 'var(--color)',
        height: 'var(--layout-header-mobile-height)',
        [theme.breakpoints.up(layoutQuery)]: {
            height: 'var(--layout-header-desktop-height)'
        }
    }));
const HeaderCenterArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center'
    }));
}),
"[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/css-vars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$main$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/main-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$layout$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$header$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavUpgrade",
    ()=>NavUpgrade,
    "UpgradeBlock",
    ()=>UpgradeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-mocked-user.ts [app-ssr] (ecmascript)");
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
function NavUpgrade({ sx, ...other }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMockedUser"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        sx: [
            {
                px: 2,
                py: 5,
                textAlign: 'center'
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: user?.photoURL,
                            alt: user?.displayName,
                            sx: {
                                width: 48,
                                height: 48
                            },
                            children: user?.displayName?.charAt(0).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            color: "success",
                            variant: "filled",
                            sx: {
                                top: -6,
                                px: 0.5,
                                left: 40,
                                height: 20,
                                position: 'absolute',
                                borderBottomLeftRadius: 2
                            },
                            children: "Free"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        mb: 2,
                        mt: 1.5,
                        width: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "subtitle2",
                            noWrap: true,
                            sx: {
                                mb: 1,
                                color: 'var(--layout-nav-text-primary-color)'
                            },
                            children: user?.displayName
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "body2",
                            noWrap: true,
                            sx: {
                                color: 'var(--layout-nav-text-disabled-color)'
                            },
                            children: user?.email
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: "contained",
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].minimalStore,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Upgrade to Pro"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function UpgradeBlock({ sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        sx: [
            (theme)=>({
                    ...theme.mixins.bgGradient({
                        images: [
                            `linear-gradient(135deg, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.error.lightChannel, 0.92)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.secondary.darkChannel, 0.92)})`,
                            `url(${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/background/background-7.webp)`
                        ]
                    }),
                    px: 3,
                    py: 4,
                    borderRadius: 2,
                    position: 'relative'
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: (theme)=>({
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1,
                        borderRadius: 2,
                        position: 'absolute',
                        border: `solid 3px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.common.whiteChannel, 0.16)}`
                    })
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].img,
                animate: {
                    y: [
                        12,
                        -12,
                        12
                    ]
                },
                transition: {
                    duration: 8,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatDelay: 0
                },
                alt: "Small Rocket",
                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/illustrations/illustration-rocket-small.webp`,
                sx: {
                    right: 0,
                    width: 112,
                    height: 112,
                    position: 'absolute'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "span",
                        sx: {
                            typography: 'h5',
                            color: 'common.white'
                        },
                        children: "35% OFF"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "span",
                        sx: {
                            mb: 2,
                            mt: 0.5,
                            color: 'common.white',
                            typography: 'subtitle2'
                        },
                        children: "Power up Productivity!"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "contained",
                        size: "small",
                        color: "warning",
                        children: "Upgrade to Pro"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavMobile",
    ()=>NavMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Drawer/Drawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$section$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx [app-ssr] (ecmascript)");
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
function NavMobile({ sx, data, open, slots, onClose, className, checkPermissions, ...other }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) {
            onClose();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: onClose,
        slotProps: {
            paper: {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.root,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.vertical,
                    className
                ]),
                sx: [
                    {
                        overflow: 'unset',
                        bgcolor: 'var(--layout-nav-bg)',
                        width: 'var(--layout-nav-mobile-width)'
                    },
                    ...Array.isArray(sx) ? sx : [
                        sx
                    ]
                ]
            }
        },
        children: [
            slots?.topArea ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    pl: 3.5,
                    pt: 2.5,
                    pb: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                fillContent: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$section$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavSectionVertical"], {
                        data: data,
                        checkPermissions: checkPermissions,
                        sx: {
                            px: 2,
                            flex: '1 1 auto'
                        },
                        ...other
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavUpgrade"], {}, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            slots?.bottomArea
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardContent",
    ()=>DashboardContent,
    "VerticalDivider",
    ()=>VerticalDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/context/use-settings-context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function DashboardContent({ sx, children, className, disablePadding, maxWidth = 'lg', layoutQuery = 'lg', ...other }) {
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsContext"])();
    const isNavHorizontal = settings.state.navLayout === 'horizontal';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].content,
            className
        ]),
        maxWidth: settings.state.compactLayout ? maxWidth : false,
        sx: [
            (theme)=>({
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    pt: 'var(--layout-dashboard-content-pt)',
                    pb: 'var(--layout-dashboard-content-pb)',
                    [theme.breakpoints.up(layoutQuery)]: {
                        px: 'var(--layout-dashboard-content-px)',
                        ...isNavHorizontal && {
                            '--layout-dashboard-content-pt': '40px'
                        }
                    },
                    ...disablePadding && {
                        p: {
                            xs: 0,
                            sm: 0,
                            md: 0,
                            lg: 0,
                            xl: 0
                        }
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/content.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
const VerticalDivider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')(({ theme })=>({
        width: 1,
        height: 10,
        flexShrink: 0,
        display: 'none',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: theme.spacing(2.5),
        marginRight: theme.spacing(2.5),
        backgroundColor: 'currentColor',
        color: theme.vars.palette.divider,
        '&::before, &::after': {
            top: -5,
            width: 3,
            height: 3,
            content: '""',
            flexShrink: 0,
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: 'currentColor'
        },
        '&::after': {
            bottom: -5,
            top: 'auto'
        }
    }));
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/nav-toggle-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavToggleButton",
    ()=>NavToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
;
;
;
;
function NavToggleButton({ isNavMini, sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        size: "small",
        sx: [
            (theme)=>({
                    p: 0.5,
                    position: 'absolute',
                    color: 'action.active',
                    bgcolor: 'background.default',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 'var(--layout-nav-zIndex)',
                    top: 'calc(var(--layout-header-desktop-height) / 2)',
                    left: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
                    border: `1px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.12)}`,
                    transition: theme.transitions.create([
                        'left'
                    ], {
                        easing: 'var(--layout-transition-easing)',
                        duration: 'var(--layout-transition-duration)'
                    }),
                    '&:hover': {
                        color: 'text.primary',
                        bgcolor: 'background.neutral'
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            width: 16,
            icon: isNavMini ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-back-fill',
            sx: (theme)=>({
                    ...theme.direction === 'rtl' && {
                        transform: 'scaleX(-1)'
                    }
                })
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-toggle-button.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/nav-toggle-button.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavVertical",
    ()=>NavVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$section$2d$mini$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/mini/nav-section-mini.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$section$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/vertical/nav-section-vertical.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$toggle$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/nav-toggle-button.tsx [app-ssr] (ecmascript)");
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
function NavVertical({ sx, data, slots, cssVars, className, isNavMini, onToggleNav, checkPermissions, layoutQuery = 'md', ...other }) {
    const renderNavVertical = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                slots?.topArea ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        pl: 3.5,
                        pt: 2.5,
                        pb: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                    fillContent: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$vertical$2f$nav$2d$section$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavSectionVertical"], {
                            data: data,
                            cssVars: cssVars,
                            checkPermissions: checkPermissions,
                            sx: {
                                px: 2,
                                flex: '1 1 auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, this),
                        slots?.bottomArea ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavUpgrade"], {}, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                            lineNumber: 58,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    const renderNavMini = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                slots?.topArea ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        py: 2.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$mini$2f$nav$2d$section$2d$mini$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavSectionMini"], {
                    data: data,
                    cssVars: cssVars,
                    checkPermissions: checkPermissions,
                    sx: [
                        (theme)=>({
                                ...theme.mixins.hideScrollY,
                                pb: 2,
                                px: 0.5,
                                flex: '1 1 auto',
                                overflowY: 'auto'
                            })
                    ]
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                    lineNumber: 71,
                    columnNumber: 7
                }, this),
                slots?.bottomArea
            ]
        }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavRoot, {
        isNavMini: isNavMini,
        layoutQuery: layoutQuery,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.root,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.vertical,
            className
        ]),
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$toggle$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavToggleButton"], {
                isNavMini: isNavMini,
                onClick: onToggleNav,
                sx: [
                    (theme)=>({
                            display: 'none',
                            [theme.breakpoints.up(layoutQuery)]: {
                                display: 'inline-flex'
                            }
                        })
                ]
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            isNavMini ? renderNavMini() : renderNavVertical()
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
// ----------------------------------------------------------------------
const NavRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    shouldForwardProp: (prop)=>![
            'isNavMini',
            'layoutQuery',
            'sx'
        ].includes(prop)
})(({ isNavMini, layoutQuery = 'md', theme })=>({
        top: 0,
        left: 0,
        height: '100%',
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        zIndex: 'var(--layout-nav-zIndex)',
        backgroundColor: 'var(--layout-nav-bg)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create([
            'width'
        ], {
            easing: 'var(--layout-transition-easing)',
            duration: 'var(--layout-transition-duration)'
        }),
        [theme.breakpoints.up(layoutQuery)]: {
            display: 'flex'
        }
    }));
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavHorizontal",
    ()=>NavHorizontal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$section$2d$horizontal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/horizontal/nav-section-horizontal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function NavHorizontal({ sx, data, className, checkPermissions, layoutQuery = 'md', ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.root,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].nav.horizontal,
            className
        ]),
        sx: [
            (theme)=>({
                    width: 1,
                    position: 'relative',
                    flexDirection: 'column',
                    display: {
                        xs: 'none',
                        [layoutQuery]: 'flex'
                    },
                    borderBottom: `solid 1px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.08)}`
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    top: 0,
                    left: 0,
                    width: 1,
                    zIndex: 9,
                    position: 'absolute',
                    borderStyle: 'dashed'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    px: 1.5,
                    height: 'var(--layout-nav-horizontal-height)',
                    backgroundColor: 'var(--layout-nav-horizontal-bg)',
                    backdropFilter: `blur(var(--layout-header-blur))`,
                    WebkitBackdropFilter: `blur(var(--layout-header-blur))`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$horizontal$2f$nav$2d$section$2d$horizontal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavSectionHorizontal"], {
                    data: data,
                    checkPermissions: checkPermissions,
                    ...other
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_account",
    ()=>_account
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
;
;
const _account = [
    {
        label: 'Home',
        href: '/',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "solar:home-angle-bold-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 8,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Profile',
        href: '#',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "custom:profile-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 12,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Projects',
        href: '#',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "solar:notes-bold-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        info: '3'
    },
    {
        label: 'Subscription',
        href: '#',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "custom:invoice-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 23,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Security',
        href: '#',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "solar:shield-keyhole-bold-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 25,
            columnNumber: 41
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Account settings',
        href: '#',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "solar:settings-bold-duotone"
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx",
            lineNumber: 26,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0))
    }
];
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultItem",
    ()=>ResultItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function ResultItem({ title, path, labels, href, sx, ...other }) {
    const linkProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExternalLink"])(href) ? {
        component: 'a',
        href,
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterLink"],
        href
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...linkProps,
        disableRipple: true,
        sx: [
            (theme)=>({
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: 'transparent',
                    borderBottomColor: theme.vars.palette.divider,
                    '&:hover': {
                        borderRadius: 1,
                        borderColor: theme.vars.palette.primary.main,
                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.primary.mainChannel, theme.vars.palette.action.hoverOpacity)
                    }
                }),
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                primary: title.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "span",
                        sx: {
                            ...part.highlight && {
                                color: 'primary.main'
                            }
                        },
                        children: part.text
                    }, index, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, void 0)),
                secondary: path.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "span",
                        sx: {
                            color: 'text.secondary',
                            ...part.highlight && {
                                color: 'primary.main',
                                fontWeight: 'fontWeightSemiBold'
                            }
                        },
                        children: part.text
                    }, index, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, void 0)),
                slotProps: {
                    secondary: {
                        noWrap: true,
                        sx: {
                            typography: 'caption'
                        }
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    gap: 0.75,
                    display: 'flex'
                },
                children: [
                    ...labels
                ].reverse().map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        color: "default",
                        children: label
                    }, label, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyFilter",
    ()=>applyFilter,
    "flattenNavSections",
    ()=>flattenNavSections
]);
const flattenNavItems = (navItems, parentGroup)=>{
    let flattenedItems = [];
    navItems.forEach((navItem)=>{
        const currentGroup = parentGroup ? `${parentGroup}-${navItem.title}` : navItem.title;
        const groupArray = currentGroup.split('-');
        flattenedItems.push({
            title: navItem.title,
            path: navItem.path,
            group: groupArray.length > 2 ? `${groupArray[0]}.${groupArray[1]}` : groupArray[0]
        });
        if (navItem.children) {
            flattenedItems = flattenedItems.concat(flattenNavItems(navItem.children, currentGroup));
        }
    });
    return flattenedItems;
};
function flattenNavSections(navSections) {
    return navSections.flatMap((navSection)=>flattenNavItems(navSection.items, navSection.subheader));
}
function applyFilter({ inputData, query }) {
    if (!query) return inputData;
    return inputData.filter(({ title, path, group })=>[
            title,
            path,
            group
        ].some((field)=>field?.toLowerCase().includes(query.toLowerCase())));
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Searchbar",
    ()=>Searchbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/autosuggest-highlight/parse/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$match$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/autosuggest-highlight/match/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$dialogClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dialogClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Dialog/dialogClasses.js [app-ssr] (ecmascript) <export default as dialogClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/menuItemClasses.js [app-ssr] (ecmascript) <export default as menuItemClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/InputBase/InputBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__inputBaseClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/InputBase/inputBaseClasses.js [app-ssr] (ecmascript) <export default as inputBaseClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$search$2d$not$2d$found$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/search-not-found/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$search$2d$not$2d$found$2f$search$2d$not$2d$found$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/search-not-found/search-not-found.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$result$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/result-item.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/utils.ts [app-ssr] (ecmascript)");
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
const breakpoint = 'sm';
function Searchbar({ data: navItems = [], sx, ...other }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const smUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.breakpoints.up(breakpoint));
    const { value: open, onFalse: onClose, onTrue: onOpen, onToggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBoolean"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onClose();
        setSearchQuery('');
    }, [
        onClose
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (event.metaKey && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            onToggle();
            setSearchQuery('');
        }
    }, [
        onToggle
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        handleKeyDown
    ]);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        setSearchQuery(event.target.value);
    }, []);
    const formattedNavItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenNavSections"])(navItems);
    const dataFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyFilter"])({
            inputData: formattedNavItems,
            query: searchQuery
        }), [
        formattedNavItems,
        searchQuery
    ]);
    const notFound = searchQuery && !dataFiltered.length;
    const renderButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onClick: onOpen,
            sx: [
                {
                    display: 'flex',
                    alignItems: 'center',
                    [theme.breakpoints.up(breakpoint)]: {
                        pr: 1,
                        borderRadius: 1.5,
                        cursor: 'pointer',
                        bgcolor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.08),
                        transition: theme.transitions.create('background-color', {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.shortest
                        }),
                        '&:hover': {
                            bgcolor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.16)
                        }
                    }
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            ...other,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    component: smUp ? 'span' : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                    sx: {
                        [theme.breakpoints.up(breakpoint)]: {
                            p: 1,
                            display: 'inline-flex',
                            color: 'action.active'
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                        icon: "eva:search-fill"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                    lineNumber: 112,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    sx: {
                        color: 'grey.800',
                        cursor: 'inherit',
                        bgcolor: 'common.white',
                        fontSize: theme.typography.pxToRem(12),
                        boxShadow: theme.vars.customShadows.z1,
                        display: {
                            xs: 'none',
                            [breakpoint]: 'inline-flex'
                        }
                    },
                    children: "⌘K"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                    lineNumber: 125,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
            lineNumber: 88,
            columnNumber: 5
        }, this);
    const renderResults = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            disablePadding: true,
            sx: {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$menuItemClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__menuItemClasses$3e$__["menuItemClasses"].root}`]: {
                    p: 0,
                    mb: 0,
                    '&:hover': {
                        bgcolor: 'transparent'
                    }
                }
            },
            children: dataFiltered.map((item)=>{
                const matchesTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$match$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(item.title, searchQuery, {
                    insideWords: true
                });
                const partsTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(item.title, matchesTitle);
                const matchesPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$match$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(item.path, searchQuery, {
                    insideWords: true
                });
                const partsPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$autosuggest$2d$highlight$2f$parse$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(item.path, matchesPath);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    disableRipple: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$result$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResultItem"], {
                        path: partsPath,
                        title: partsTitle,
                        href: item.path,
                        labels: item.group.split('.'),
                        onClick: handleClose
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this)
                }, `${item.title}${item.path}`, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
            lineNumber: 141,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderButton(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                fullWidth: true,
                maxWidth: "sm",
                open: open,
                onClose: handleClose,
                transitionDuration: {
                    enter: theme.transitions.duration.shortest,
                    exit: 100
                },
                sx: [
                    {
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$dialogClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dialogClasses$3e$__["dialogClasses"].paper}`]: {
                            mt: 15,
                            overflow: 'unset'
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$dialogClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__dialogClasses$3e$__["dialogClasses"].container}`]: {
                            alignItems: 'flex-start'
                        }
                    }
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$InputBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        fullWidth: true,
                        autoFocus: open,
                        placeholder: "Search...",
                        value: searchQuery,
                        onChange: handleSearch,
                        startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            position: "start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                                icon: "eva:search-fill",
                                width: 24,
                                sx: {
                                    color: 'text.disabled'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, void 0),
                        endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            sx: {
                                letterSpacing: 1,
                                color: 'text.secondary'
                            },
                            children: "esc"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                            lineNumber: 201,
                            columnNumber: 25
                        }, void 0),
                        inputProps: {
                            id: 'search-input'
                        },
                        sx: {
                            p: 3,
                            borderBottom: `solid 1px ${theme.vars.palette.divider}`,
                            [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputBase$2f$inputBaseClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__inputBaseClasses$3e$__["inputBaseClasses"].input}`]: {
                                typography: 'h6'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    notFound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$search$2d$not$2d$found$2f$search$2d$not$2d$found$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchNotFound"], {
                        query: searchQuery,
                        sx: {
                            py: 15,
                            px: 2.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                        sx: {
                            p: 2.5,
                            height: 400
                        },
                        children: renderResults()
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/nav-config-workspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_workspaces",
    ()=>_workspaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-ssr] (ecmascript)");
;
const _workspaces = [
    {
        id: 'team-1',
        name: 'Team 1',
        plan: 'Free',
        logo: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/icons/workspaces/logo-1.webp`
    },
    {
        id: 'team-2',
        name: 'Team 2',
        plan: 'Pro',
        logo: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/icons/workspaces/logo-2.webp`
    },
    {
        id: 'team-3',
        name: 'Team 3',
        plan: 'Pro',
        logo: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/icons/workspaces/logo-3.webp`
    }
];
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/menu-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuButton",
    ()=>MenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
;
;
;
function MenuButton({ sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        sx: sx,
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
            icon: "custom:menu-duotone",
            width: 24
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/menu-button.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/menu-button.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/account-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountButton",
    ()=>AccountButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function AccountButton({ photoURL, displayName, sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button,
        whileTap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varTap"])(0.96),
        whileHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varHover"])(1.04),
        transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionTap"])(),
        "aria-label": "Account button",
        sx: [
            {
                p: 0
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateBorder"], {
            sx: {
                p: '3px',
                borderRadius: '50%',
                width: 40,
                height: 40
            },
            slotProps: {
                primaryBorder: {
                    size: 60,
                    width: '1px',
                    sx: {
                        color: 'primary.main'
                    }
                },
                secondaryBorder: {
                    sx: {
                        color: 'warning.main'
                    }
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: photoURL,
                alt: displayName,
                sx: {
                    width: 1,
                    height: 1
                },
                children: displayName?.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-button.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-button.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-button.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/sign-out-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignOutButton",
    ()=>SignOutButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/use-router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-auth-context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$context$2f$jwt$2f$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/context/jwt/action.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function SignOutButton({ onClose, sx, ...other }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { checkUserSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$context$2f$jwt$2f$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])();
            await checkUserSession?.();
            onClose?.();
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    }, [
        checkUserSession,
        onClose,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        fullWidth: true,
        variant: "soft",
        size: "large",
        color: "error",
        onClick: handleLogout,
        sx: sx,
        ...other,
        children: "Logout"
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/sign-out-button.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountDrawer",
    ()=>AccountDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/Link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Drawer/Drawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/_mock.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-mocked-user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/nav-upgrade.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$account$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/account-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$sign$2d$out$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/sign-out-button.tsx [app-ssr] (ecmascript)");
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
;
;
;
function AccountDrawer({ data = [], sx, ...other }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMockedUser"])();
    const { value: open, onFalse: onClose, onTrue: onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBoolean"])();
    const renderAvatar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateBorder"], {
            sx: {
                mb: 2,
                p: '6px',
                width: 96,
                height: 96,
                borderRadius: '50%'
            },
            slotProps: {
                primaryBorder: {
                    size: 120,
                    sx: {
                        color: 'primary.main'
                    }
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: user?.photoURL,
                alt: user?.displayName,
                sx: {
                    width: 1,
                    height: 1
                },
                children: user?.displayName?.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this);
    const renderList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            disablePadding: true,
            sx: [
                (theme)=>({
                        py: 3,
                        px: 2.5,
                        borderTop: `dashed 1px ${theme.vars.palette.divider}`,
                        borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
                        '& li': {
                            p: 0
                        }
                    })
            ],
            children: data.map((option)=>{
                const rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';
                const rootHref = pathname.includes('/dashboard') ? '/' : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.root;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterLink"],
                        href: option.label === 'Home' ? rootHref : option.href,
                        color: "inherit",
                        underline: "none",
                        onClick: onClose,
                        sx: {
                            p: 1,
                            width: 1,
                            display: 'flex',
                            typography: 'body2',
                            alignItems: 'center',
                            color: 'text.secondary',
                            '& svg': {
                                width: 24,
                                height: 24
                            },
                            '&:hover': {
                                color: 'text.primary'
                            }
                        },
                        children: [
                            option.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                component: "span",
                                sx: {
                                    ml: 2
                                },
                                children: option.label === 'Home' ? rootLabel : option.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this),
                            option.info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                color: "error",
                                sx: {
                                    ml: 1
                                },
                                children: option.info
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                lineNumber: 109,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, option.label, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
            lineNumber: 67,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$account$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountButton"], {
                onClick: onOpen,
                photoURL: user?.photoURL,
                displayName: user?.displayName,
                sx: sx,
                ...other
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: onClose,
                anchor: "right",
                slotProps: {
                    backdrop: {
                        invisible: true
                    },
                    paper: {
                        sx: {
                            width: 320
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: onClose,
                        sx: {
                            top: 12,
                            left: 12,
                            zIndex: 9,
                            position: 'absolute'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                            icon: "mingcute:close-line"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    pt: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                },
                                children: [
                                    renderAvatar(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "subtitle1",
                                        noWrap: true,
                                        sx: {
                                            mt: 2
                                        },
                                        children: user?.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "body2",
                                        sx: {
                                            color: 'text.secondary',
                                            mt: 0.5
                                        },
                                        noWrap: true,
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    p: 3,
                                    gap: 1,
                                    flexWrap: 'wrap',
                                    display: 'flex',
                                    justifyContent: 'center'
                                },
                                children: [
                                    Array.from({
                                        length: 3
                                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            title: `Switch to: ${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].fullName(index + 1)}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].fullName(index + 1),
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].image.avatar(index + 1),
                                                onClick: ()=>{}
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        }, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].fullName(index + 1), false, {
                                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        title: "Add account",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sx: [
                                                (theme)=>({
                                                        bgcolor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.08),
                                                        border: `dashed 1px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.grey['500Channel'], 0.32)}`
                                                    })
                                            ],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                                                icon: "mingcute:add-line"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            renderList(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    px: 2.5,
                                    py: 3
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$nav$2d$upgrade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UpgradeBlock"], {}, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            p: 2.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$sign$2d$out$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignOutButton"], {
                            onClose: onClose
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsButton",
    ()=>SettingsButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Badge/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/SvgIcon/SvgIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/context/use-settings-context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function SettingsButton({ sx, ...other }) {
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button,
        whileTap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varTap"])(0.96),
        whileHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varHover"])(1.04),
        transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionTap"])(),
        "aria-label": "Settings button",
        onClick: settings.onToggleDrawer,
        sx: [
            {
                p: 0,
                width: 40,
                height: 40
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            color: "error",
            variant: "dot",
            invisible: !settings.canReset,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].path, {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        d: "M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083",
                        clipRule: "evenodd",
                        opacity: "0.4",
                        animate: {
                            rotate: 360
                        },
                        transition: {
                            duration: 8,
                            ease: 'linear',
                            repeat: Infinity
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "currentColor",
                        d: "M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguagePopover",
    ()=>LanguagePopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/flag-icon/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$flag$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/flag-icon/flag-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
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
;
function LanguagePopover({ data = [], sx, ...other }) {
    const { open, anchorEl, onClose, onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopover"])();
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data[0].value);
    const currentLang = data.find((lang)=>lang.value === locale);
    const handleChangeLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lang)=>{
        setLocale(lang);
        onClose();
    }, [
        onClose
    ]);
    const renderMenuList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomPopover"], {
            open: open,
            anchorEl: anchorEl,
            onClose: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    width: 160,
                    minHeight: 72
                },
                children: data?.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        selected: option.value === currentLang?.value,
                        onClick: ()=>handleChangeLang(option.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$flag$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlagIcon"], {
                                code: option.countryCode
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            option.label
                        ]
                    }, option.value, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button,
                whileTap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varTap"])(0.96),
                whileHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varHover"])(1.04),
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionTap"])(),
                "aria-label": "Languages button",
                onClick: onOpen,
                sx: [
                    (theme)=>({
                            p: 0,
                            width: 40,
                            height: 40,
                            ...open && {
                                bgcolor: theme.vars.palette.action.selected
                            }
                        }),
                    ...Array.isArray(sx) ? sx : [
                        sx
                    ]
                ],
                ...other,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$flag$2d$icon$2f$flag$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlagIcon"], {
                    code: currentLang?.countryCode
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            renderMenuList()
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactsPopover",
    ()=>ContactsPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Badge/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$utils$2f$format$2d$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/utils/format-time.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
function ContactsPopover({ data = [], sx, ...other }) {
    const { open, anchorEl, onClose, onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopover"])();
    const renderMenuList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomPopover"], {
            open: open,
            anchorEl: anchorEl,
            onClose: onClose,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: "h6",
                    sx: {
                        p: 1.5
                    },
                    children: [
                        "Contacts ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "(",
                                data.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                            lineNumber: 46,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                    sx: {
                        height: 320,
                        width: 320
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: data.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sx: {
                                    p: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: contact.status,
                                        badgeContent: " ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            alt: contact.name,
                                            src: contact.avatarUrl
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        primary: contact.name,
                                        secondary: contact.status === 'offline' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$utils$2f$format$2d$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fToNow"])(contact.lastActivity) : '',
                                        slotProps: {
                                            secondary: {
                                                sx: {
                                                    typography: 'caption',
                                                    color: 'text.disabled'
                                                }
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, contact.id, true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
            lineNumber: 44,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button,
                whileTap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varTap"])(0.96),
                whileHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varHover"])(1.04),
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionTap"])(),
                "aria-label": "Contacts button",
                onClick: onOpen,
                sx: [
                    (theme)=>({
                            ...open && {
                                bgcolor: theme.vars.palette.action.selected
                            }
                        }),
                    ...Array.isArray(sx) ? sx : [
                        sx
                    ]
                ],
                ...other,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                    icon: "solar:users-group-rounded-bold-duotone",
                    width: 24
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            renderMenuList()
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspacesPopover",
    ()=>WorkspacesPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuList/MenuList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/buttonClasses.js [app-ssr] (ecmascript) <export default as buttonClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/custom-popover/custom-popover.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
function WorkspacesPopover({ data = [], sx, ...other }) {
    const mediaQuery = 'sm';
    const { open, anchorEl, onClose, onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePopover"])();
    const [workspace, setWorkspace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data[0]);
    const handleChangeWorkspace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newValue)=>{
        setWorkspace(newValue);
        onClose();
    }, [
        onClose
    ]);
    const buttonBg = {
        height: 1,
        zIndex: -1,
        opacity: 0,
        content: "''",
        borderRadius: 1,
        position: 'absolute',
        visibility: 'hidden',
        bgcolor: 'action.hover',
        width: 'calc(100% + 8px)',
        transition: (theme)=>theme.transitions.create([
                'opacity',
                'visibility'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shorter
            }),
        ...open && {
            opacity: 1,
            visibility: 'visible'
        }
    };
    const renderButton = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            disableRipple: true,
            onClick: onOpen,
            sx: [
                {
                    py: 0.5,
                    gap: {
                        xs: 0.5,
                        [mediaQuery]: 1
                    },
                    '&::before': buttonBg
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            ...other,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    component: "img",
                    alt: workspace?.name,
                    src: workspace?.logo,
                    sx: {
                        width: 24,
                        height: 24,
                        borderRadius: '50%'
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    component: "span",
                    sx: {
                        typography: 'subtitle2',
                        display: {
                            xs: 'none',
                            [mediaQuery]: 'inline-flex'
                        }
                    },
                    children: workspace?.name
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 91,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    color: workspace?.plan === 'Free' ? 'default' : 'info',
                    sx: {
                        height: 22,
                        cursor: 'inherit',
                        display: {
                            xs: 'none',
                            [mediaQuery]: 'inline-flex'
                        }
                    },
                    children: workspace?.plan
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                    width: 16,
                    icon: "carbon:chevron-sort",
                    sx: {
                        color: 'text.disabled'
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 109,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
            lineNumber: 71,
            columnNumber: 5
        }, this);
    const renderMenuList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$custom$2d$popover$2f$custom$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomPopover"], {
            open: open,
            anchorEl: anchorEl,
            onClose: onClose,
            slotProps: {
                arrow: {
                    placement: 'top-left'
                },
                paper: {
                    sx: {
                        mt: 0.5,
                        ml: -1.55,
                        width: 240
                    }
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
                    sx: {
                        maxHeight: 240
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: data.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                selected: option.id === workspace?.id,
                                onClick: ()=>handleChangeWorkspace(option),
                                sx: {
                                    height: 48
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        alt: option.name,
                                        src: option.logo,
                                        sx: {
                                            width: 24,
                                            height: 24
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        noWrap: true,
                                        component: "span",
                                        variant: "body2",
                                        sx: {
                                            flexGrow: 1,
                                            fontWeight: 'fontWeightMedium'
                                        },
                                        children: option.name
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        color: option.plan === 'Free' ? 'default' : 'info',
                                        children: option.plan
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, option.id, true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 123,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        my: 0.5,
                        borderStyle: 'dashed'
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 149,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    fullWidth: true,
                    startIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                        width: 18,
                        icon: "mingcute:add-line"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                        lineNumber: 153,
                        columnNumber: 20
                    }, void 0),
                    onClick: ()=>{
                        onClose();
                    },
                    sx: {
                        gap: 2,
                        justifyContent: 'flex-start',
                        fontWeight: 'fontWeightMedium',
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$buttonClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__buttonClasses$3e$__["buttonClasses"].startIcon}`]: {
                            m: 0,
                            width: 24,
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }
                    },
                    children: "Create workspace"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
                    lineNumber: 151,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx",
            lineNumber: 114,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderButton(),
            renderMenuList()
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/nav-config-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navData",
    ()=>navData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/svg-color/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$svg$2d$color$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/svg-color/svg-color.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
// ----------------------------------------------------------------------
const icon = (name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$svg$2d$color$2f$svg$2d$color$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SvgColor"], {
        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].assetsDir}/assets/icons/navbar/${name}.svg`
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-dashboard.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ICONS = {
    job: icon('ic-job'),
    blog: icon('ic-blog'),
    chat: icon('ic-chat'),
    mail: icon('ic-mail'),
    user: icon('ic-user'),
    file: icon('ic-file'),
    lock: icon('ic-lock'),
    tour: icon('ic-tour'),
    order: icon('ic-order'),
    label: icon('ic-label'),
    blank: icon('ic-blank'),
    kanban: icon('ic-kanban'),
    folder: icon('ic-folder'),
    course: icon('ic-course'),
    params: icon('ic-params'),
    banking: icon('ic-banking'),
    booking: icon('ic-booking'),
    invoice: icon('ic-invoice'),
    product: icon('ic-product'),
    calendar: icon('ic-calendar'),
    disabled: icon('ic-disabled'),
    external: icon('ic-external'),
    subpaths: icon('ic-subpaths'),
    menuItem: icon('ic-menu-item'),
    ecommerce: icon('ic-ecommerce'),
    analytics: icon('ic-analytics'),
    dashboard: icon('ic-dashboard')
};
const navData = [
    /**
   * Overview
   */ {
        subheader: 'Overview',
        items: [
            {
                title: 'One',
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.root,
                icon: ICONS.dashboard,
                info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    children: [
                        "v",
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].appVersion
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/nav-config-dashboard.tsx",
                    lineNumber: 59,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0))
            },
            {
                title: 'Two',
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.two,
                icon: ICONS.ecommerce
            },
            {
                title: 'Three',
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.three,
                icon: ICONS.analytics
            }
        ]
    },
    /**
   * Management
   */ {
        subheader: 'Management',
        items: [
            {
                title: 'Group',
                path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.group.root,
                icon: ICONS.user,
                children: [
                    {
                        title: 'Four',
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.group.root
                    },
                    {
                        title: 'Five',
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.group.five
                    },
                    {
                        title: 'Six',
                        path: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].dashboard.group.six
                    }
                ]
            }
        ]
    }
];
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/css-vars.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dashboardLayoutVars",
    ()=>dashboardLayoutVars,
    "dashboardNavColorVars",
    ()=>dashboardNavColorVars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/nav-section/styles/css-vars.ts [app-ssr] (ecmascript)");
;
;
function dashboardLayoutVars(theme) {
    return {
        '--layout-transition-easing': 'linear',
        '--layout-transition-duration': '120ms',
        '--layout-nav-mini-width': '88px',
        '--layout-nav-vertical-width': '300px',
        '--layout-nav-horizontal-height': '64px',
        '--layout-dashboard-content-pt': theme.spacing(1),
        '--layout-dashboard-content-pb': theme.spacing(8),
        '--layout-dashboard-content-px': theme.spacing(5)
    };
}
function dashboardNavColorVars(theme, navColor = 'integrate', navLayout = 'vertical') {
    const { vars: { palette } } = theme;
    switch(navColor){
        case 'integrate':
            return {
                layout: {
                    '--layout-nav-bg': palette.background.default,
                    '--layout-nav-horizontal-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.background.defaultChannel, 0.8),
                    '--layout-nav-border-color': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.grey['500Channel'], 0.12),
                    '--layout-nav-text-primary-color': palette.text.primary,
                    '--layout-nav-text-secondary-color': palette.text.secondary,
                    '--layout-nav-text-disabled-color': palette.text.disabled,
                    ...theme.applyStyles('dark', {
                        '--layout-nav-border-color': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.grey['500Channel'], 0.08),
                        '--layout-nav-horizontal-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.background.defaultChannel, 0.96)
                    })
                },
                section: undefined
            };
        case 'apparent':
            return {
                layout: {
                    '--layout-nav-bg': palette.grey[900],
                    '--layout-nav-horizontal-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.grey['900Channel'], 0.96),
                    '--layout-nav-border-color': 'transparent',
                    '--layout-nav-text-primary-color': palette.common.white,
                    '--layout-nav-text-secondary-color': palette.grey[500],
                    '--layout-nav-text-disabled-color': palette.grey[600],
                    ...theme.applyStyles('dark', {
                        '--layout-nav-bg': palette.grey[800],
                        '--layout-nav-horizontal-bg': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(palette.grey['800Channel'], 0.8)
                    })
                },
                section: {
                    // caption
                    '--nav-item-caption-color': palette.grey[600],
                    // subheader
                    '--nav-subheader-color': palette.grey[600],
                    '--nav-subheader-hover-color': palette.common.white,
                    // item
                    '--nav-item-color': palette.grey[500],
                    '--nav-item-root-active-color': palette.primary.light,
                    '--nav-item-root-open-color': palette.common.white,
                    // bullet
                    '--nav-bullet-light-color': __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$nav$2d$section$2f$styles$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bulletColor"].dark,
                    // sub
                    ...navLayout === 'vertical' && {
                        '--nav-item-sub-active-color': palette.common.white,
                        '--nav-item-sub-open-color': palette.common.white
                    }
                }
            };
        default:
            throw new Error(`Invalid color: ${navColor}`);
    }
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationIcons",
    ()=>notificationIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const notificationIcons = {
    order: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "icons/notification/ic_package",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.0481 20.02C13.9573 18.1401 14.2658 15.7619 15.8001 14.2225C17.3344 12.6831 19.7117 12.3668 21.5951 13.4514C23.4786 14.5361 24.3982 16.7509 23.8369 18.8506C23.2756 20.9504 21.3735 22.4109 19.2001 22.411C17.4871 22.4174 15.9023 21.5048 15.0481 20.02Z",
                            fill: "url(#paint0_linear_0_8848)"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M19.1996 5.57765V12.8111C17.4829 12.8113 15.897 13.7281 15.0402 15.2157C14.1834 16.7033 14.1862 18.5352 15.0476 20.0201L9.59959 23.1651V11.1191L19.1986 5.57715L19.1996 5.57765Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M9.59998 0.0351562L13.4095 2.23466L3.81048 7.77666L0.000976562 5.57716L9.59998 0.0351562Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector_2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M9.6 11.1191L6.257 9.18909L15.8565 3.64709L19.199 5.57709L9.6 11.1191Z",
                                    fill: "#FFAB00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M9.6 11.1191V23.1651L0 17.6226V5.57759L0.001 5.5771L3.81 7.7766V15.7641L4.9725 15.2841L6.24 16.7241V9.19909L6.257 9.18909L9.6 11.1191Z",
                                    fill: "#FFAB00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector_3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M15.8565 3.64712L6.257 9.18912L3.8105 7.77662L13.4095 2.23462L15.8565 3.64712Z",
                                    fill: "url(#paint1_linear_0_8848)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M6.257 9.18912L6.23957 9.19907V16.7241L4.97207 15.2841L3.80957 15.7641L3.8105 7.77662L6.257 9.18912Z",
                                    fill: "url(#paint2_linear_0_8848)"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector_4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M1.24148 17.7187C1.04818 17.7187 0.891479 17.562 0.891479 17.3687V16.0727C0.891479 15.8794 1.04818 15.7227 1.24148 15.7227C1.43478 15.7227 1.59148 15.8794 1.59148 16.0727V17.3687C1.59148 17.562 1.43478 17.7187 1.24148 17.7187Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M2.66248 18.5502C2.46918 18.5502 2.31248 18.3935 2.31248 18.2002V17.0327C2.31248 16.8394 2.46918 16.6827 2.66248 16.6827C2.85578 16.6827 3.01248 16.8394 3.01248 17.0327V18.2002C3.01248 18.3935 2.85578 18.5502 2.66248 18.5502Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M4.08435 19.3707C3.89105 19.3707 3.73435 19.214 3.73435 19.0207V17.9927C3.73435 17.7994 3.89105 17.6427 4.08435 17.6427C4.27765 17.6427 4.43435 17.7994 4.43435 17.9927V19.0207C4.43435 19.214 4.27765 19.3707 4.08435 19.3707Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M5.50525 20.1912C5.31195 20.1912 5.15525 20.0345 5.15525 19.8412V18.9527C5.15525 18.7594 5.31195 18.6027 5.50525 18.6027C5.69855 18.6027 5.85525 18.7594 5.85525 18.9527V19.8412C5.85525 20.0345 5.69855 20.1912 5.50525 20.1912Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M6.92598 21.0307C6.73268 21.0307 6.57598 20.874 6.57598 20.6807V19.9127C6.57598 19.7194 6.73268 19.5627 6.92598 19.5627C7.11928 19.5627 7.27598 19.7194 7.27598 19.9127V20.6807C7.27598 20.874 7.11928 21.0307 6.92598 21.0307Z",
                                    fill: "#FFD666"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path_2",
                            d: "M18.1105 19.32C18.008 19.3201 17.9106 19.2752 17.8441 19.1972L16.6841 17.8382C16.6018 17.7433 16.5768 17.6115 16.6185 17.493C16.6602 17.3744 16.7622 17.2874 16.8858 17.2648C17.0094 17.2422 17.1356 17.2876 17.2165 17.3838L18.1545 18.4827L21.2295 15.981C21.3264 15.9012 21.4587 15.8793 21.5761 15.9238C21.6935 15.9683 21.7781 16.0723 21.7977 16.1963C21.8174 16.3203 21.7692 16.4453 21.6713 16.5239L18.3313 19.2415C18.269 19.2924 18.1909 19.3201 18.1105 19.32Z",
                            fill: "#007867"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector_5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M11.5888 18.0471C11.4302 18.0473 11.2914 17.941 11.2503 17.7879C11.2092 17.6347 11.2761 17.4731 11.4135 17.3939L13.008 16.4734C13.1163 16.4109 13.2497 16.4109 13.358 16.4734C13.4663 16.536 13.533 16.6515 13.533 16.7766C13.533 16.9016 13.4663 17.0172 13.358 17.0797L11.7635 18.0001C11.7104 18.0309 11.6501 18.0471 11.5888 18.0471Z",
                                    fill: "#B76E00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M12.5425 11.3318C12.4653 11.25 12.3535 11.2103 12.242 11.2251C12.1305 11.2398 12.0329 11.3073 11.9797 11.4063L11.1347 12.9783C11.0763 13.0868 11.0793 13.2179 11.1424 13.3236C11.2055 13.4293 11.3195 13.4941 11.4427 13.4941C11.5732 13.4944 11.6937 13.4239 11.7573 13.3098L11.95 12.9624V15.9711C11.95 16.1644 12.1067 16.3211 12.3 16.3211C12.4933 16.3211 12.65 16.1644 12.65 15.9711V12.4526L12.9345 12.7604C12.9976 12.8278 13.0851 12.8673 13.1774 12.87C13.2697 12.8726 13.3593 12.8383 13.4263 12.7746C13.4936 12.7107 13.5328 12.6226 13.5352 12.5297C13.5376 12.4369 13.5029 12.3469 13.439 12.2796L12.5425 11.3318Z",
                                    fill: "#B76E00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_0_8848",
                        x1: "14.3997",
                        y1: "12.8109",
                        x2: "23.9998",
                        y2: "22.4115",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#77ED8B"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#22C55E"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_0_8848",
                        x1: "3.80957",
                        y1: "2.23462",
                        x2: "18.0556",
                        y2: "14.0791",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#FFAB00"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#B76E00"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint2_linear_0_8848",
                        x1: "3.80957",
                        y1: "2.23462",
                        x2: "18.0556",
                        y2: "14.0791",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#FFAB00"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#B76E00"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    chat: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "icons/notification/ic_chat",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.9546 7.27183C20.3369 7.20489 23.9136 10.654 23.9985 15.0359C24.0109 15.6793 23.9466 16.3055 23.8141 16.9061C23.5898 17.9232 23.4564 18.9581 23.4564 19.9997V22.0128C23.4564 22.3213 23.2064 22.5713 22.898 22.5713H20.8848C19.8433 22.5713 18.8083 22.7047 17.7913 22.929C17.1907 23.0615 16.5645 23.1258 15.9211 23.1133C11.5392 23.0285 8.09012 19.4519 8.15696 15.0697C8.22216 10.7924 11.6773 7.33718 15.9546 7.27183Z",
                            fill: "url(#paint0_linear_0_8824)"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path_2",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M9.80149 0.0425493C4.4627 -0.0390131 0.105251 4.16291 0.00184497 9.50132C-0.0132957 10.285 0.0650325 11.048 0.22647 11.7797C0.499751 13.0187 0.66222 14.2796 0.66222 15.5485V18.0011C0.66222 18.3768 0.966814 18.6815 1.34261 18.6815H3.7952C5.06402 18.6815 6.32491 18.8439 7.56395 19.1172C8.29567 19.2786 9.05861 19.357 9.84231 19.3418C15.1806 19.2384 19.3825 14.8811 19.3012 9.54242C19.2217 4.33147 15.0124 0.122096 9.80149 0.0425493Z",
                            fill: "url(#paint1_linear_0_8824)"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector",
                            opacity: "0.48",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M6.19693 9.17512C5.9243 8.88543 5.53843 8.70351 5.10915 8.70351C4.28354 8.70351 3.61426 9.37279 3.61426 10.1984C3.61426 10.6276 3.79613 11.0135 4.08587 11.2862L7.31059 14.5109C7.58326 14.8006 7.96913 14.9825 8.39837 14.9825C9.22398 14.9825 9.8933 14.3132 9.8933 13.4876C9.8933 13.0584 9.71134 12.6725 9.42165 12.3998L6.19693 9.17512Z",
                                    fill: "#006C9C"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M10.4245 9.17512C10.1518 8.88543 9.76597 8.70351 9.33669 8.70351C8.51108 8.70351 7.8418 9.37279 7.8418 10.1984C7.8418 10.6276 8.02367 11.0135 8.31341 11.2862L11.5381 14.5109C11.8108 14.8006 12.1967 14.9825 12.6259 14.9825C13.4515 14.9825 14.1208 14.3132 14.1208 13.4876C14.1208 13.0584 13.9389 12.6725 13.6492 12.3998L10.4245 9.17512Z",
                                    fill: "#006C9C"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M14.6518 9.1751C14.3792 8.88541 13.9933 8.70349 13.564 8.70349C12.7384 8.70349 12.0692 9.37277 12.0692 10.1984C12.0692 10.6276 12.2511 11.0135 12.5408 11.2862L15.7655 14.5109C16.0382 14.8006 16.424 14.9825 16.8533 14.9825C17.6789 14.9825 18.3482 14.3132 18.3482 13.4876C18.3482 13.0584 18.1662 12.6725 17.8765 12.3998L14.6518 9.1751Z",
                                    fill: "#006C9C"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector_2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6.60404 10.1981C6.60404 11.0237 5.93475 11.693 5.10915 11.693C4.28354 11.693 3.61426 11.0237 3.61426 10.1981C3.61426 9.37253 4.28354 8.70325 5.10915 8.70325C5.93475 8.70325 6.60404 9.37253 6.60404 10.1981Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.8314 10.1982C10.8314 11.0238 10.1621 11.6931 9.33649 11.6931C8.51088 11.6931 7.84159 11.0238 7.84159 10.1982C7.84159 9.37257 8.51088 8.70329 9.33649 8.70329C10.1621 8.70329 10.8314 9.37257 10.8314 10.1982Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M15.0592 10.1982C15.0592 11.0238 14.3899 11.6931 13.5643 11.6931C12.7387 11.6931 12.0694 11.0238 12.0694 10.1982C12.0694 9.37257 12.7387 8.70329 13.5643 8.70329C14.3899 8.70329 15.0592 9.37257 15.0592 10.1982Z",
                                    fill: "white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint0_linear_0_8824",
                        x1: "8.15601",
                        y1: "7.27087",
                        x2: "24",
                        y2: "23.1149",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#77ED8B"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#22C55E"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "paint1_linear_0_8824",
                        x1: "0",
                        y1: "0.0413818",
                        x2: "19.3023",
                        y2: "19.3437",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: "#00B8D9"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "1",
                                stopColor: "#006C9C"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    mail: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "icons/notification/ic_mail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        id: "Vector",
                        d: "M0 8.99999L11.556 16.3545C11.688 16.452 11.844 16.5 12 16.5C12.156 16.5 12.312 16.452 12.444 16.3545L24 8.99999L12.45 0.149992C12.3201 0.052856 12.1622 0.000366211 12 0.000366211C11.8378 0.000366211 11.6799 0.052856 11.55 0.149992L0 8.99999Z",
                        fill: "#FFE9D5"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        id: "Vector_2",
                        d: "M19.5 0H4.5C3.6735 0 3 0.6735 3 1.5V18C3 18.414 3.336 18.75 3.75 18.75H20.25C20.664 18.75 21 18.414 21 18V1.5C21 0.6735 20.328 0 19.5 0Z",
                        fill: "#61F3F3"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        id: "Vector_3",
                        d: "M6.75 4.5H17.25C17.664 4.5 18 4.164 18 3.75C18 3.336 17.664 3 17.25 3H6.75C6.336 3 6 3.336 6 3.75C6 4.164 6.336 4.5 6.75 4.5ZM17.25 6H6.75C6.336 6 6 6.336 6 6.75C6 7.164 6.336 7.5 6.75 7.5H17.25C17.664 7.5 18 7.164 18 6.75C18 6.336 17.664 6 17.25 6ZM12.75 9H6.75C6.336 9 6 9.336 6 9.75C6 10.164 6.336 10.5 6.75 10.5H12.75C13.164 10.5 13.5 10.164 13.5 9.75C13.5 9.336 13.164 9 12.75 9Z",
                        fill: "#006C9C"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        id: "Vector_4",
                        d: "M12.444 16.3545C12.312 16.452 12.156 16.5 12 16.5C11.844 16.5 11.688 16.452 11.556 16.3545L0 9V22.5C0 23.328 0.672 24 1.5 24H22.5C23.328 24 24 23.328 24 22.5V9L12.444 16.3545Z",
                        fill: "url(#paint0_linear_0_8835)"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        id: "Vector_5",
                        d: "M22.5 24H1.5C0.6585 24 0 23.3415 0 22.5C6.7075e-05 22.3823 0.0277958 22.2663 0.0809492 22.1613C0.134103 22.0563 0.211192 21.9652 0.306 21.8955L11.556 14.3955C11.688 14.298 11.844 14.25 12 14.25C12.156 14.25 12.312 14.298 12.444 14.3955L23.694 21.8955C23.7888 21.9652 23.8659 22.0563 23.9191 22.1613C23.9722 22.2663 23.9999 22.3823 24 22.5C24 23.3415 23.3415 24 22.5 24Z",
                        fill: "#FF5630"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "paint0_linear_0_8835",
                    x1: "0",
                    y1: "9",
                    x2: "13.4831",
                    y2: "30.573",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#FFAC82"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#FF5630"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)),
    delivery: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                id: "icons/notification/ic_shipping",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    id: "stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Combined Shape",
                            d: "M23.9846 13.5663L20.4739 9.74142C20.2159 9.46006 19.8516 9.29989 19.4698 9.29993H15.1113V19.7723H16.7785C16.7785 18.4551 17.8463 17.3874 19.1634 17.3874C20.4806 17.3874 21.5484 18.4551 21.5484 19.7723H22.6217C22.9832 19.7724 23.3299 19.6288 23.5855 19.3732C23.8411 19.1175 23.9847 18.7708 23.9846 18.4093V13.5663Z",
                            fill: "url(#paint0_linear_0_8865)"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.1111 13.5665V19.7724H7.85246C7.85246 18.4551 6.78457 17.3872 5.46725 17.3872C4.14994 17.3872 3.08204 18.4551 3.08204 19.7724H1.3786C1.0171 19.7725 0.670387 19.6289 0.414766 19.3733C0.159146 19.1177 0.0155658 18.7709 0.015625 18.4094V7.03009C0.0155658 6.66859 0.159146 6.32188 0.414766 6.06626C0.670387 5.81063 1.0171 5.66706 1.3786 5.66711H2.85711C2.94212 8.0702 4.91485 9.97439 7.31944 9.97439C9.72402 9.97439 11.6968 8.0702 11.7818 5.66711H13.7481C14.5008 5.66718 15.111 6.27737 15.1111 7.03009V13.5665Z",
                            fill: "#FFAB00"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path_2",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.7846 5.517C11.7846 5.56723 11.784 5.61746 11.7818 5.66714C11.6968 8.07022 9.72407 9.97441 7.31949 9.97441C4.9149 9.97441 2.94216 8.07022 2.85716 5.66714C2.85493 5.61746 2.85437 5.56723 2.85437 5.517C2.85437 3.05098 4.85347 1.05188 7.31949 1.05188C9.7855 1.05188 11.7846 3.05098 11.7846 5.517V5.517Z",
                            fill: "#61F3F3"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "Vector",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21.5481 19.7724C21.5481 21.0895 20.4803 22.1573 19.1631 22.1573C17.846 22.1573 16.7782 21.0895 16.7782 19.7724C16.7782 18.4552 17.846 17.3875 19.1631 17.3875C20.4803 17.3875 21.5481 18.4552 21.5481 19.7724Z",
                                    fill: "#B76E00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M5.46696 17.3875C6.78412 17.3875 7.85189 18.4552 7.85189 19.7724C7.85189 21.0895 6.78412 22.1573 5.46696 22.1573C4.1498 22.1573 3.08203 21.0895 3.08203 19.7724C3.08206 18.4552 4.14981 17.3875 5.46696 17.3875Z",
                                    fill: "#B76E00"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "Path_3",
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.80965 7.30308C8.71048 7.30321 8.61499 7.26548 8.54269 7.1976L7.05246 5.80225C6.97358 5.72837 6.92882 5.62512 6.92883 5.51704V2.62141C6.92883 2.40563 7.10375 2.23071 7.31953 2.23071C7.53531 2.23071 7.71023 2.40563 7.71023 2.62141V5.34792L9.07678 6.62746C9.19385 6.73707 9.23205 6.90709 9.17312 7.05624C9.11418 7.20539 8.97008 7.30338 8.80971 7.30336L8.80965 7.30308Z",
                            fill: "#006C9C"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "paint0_linear_0_8865",
                    x1: "15.1113",
                    y1: "9.29993",
                    x2: "25.4416",
                    y2: "18.0528",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            stopColor: "#FFD666"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#FFAB00"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                    lineNumber: 314,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0))
};
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationItem",
    ()=>NotificationItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Avatar/Avatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/SvgIcon/SvgIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemAvatar/ListItemAvatar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$utils$2f$format$2d$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/utils/format-time.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$file$2d$thumbnail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/file-thumbnail/file-thumbnail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/icons.tsx [app-ssr] (ecmascript)");
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
const readerContent = (data)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        dangerouslySetInnerHTML: {
            __html: data
        },
        sx: {
            '& p': {
                m: 0,
                typography: 'body2'
            },
            '& a': {
                color: 'inherit',
                textDecoration: 'none'
            },
            '& strong': {
                typography: 'subtitle2'
            }
        }
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const renderIcon = (type)=>({
        order: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationIcons"].order,
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationIcons"].chat,
        mail: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationIcons"].mail,
        delivery: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationIcons"].delivery
    })[type];
function NotificationItem({ notification }) {
    const renderAvatar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemAvatar$2f$ListItemAvatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: notification.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: notification.avatarUrl,
                sx: {
                    bgcolor: 'background.neutral'
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    width: 40,
                    height: 40,
                    display: 'flex',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background.neutral'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$SvgIcon$2f$SvgIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        width: 24,
                        height: 24
                    },
                    children: renderIcon(notification.type)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 51,
            columnNumber: 5
        }, this);
    const renderText = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            primary: readerContent(notification.title),
            secondary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$utils$2f$format$2d$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fToNow"])(notification.createdAt),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "span",
                        sx: {
                            width: 2,
                            height: 2,
                            borderRadius: '50%',
                            bgcolor: 'currentColor'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, void 0),
                    notification.category
                ]
            }, void 0, true),
            slotProps: {
                primary: {
                    sx: {
                        mb: 0.5
                    }
                },
                secondary: {
                    sx: {
                        gap: 0.5,
                        display: 'flex',
                        alignItems: 'center',
                        typography: 'caption',
                        color: 'text.disabled'
                    }
                }
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, this);
    const renderUnReadBadge = ()=>notification.isUnRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                top: 26,
                width: 8,
                height: 8,
                right: 20,
                borderRadius: '50%',
                bgcolor: 'info.main',
                position: 'absolute'
            }
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    const renderFriendAction = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                gap: 1,
                mt: 1.5,
                display: 'flex'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "contained",
                    children: "Accept"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 119,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "outlined",
                    children: "Decline"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 122,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 118,
            columnNumber: 5
        }, this);
    const renderProjectAction = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    sx: {
                        p: 1.5,
                        my: 1.5,
                        borderRadius: 1.5,
                        color: 'text.secondary',
                        bgcolor: 'background.neutral'
                    },
                    children: readerContent(`<p><strong>@Jaydon Frankie</strong> feedback by asking questions or just leave a note of appreciation.</p>`)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 130,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "contained",
                    sx: {
                        alignSelf: 'flex-start'
                    },
                    children: "Reply"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 144,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    const renderFileAction = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: (theme)=>({
                    p: theme.spacing(1.5, 1.5, 1.5, 1),
                    gap: 1,
                    mt: 1.5,
                    display: 'flex',
                    borderRadius: 1.5,
                    bgcolor: 'background.neutral'
                }),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$file$2d$thumbnail$2f$file$2d$thumbnail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileThumbnail"], {
                    file: "http://localhost:8080/httpsdesign-suriname-2015.mp3"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 161,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    primary: "design-suriname-2015.mp3 design-suriname-2015.mp3",
                    secondary: "2.3 Mb",
                    slotProps: {
                        primary: {
                            noWrap: true,
                            sx: (theme)=>({
                                    color: 'text.secondary',
                                    fontSize: theme.typography.pxToRem(13)
                                })
                        },
                        secondary: {
                            sx: {
                                mt: 0.25,
                                typography: 'caption',
                                color: 'text.disabled'
                            }
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 163,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "outlined",
                    sx: {
                        flexShrink: 0
                    },
                    children: "Download"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 184,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 151,
            columnNumber: 5
        }, this);
    const renderTagsAction = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                mt: 1.5,
                gap: 0.75,
                display: 'flex',
                flexWrap: 'wrap'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    variant: "outlined",
                    color: "info",
                    children: "Design"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 199,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    variant: "outlined",
                    color: "warning",
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 202,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                    variant: "outlined",
                    children: "Design system"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 205,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 191,
            columnNumber: 5
        }, this);
    const renderPaymentAction = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                gap: 1,
                mt: 1.5,
                display: 'flex'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "contained",
                    children: "Pay"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 211,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    size: "small",
                    variant: "outlined",
                    children: "Decline"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
            lineNumber: 210,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        disableRipple: true,
        sx: [
            (theme)=>({
                    p: 2.5,
                    alignItems: 'flex-start',
                    borderBottom: `dashed 1px ${theme.vars.palette.divider}`
                })
        ],
        children: [
            renderUnReadBadge(),
            renderAvatar(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    minWidth: 0,
                    flex: '1 1 auto'
                },
                children: [
                    renderText(),
                    notification.type === 'friend' && renderFriendAction(),
                    notification.type === 'project' && renderProjectAction(),
                    notification.type === 'file' && renderFileAction(),
                    notification.type === 'tags' && renderTagsAction(),
                    notification.type === 'payment' && renderPaymentAction()
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsDrawer",
    ()=>NotificationsDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tab/Tab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tabs/Tabs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Badge/Badge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Drawer/Drawer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/IconButton.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/label/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/scrollbar/scrollbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$notification$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/notification-item.tsx [app-ssr] (ecmascript)");
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
const TABS = [
    {
        value: 'all',
        label: 'All',
        count: 22
    },
    {
        value: 'unread',
        label: 'Unread',
        count: 12
    },
    {
        value: 'archived',
        label: 'Archived',
        count: 10
    }
];
function NotificationsDrawer({ data = [], sx, ...other }) {
    const { value: open, onFalse: onClose, onTrue: onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBoolean"])();
    const [currentTab, setCurrentTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const handleChangeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event, newValue)=>{
        setCurrentTab(newValue);
    }, []);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data);
    const totalUnRead = notifications.filter((item)=>item.isUnRead === true).length;
    const handleMarkAllAsRead = ()=>{
        setNotifications(notifications.map((notification)=>({
                ...notification,
                isUnRead: false
            })));
    };
    const renderHead = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                py: 2,
                pr: 1,
                pl: 2.5,
                minHeight: 68,
                display: 'flex',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    variant: "h6",
                    sx: {
                        flexGrow: 1
                    },
                    children: "Notifications"
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 69,
                    columnNumber: 7
                }, this),
                !!totalUnRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Mark all as read",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        color: "primary",
                        onClick: handleMarkAllAsRead,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                            icon: "eva:done-all-fill"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onClick: onClose,
                    sx: {
                        display: {
                            xs: 'inline-flex',
                            sm: 'none'
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                        icon: "mingcute:close-line"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 81,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                        icon: "solar:settings-bold-duotone"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
            lineNumber: 59,
            columnNumber: 5
        }, this);
    const renderTabs = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tabs$2f$Tabs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            variant: "fullWidth",
            value: currentTab,
            onChange: handleChangeTab,
            indicatorColor: "custom",
            children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tab$2f$Tab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    iconPosition: "end",
                    value: tab.value,
                    label: tab.label,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$label$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                        variant: (tab.value === 'all' || tab.value === currentTab) && 'filled' || 'soft',
                        color: tab.value === 'unread' && 'info' || tab.value === 'archived' && 'success' || 'default',
                        children: tab.count
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, void 0)
                }, tab.value, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this))
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
            lineNumber: 92,
            columnNumber: 5
        }, this);
    const renderList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$scrollbar$2f$scrollbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scrollbar"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: "ul",
                children: notifications?.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        component: "li",
                        sx: {
                            display: 'flex'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$notification$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationItem"], {
                            notification: notification
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, notification.id, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
            lineNumber: 117,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].button,
                whileTap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varTap"])(0.96),
                whileHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varHover"])(1.04),
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionTap"])(),
                "aria-label": "Notifications button",
                onClick: onOpen,
                sx: sx,
                ...other,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Badge$2f$Badge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    badgeContent: totalUnRead,
                    color: "error",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
                        width: 24,
                        icon: "solar:bell-bing-bold-duotone"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: onClose,
                anchor: "right",
                slotProps: {
                    backdrop: {
                        invisible: true
                    },
                    paper: {
                        sx: {
                            width: 1,
                            maxWidth: 420
                        }
                    }
                },
                children: [
                    renderHead(),
                    renderTabs(),
                    renderList(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            p: 1
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            fullWidth: true,
                            size: "large",
                            children: "View all"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardLayout",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$object$2f$merge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/es-toolkit/dist/object/merge.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Alert/Alert.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/IconButton/iconButtonClasses.js [app-ssr] (ecmascript) <export default as iconButtonClasses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_others$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/_others.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/settings/context/use-settings-context.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-mocked-user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-mobile.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/dashboard/content.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-vertical.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$horizontal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/dashboard/nav-horizontal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$account$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/nav-config-account.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/searchbar/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$workspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/nav-config-workspace.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$menu$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/menu-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$account$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/account-drawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$settings$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/settings-button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$language$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/language-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$contacts$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/contacts-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$workspaces$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/workspaces-popover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/nav-config-dashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/dashboard/css-vars.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/components/notifications-drawer/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$main$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/main-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$header$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/header-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$layout$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/layouts/core/layout-section.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
function DashboardLayout({ sx, cssVars, children, slotProps, layoutQuery = 'lg' }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMockedUser"])();
    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$settings$2f$context$2f$use$2d$settings$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsContext"])();
    const navVars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardNavColorVars"])(theme, settings.state.navColor, settings.state.navLayout);
    const { value: open, onFalse: onClose, onTrue: onOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBoolean"])();
    const navData = slotProps?.nav?.data ?? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navData"];
    const isNavMini = settings.state.navLayout === 'mini';
    const isNavHorizontal = settings.state.navLayout === 'horizontal';
    const isNavVertical = isNavMini || settings.state.navLayout === 'vertical';
    const canDisplayItemByRole = (allowedRoles)=>!allowedRoles?.includes(user?.role);
    const renderHeader = ()=>{
        const headerSlotProps = {
            container: {
                maxWidth: false,
                sx: {
                    ...isNavVertical && {
                        px: {
                            [layoutQuery]: 5
                        }
                    },
                    ...isNavHorizontal && {
                        bgcolor: 'var(--layout-nav-bg)',
                        height: {
                            [layoutQuery]: 'var(--layout-nav-horizontal-height)'
                        },
                        [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$iconButtonClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__iconButtonClasses$3e$__["iconButtonClasses"].root}`]: {
                            color: 'var(--layout-nav-text-secondary-color)'
                        }
                    }
                }
            }
        };
        const headerSlots = {
            topArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                severity: "info",
                sx: {
                    display: 'none',
                    borderRadius: 0
                },
                children: "This is an info Alert."
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            bottomArea: isNavHorizontal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$horizontal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavHorizontal"], {
                data: navData,
                layoutQuery: layoutQuery,
                cssVars: navVars.section,
                checkPermissions: canDisplayItemByRole
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : null,
            leftArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$menu$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuButton"], {
                        onClick: onOpen,
                        sx: {
                            mr: 1,
                            ml: -1,
                            [theme.breakpoints.up(layoutQuery)]: {
                                display: 'none'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$mobile$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavMobile"], {
                        data: navData,
                        open: open,
                        onClose: onClose,
                        cssVars: navVars.section,
                        checkPermissions: canDisplayItemByRole
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    isNavHorizontal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                        sx: {
                            display: 'none',
                            [theme.breakpoints.up(layoutQuery)]: {
                                display: 'inline-flex'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this),
                    isNavHorizontal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VerticalDivider"], {
                        sx: {
                            [theme.breakpoints.up(layoutQuery)]: {
                                display: 'flex'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$workspaces$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WorkspacesPopover"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$workspace$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_workspaces"],
                        sx: {
                            ...isNavHorizontal && {
                                color: 'var(--layout-nav-text-primary-color)'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            rightArea: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: {
                        xs: 0,
                        sm: 0.75
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$searchbar$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Searchbar"], {
                        data: navData
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$language$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguagePopover"], {
                        data: [
                            {
                                value: 'en',
                                label: 'English',
                                countryCode: 'GB'
                            },
                            {
                                value: 'fr',
                                label: 'French',
                                countryCode: 'FR'
                            },
                            {
                                value: 'vi',
                                label: 'Vietnamese',
                                countryCode: 'VN'
                            },
                            {
                                value: 'cn',
                                label: 'Chinese',
                                countryCode: 'CN'
                            },
                            {
                                value: 'ar',
                                label: 'Arabic',
                                countryCode: 'SA'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$notifications$2d$drawer$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationsDrawer"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_others$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_notifications"]
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$contacts$2d$popover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactsPopover"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_others$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_contacts"]
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$settings$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsButton"], {}, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$components$2f$account$2d$drawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountDrawer"], {
                        data: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$nav$2d$config$2d$account$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_account"]
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$header$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeaderSection"], {
            layoutQuery: layoutQuery,
            disableElevation: isNavVertical,
            ...slotProps?.header,
            slots: {
                ...headerSlots,
                ...slotProps?.header?.slots
            },
            slotProps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$object$2f$merge$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(headerSlotProps, slotProps?.header?.slotProps ?? {}),
            sx: slotProps?.header?.sx
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
            lineNumber: 179,
            columnNumber: 7
        }, this);
    };
    const renderSidebar = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$nav$2d$vertical$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavVertical"], {
            data: navData,
            isNavMini: isNavMini,
            layoutQuery: layoutQuery,
            cssVars: navVars.section,
            checkPermissions: canDisplayItemByRole,
            onToggleNav: ()=>settings.setField('navLayout', settings.state.navLayout === 'vertical' ? 'mini' : 'vertical')
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
            lineNumber: 191,
            columnNumber: 5
        }, this);
    const renderFooter = ()=>null;
    const renderMain = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$main$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainSection"], {
            ...slotProps?.main,
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
            lineNumber: 208,
            columnNumber: 28
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$layout$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutSection"], {
        /** **************************************
       * @Header
       *************************************** */ headerSection: renderHeader(),
        /** **************************************
       * @Sidebar
       *************************************** */ sidebarSection: isNavHorizontal ? null : renderSidebar(),
        /** **************************************
       * @Footer
       *************************************** */ footerSection: renderFooter(),
        /** **************************************
       * @Styles
       *************************************** */ cssVars: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$dashboard$2f$css$2d$vars$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dashboardLayoutVars"])(theme),
            ...navVars.layout,
            ...cssVars
        },
        sx: [
            {
                [`& .${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$layouts$2f$core$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["layoutClasses"].sidebarContainer}`]: {
                    [theme.breakpoints.up(layoutQuery)]: {
                        pl: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
                        transition: theme.transitions.create([
                            'padding-left'
                        ], {
                            easing: 'var(--layout-transition-easing)',
                            duration: 'var(--layout-transition-duration)'
                        })
                    }
                }
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        children: renderMain()
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/layouts/dashboard/layout.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_track-b_frontend_src_layouts_42bdbeef._.js.map