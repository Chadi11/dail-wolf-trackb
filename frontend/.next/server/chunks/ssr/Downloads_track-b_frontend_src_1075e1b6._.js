module.exports = [
"[project]/Downloads/track-b/frontend/src/utils/format-time.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FORMAT_PATTERNS",
    ()=>FORMAT_PATTERNS,
    "fAdd",
    ()=>fAdd,
    "fDate",
    ()=>fDate,
    "fDateRangeShortLabel",
    ()=>fDateRangeShortLabel,
    "fDateTime",
    ()=>fDateTime,
    "fIsAfter",
    ()=>fIsAfter,
    "fIsBetween",
    ()=>fIsBetween,
    "fIsSame",
    ()=>fIsSame,
    "fSub",
    ()=>fSub,
    "fTime",
    ()=>fTime,
    "fTimestamp",
    ()=>fTimestamp,
    "fToNow",
    ()=>fToNow,
    "today",
    ()=>today
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/dayjs/plugin/duration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/dayjs/plugin/relativeTime.js [app-ssr] (ecmascript)");
;
;
;
// ----------------------------------------------------------------------
/**
 * Day.js format reference:
 * https://day.js.org/docs/en/display/format
 */ /**
 * Timezone reference:
 * https://day.js.org/docs/en/timezone/set-default-timezone
 */ /**
 * UTC usage:
 * https://day.js.org/docs/en/plugin/utc
 * Example:
 * import utc from 'dayjs/plugin/utc';
 * dayjs.extend(utc);
 * dayjs().utc().format()
 */ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$duration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const FORMAT_PATTERNS = {
    dateTime: 'DD MMM YYYY h:mm a',
    date: 'DD MMM YYYY',
    time: 'h:mm a',
    split: {
        dateTime: 'DD/MM/YYYY h:mm a',
        date: 'DD/MM/YYYY'
    },
    paramCase: {
        dateTime: 'DD-MM-YYYY h:mm a',
        date: 'DD-MM-YYYY'
    }
};
const INVALID_DATE = 'Invalid';
function today(template) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(new Date()).startOf('day').format(template);
}
function fDateTime(input, template = FORMAT_PATTERNS.dateTime) {
    if (!input) return '';
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    if (!date.isValid()) return INVALID_DATE;
    return date.format(template);
}
function fDate(input, template = FORMAT_PATTERNS.date) {
    if (!input) return '';
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    if (!date.isValid()) return INVALID_DATE;
    return date.format(template);
}
function fTime(input, template = FORMAT_PATTERNS.time) {
    if (!input) return '';
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    if (!date.isValid()) return INVALID_DATE;
    return date.format(template);
}
function fTimestamp(input) {
    if (!input) return '';
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    if (!date.isValid()) return INVALID_DATE;
    return date.valueOf();
}
function fToNow(input) {
    if (!input) return '';
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    if (!date.isValid()) return INVALID_DATE;
    return date.toNow(true);
}
function fIsBetween(input, start, end) {
    if (!input || !start || !end) return false;
    const inputDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(input);
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(end);
    if (!inputDate.isValid() || !startDate.isValid() || !endDate.isValid()) {
        return false;
    }
    const inputValue = inputDate.valueOf();
    const startValue = startDate.valueOf();
    const endValue = endDate.valueOf();
    return inputValue >= Math.min(startValue, endValue) && inputValue <= Math.max(startValue, endValue);
}
function fIsAfter(start, end) {
    if (!start || !end) return false;
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(end);
    if (!startDate.isValid() || !endDate.isValid()) {
        return false;
    }
    return startDate.isAfter(endDate);
}
function fIsSame(start, end, unit = 'year') {
    if (!start || !end) return false;
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(end);
    if (!startDate.isValid() || !endDate.isValid()) {
        return false;
    }
    return startDate.isSame(endDate, unit);
}
function fDateRangeShortLabel(start, end, initial) {
    if (!start || !end) return '';
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(start);
    const endDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(end);
    if (!startDate.isValid() || !endDate.isValid() || startDate.isAfter(endDate)) {
        return INVALID_DATE;
    }
    if (initial) {
        return `${fDate(startDate)} - ${fDate(endDate)}`;
    }
    const isSameDay = startDate.isSame(endDate, 'day');
    const isSameMonth = startDate.isSame(endDate, 'month');
    const isSameYear = startDate.isSame(endDate, 'year');
    if (isSameDay) {
        return fDate(endDate);
    }
    if (isSameMonth) {
        return `${fDate(startDate, 'DD')} - ${fDate(endDate)}`;
    }
    if (isSameYear) {
        return `${fDate(startDate, 'DD MMM')} - ${fDate(endDate)}`;
    }
    return `${fDate(startDate)} - ${fDate(endDate)}`;
}
function fAdd({ years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 }) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().add(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].duration({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds
    })).format();
    return result;
}
function fSub({ years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0 }) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().subtract(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].duration({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        milliseconds
    })).format();
    return result;
}
}),
"[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
}),
"[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/track-b/frontend/src/auth/hooks/use-mocked-user.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMockedUser",
    ()=>useMockedUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/_mock/_mock.ts [app-ssr] (ecmascript)");
;
function useMockedUser() {
    const user = {
        id: '8864c717-587d-472a-929a-8e5f298024da-0',
        displayName: 'Jaydon Frankie',
        email: 'demo@minimals.cc',
        photoURL: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].image.avatar(24),
        phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].phoneNumber(1),
        country: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$_mock$2f$_mock$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_mock"].countryNames(1),
        address: '90210 Broadway Blvd',
        state: 'California',
        city: 'San Francisco',
        zipCode: '94116',
        about: 'Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.',
        role: 'admin',
        isPublic: true
    };
    return {
        user
    };
}
}),
"[project]/Downloads/track-b/frontend/src/auth/hooks/use-auth-context.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthContext",
    ()=>useAuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/context/auth-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function useAuthContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$context$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthContext"]);
    if (!context) {
        throw new Error('useAuthContext: Context must be used inside AuthProvider');
    }
    return context;
}
}),
"[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$mocked$2d$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-mocked-user.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-auth-context.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/Downloads/track-b/frontend/src/auth/guard/auth-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/use-router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$splash$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-auth-context.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const signInPaths = {
    jwt: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].auth.jwt.signIn,
    auth0: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].auth.auth0.signIn,
    amplify: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].auth.amplify.signIn,
    firebase: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].auth.firebase.signIn,
    supabase: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paths"].auth.supabase.signIn
};
function AuthGuard({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { authenticated, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const createRedirectPath = (currentPath)=>{
        const queryString = new URLSearchParams({
            returnTo: pathname
        }).toString();
        return `${currentPath}?${queryString}`;
    };
    const checkPermissions = async ()=>{
        if (loading) {
            return;
        }
        if (!authenticated) {
            const { method } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].auth;
            const signInPath = signInPaths[method];
            const redirectPath = createRedirectPath(signInPath);
            router.replace(redirectPath);
            return;
        }
        setIsChecking(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        authenticated,
        loading
    ]);
    if (isChecking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$splash$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplashScreen"], {}, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/auth-guard.tsx",
            lineNumber: 66,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/Downloads/track-b/frontend/src/auth/guard/guest-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestGuard",
    ()=>GuestGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/hooks/use-router.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/global-config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$splash$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/auth/hooks/use-auth-context.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function GuestGuard({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$hooks$2f$use$2d$router$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { loading, authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$auth$2f$hooks$2f$use$2d$auth$2d$context$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthContext"])();
    const [isChecking, setIsChecking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const redirectUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeReturnUrl"])(searchParams.get('returnTo'), __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$global$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].auth.redirectPath);
    const checkPermissions = async ()=>{
        if (loading) {
            return;
        }
        if (authenticated) {
            router.replace(redirectUrl);
            return;
        }
        setIsChecking(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        authenticated,
        loading
    ]);
    if (isChecking) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$loading$2d$screen$2f$splash$2d$screen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplashScreen"], {}, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/guest-guard.tsx",
            lineNumber: 49,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleBasedGuard",
    ()=>RoleBasedGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Container/Container.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$assets$2f$illustrations$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/assets/illustrations/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$assets$2f$illustrations$2f$forbidden$2d$illustration$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ForbiddenIllustration$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/assets/illustrations/forbidden-illustration.tsx [app-ssr] (ecmascript) <export default as ForbiddenIllustration>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/bounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RoleBasedGuard({ sx, children, hasContent, currentRole, allowedRoles }) {
    if (currentRole && allowedRoles && !allowedRoles.includes(currentRole)) {
        return hasContent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionContainer"],
            sx: [
                {
                    textAlign: 'center'
                },
                ...Array.isArray(sx) ? sx : [
                    sx
                ]
            ],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varBounce"])('in'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "h3",
                        sx: {
                            mb: 2
                        },
                        children: "Permission denied"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varBounce"])('in'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        sx: {
                            color: 'text.secondary'
                        },
                        children: "You do not have permission to access this page."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div, {
                    variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varBounce"])('in'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$assets$2f$illustrations$2f$forbidden$2d$illustration$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ForbiddenIllustration$3e$__["ForbiddenIllustration"], {
                        sx: {
                            my: {
                                xs: 5,
                                sm: 10
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/track-b/frontend/src/auth/guard/role-based-guard.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this) : null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            " ",
            children,
            " "
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Downloads_track-b_frontend_src_1075e1b6._.js.map