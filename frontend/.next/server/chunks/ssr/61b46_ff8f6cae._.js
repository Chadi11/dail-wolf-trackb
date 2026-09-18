module.exports = [
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/wrap.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrap",
    ()=>wrap
]);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEasingForSegment",
    ()=>getEasingForSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/wrap.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)");
;
;
function getEasingForSegment(easing, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$easing$2d$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEasingArray"])(easing) ? easing[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$wrap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrap"])(0, easing.length, i)] : easing;
}
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/linkClasses.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getLinkUtilityClass",
    ()=>getLinkUtilityClass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js [app-ssr] (ecmascript)");
;
;
function getLinkUtilityClass(slot) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClass$2f$generateUtilityClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiLink', slot);
}
const linkClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$generateUtilityClasses$2f$generateUtilityClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('MuiLink', [
    'root',
    'underlineNone',
    'underlineHover',
    'underlineAlways',
    'button',
    'focusVisible'
]);
const __TURBOPACK__default__export__ = linkClasses;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/getTextDecoration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/style/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
;
;
const getTextDecoration = ({ theme, ownerState })=>{
    const transformedColor = ownerState.color;
    if ('colorSpace' in theme && theme.colorSpace) {
        const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}.main`) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}`) || ownerState.color;
        return theme.alpha(color, 0.4);
    }
    // check the `main` color first for a custom palette, then fallback to the color itself
    const color = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}.main`, false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}`, false) || ownerState.color;
    const channelColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}.mainChannel`) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$style$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPath"])(theme, `palette.${transformedColor}Channel`);
    if ('vars' in theme && channelColor) {
        return `rgba(${channelColor} / 0.4)`;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(color, 0.4);
};
const __TURBOPACK__default__export__ = getTextDecoration;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/Link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/elementTypeAcceptingRef/elementTypeAcceptingRef.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isFocusVisible$2f$isFocusVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/memoTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$linkClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/linkClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$getTextDecoration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/getTextDecoration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const v6Colors = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
};
const useUtilityClasses = (ownerState)=>{
    const { classes, component, focusVisible, underline } = ownerState;
    const slots = {
        root: [
            'root',
            `underline${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(underline)}`,
            component === 'button' && 'button',
            focusVisible && 'focusVisible'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$linkClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinkUtilityClass"], classes);
};
const LinkRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiLink',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[`underline${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.underline)}`],
            ownerState.component === 'button' && styles.button
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>{
    return {
        variants: [
            {
                props: {
                    underline: 'none'
                },
                style: {
                    textDecoration: 'none'
                }
            },
            {
                props: {
                    underline: 'hover'
                },
                style: {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline'
                    }
                }
            },
            {
                props: {
                    underline: 'always'
                },
                style: {
                    textDecoration: 'underline',
                    '&:hover': {
                        textDecorationColor: 'inherit'
                    }
                }
            },
            {
                props: ({ underline, ownerState })=>underline === 'always' && ownerState.color !== 'inherit',
                style: {
                    textDecorationColor: 'var(--Link-underlineColor)'
                }
            },
            {
                props: ({ underline, ownerState })=>underline === 'always' && ownerState.color === 'inherit',
                style: theme.colorSpace ? {
                    textDecorationColor: theme.alpha('currentColor', 0.4)
                } : null
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        underline: 'always',
                        color
                    },
                    style: {
                        '--Link-underlineColor': theme.alpha((theme.vars || theme).palette[color].main, 0.4)
                    }
                })),
            {
                props: {
                    underline: 'always',
                    color: 'textPrimary'
                },
                style: {
                    '--Link-underlineColor': theme.alpha((theme.vars || theme).palette.text.primary, 0.4)
                }
            },
            {
                props: {
                    underline: 'always',
                    color: 'textSecondary'
                },
                style: {
                    '--Link-underlineColor': theme.alpha((theme.vars || theme).palette.text.secondary, 0.4)
                }
            },
            {
                props: {
                    underline: 'always',
                    color: 'textDisabled'
                },
                style: {
                    '--Link-underlineColor': (theme.vars || theme).palette.text.disabled
                }
            },
            {
                props: {
                    component: 'button'
                },
                style: {
                    position: 'relative',
                    WebkitTapHighlightColor: 'transparent',
                    backgroundColor: 'transparent',
                    // Reset default value
                    // We disable the focus ring for mouse, touch and keyboard users.
                    outline: 0,
                    border: 0,
                    margin: 0,
                    // Remove the margin in Safari
                    borderRadius: 0,
                    padding: 0,
                    // Remove the padding in Firefox
                    cursor: 'pointer',
                    userSelect: 'none',
                    verticalAlign: 'middle',
                    MozAppearance: 'none',
                    // Reset
                    WebkitAppearance: 'none',
                    // Reset
                    '&::-moz-focus-inner': {
                        borderStyle: 'none' // Remove Firefox dotted outline.
                    },
                    [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$linkClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
                        outline: 'auto'
                    }
                }
            }
        ]
    };
}));
const Link = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Link(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiLink'
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const { className, color = 'primary', component = 'a', onBlur, onFocus, TypographyClasses, underline = 'always', variant = 'inherit', sx, ...other } = props;
    const [focusVisible, setFocusVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const handleBlur = (event)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isFocusVisible$2f$isFocusVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.target)) {
            setFocusVisible(false);
        }
        if (onBlur) {
            onBlur(event);
        }
    };
    const handleFocus = (event)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$isFocusVisible$2f$isFocusVisible$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(event.target)) {
            setFocusVisible(true);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    const ownerState = {
        ...props,
        color,
        component,
        focusVisible,
        underline,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LinkRoot, {
        color: color,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        classes: TypographyClasses,
        component: component,
        onBlur: handleBlur,
        onFocus: handleFocus,
        ref: ref,
        ownerState: ownerState,
        variant: variant,
        ...other,
        sx: [
            ...v6Colors[color] === undefined ? [
                {
                    color
                }
            ] : [],
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        style: {
            ...other.style,
            ...underline === 'always' && color !== 'inherit' && !v6Colors[color] && {
                '--Link-underlineColor': (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$getTextDecoration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                    theme,
                    ownerState
                })
            }
        }
    });
});
("TURBOPACK compile-time truthy", 1) ? Link.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the link.
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'primary',
            'secondary',
            'success',
            'error',
            'info',
            'warning',
            'textPrimary',
            'textSecondary',
            'textDisabled'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$elementTypeAcceptingRef$2f$elementTypeAcceptingRef$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    /**
   * @ignore
   */ onBlur: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ onFocus: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
    /**
   * @ignore
   */ style: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * `classes` prop applied to the [`Typography`](https://mui.com/material-ui/api/typography/) element.
   */ TypographyClasses: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * Controls when the link should have an underline.
   * @default 'always'
   */ underline: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'always',
        'hover',
        'none'
    ]),
    /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'body1',
            'body2',
            'button',
            'caption',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'inherit',
            'overline',
            'subtitle1',
            'subtitle2'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Link;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/identifier.js [app-ssr] (ecmascript)");
;
;
const useMediaQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useMediaQuery$2f$useMediaQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unstable_createUseMediaQuery"])({
    themeId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$identifier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
const __TURBOPACK__default__export__ = useMediaQuery;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Fab/Fab.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/ButtonBase/ButtonBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$fabClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Fab/fabClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/rootShouldForwardProp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/memoTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const useUtilityClasses = (ownerState)=>{
    const { color, variant, classes, size } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            `size${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(size)}`,
            color === 'inherit' ? 'colorInherit' : color
        ]
    };
    const composedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$fabClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFabUtilityClass"], classes);
    return {
        ...classes,
        // forward the focused, disabled, etc. classes to the ButtonBase
        ...composedClasses
    };
};
const FabRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ButtonBase$2f$ButtonBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
    name: 'MuiFab',
    slot: 'Root',
    shouldForwardProp: (prop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$rootShouldForwardProp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prop) || prop === 'classes',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles[`size${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.size)}`],
            ownerState.color === 'inherit' && styles.colorInherit,
            styles[(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.size)],
            styles[ownerState.color]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        ...theme.typography.button,
        minHeight: 36,
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
            'border-color'
        ], {
            duration: theme.transitions.duration.short
        }),
        borderRadius: '50%',
        padding: 0,
        minWidth: 0,
        width: 56,
        height: 56,
        zIndex: (theme.vars || theme).zIndex.fab,
        boxShadow: (theme.vars || theme).shadows[6],
        '&:active': {
            boxShadow: (theme.vars || theme).shadows[12]
        },
        color: theme.vars ? theme.vars.palette.grey[900] : theme.palette.getContrastText?.(theme.palette.grey[300]),
        backgroundColor: (theme.vars || theme).palette.grey[300],
        '&:hover': {
            backgroundColor: (theme.vars || theme).palette.grey.A100,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: (theme.vars || theme).palette.grey[300]
            },
            textDecoration: 'none'
        },
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$fabClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].focusVisible}`]: {
            boxShadow: (theme.vars || theme).shadows[6]
        },
        variants: [
            {
                props: {
                    size: 'small'
                },
                style: {
                    width: 40,
                    height: 40
                }
            },
            {
                props: {
                    size: 'medium'
                },
                style: {
                    width: 48,
                    height: 48
                }
            },
            {
                props: {
                    variant: 'extended'
                },
                style: {
                    borderRadius: 48 / 2,
                    padding: '0 16px',
                    width: 'auto',
                    minHeight: 'auto',
                    minWidth: 48,
                    height: 48
                }
            },
            {
                props: {
                    variant: 'extended',
                    size: 'small'
                },
                style: {
                    width: 'auto',
                    padding: '0 8px',
                    borderRadius: 34 / 2,
                    minWidth: 34,
                    height: 34
                }
            },
            {
                props: {
                    variant: 'extended',
                    size: 'medium'
                },
                style: {
                    width: 'auto',
                    padding: '0 16px',
                    borderRadius: 40 / 2,
                    minWidth: 40,
                    height: 40
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            }
        ]
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])([
                'dark',
                'contrastText'
            ])) // check all the used fields in the style below
            .map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].contrastText,
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        '&:hover': {
                            backgroundColor: (theme.vars || theme).palette[color].dark,
                            // Reset on touch devices, it doesn't add specificity
                            '@media (hover: none)': {
                                backgroundColor: (theme.vars || theme).palette[color].main
                            }
                        }
                    }
                }))
        ]
    })), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        [`&.${__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$fabClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled,
            boxShadow: (theme.vars || theme).shadows[0],
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
    })));
const Fab = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Fab(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiFab'
    });
    const { children, className, color = 'default', component = 'button', disabled = false, disableFocusRipple = false, focusVisibleClassName, size = 'large', variant = 'circular', ...other } = props;
    const ownerState = {
        ...props,
        color,
        component,
        disabled,
        disableFocusRipple,
        size,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FabRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        component: component,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.focusVisible, focusVisibleClassName),
        ownerState: ownerState,
        ref: ref,
        ...other,
        classes: classes,
        children: children
    });
});
("TURBOPACK compile-time truthy", 1) ? Fab.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * The content of the component.
   */ children: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].node,
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'default',
            'error',
            'info',
            'inherit',
            'primary',
            'secondary',
            'success',
            'warning'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */ component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].elementType,
    /**
   * If `true`, the component is disabled.
   * @default false
   */ disabled: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */ disableFocusRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * If `true`, the ripple effect is disabled.
   */ disableRipple: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool,
    /**
   * @ignore
   */ focusVisibleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */ href: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */ size: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'small',
            'medium',
            'large'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The variant to use.
   * @default 'circular'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'circular',
            'extended'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = Fab;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/composeClasses/composeClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/RtlProvider/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@emotion/react/dist/emotion-react.development.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/memoTheme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/createSimplePaletteValueFilter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/DefaultPropsProvider/DefaultPropsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/utils/capitalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$linearProgressClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/LinearProgress/linearProgressClasses.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
const TRANSITION_DURATION = 4; // seconds
const indeterminate1Keyframe = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`;
// This implementation is for supporting both Styled-components v4+ and Pigment CSS.
// A global animation has to be created here for Styled-components v4+ (https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#12).
// which can be done by checking typeof indeterminate1Keyframe !== 'string' (at runtime, Pigment CSS transform keyframes`` to a string).
const indeterminate1Animation = typeof indeterminate1Keyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null;
const indeterminate2Keyframe = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`;
const indeterminate2Animation = typeof indeterminate2Keyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null;
const bufferKeyframe = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["keyframes"]`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`;
const bufferAnimation = typeof bufferKeyframe !== 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$react$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["css"]`
        animation: ${bufferKeyframe} 3s infinite linear;
      ` : null;
const useUtilityClasses = (ownerState)=>{
    const { classes, variant, color } = ownerState;
    const slots = {
        root: [
            'root',
            `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(color)}`,
            variant
        ],
        dashed: [
            'dashed',
            `dashedColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(color)}`
        ],
        bar1: [
            'bar',
            'bar1',
            `barColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(color)}`,
            (variant === 'indeterminate' || variant === 'query') && 'bar1Indeterminate',
            variant === 'determinate' && 'bar1Determinate',
            variant === 'buffer' && 'bar1Buffer'
        ],
        bar2: [
            'bar',
            'bar2',
            variant !== 'buffer' && `barColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(color)}`,
            variant === 'buffer' && `color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(color)}`,
            (variant === 'indeterminate' || variant === 'query') && 'bar2Indeterminate',
            variant === 'buffer' && 'bar2Buffer'
        ]
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$composeClasses$2f$composeClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(slots, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$linearProgressClasses$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLinearProgressUtilityClass"], classes);
};
const getColorShade = (theme, color)=>{
    if (theme.vars) {
        return theme.vars.palette.LinearProgress[`${color}Bg`];
    }
    return theme.palette.mode === 'light' ? theme.lighten(theme.palette[color].main, 0.62) : theme.darken(theme.palette[color].main, 0.5);
};
const LinearProgressRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[`color${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            styles[ownerState.variant]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        height: 4,
        // Fix Safari's bug during composition of different paint.
        zIndex: 0,
        '@media print': {
            colorAdjust: 'exact'
        },
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: getColorShade(theme, color)
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.color === 'inherit' && ownerState.variant !== 'buffer',
                style: {
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'currentColor',
                        opacity: 0.3
                    }
                }
            },
            {
                props: {
                    variant: 'buffer'
                },
                style: {
                    backgroundColor: 'transparent'
                }
            },
            {
                props: {
                    variant: 'query'
                },
                style: {
                    transform: 'rotate(180deg)'
                }
            }
        ]
    })));
const LinearProgressDashed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Dashed',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.dashed,
            styles[`dashedColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`]
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        position: 'absolute',
        marginTop: 0,
        height: '100%',
        width: '100%',
        backgroundSize: '10px 10px',
        backgroundPosition: '0 -23px',
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    opacity: 0.3,
                    backgroundImage: `radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>{
                const backgroundColor = getColorShade(theme, color);
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundImage: `radial-gradient(${backgroundColor} 0%, ${backgroundColor} 16%, transparent 42%)`
                    }
                };
            })
        ]
    })), bufferAnimation || {
    // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
    animation: `${bufferKeyframe} 3s infinite linear`
});
const LinearProgressBar1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar1',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.bar,
            styles.bar1,
            styles[`barColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar1Indeterminate,
            ownerState.variant === 'determinate' && styles.bar1Determinate,
            ownerState.variant === 'buffer' && styles.bar1Buffer
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        transition: 'transform 0.2s linear',
        transformOrigin: 'left',
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    backgroundColor: 'currentColor'
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main
                    }
                })),
            {
                props: {
                    variant: 'determinate'
                },
                style: {
                    transition: `transform .${TRANSITION_DURATION}s linear`
                }
            },
            {
                props: {
                    variant: 'buffer'
                },
                style: {
                    zIndex: 1,
                    transition: `transform .${TRANSITION_DURATION}s linear`
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: {
                    width: 'auto'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: indeterminate1Animation || {
                    animation: `${indeterminate1Keyframe} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
                }
            }
        ]
    })));
const LinearProgressBar2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: 'MuiLinearProgress',
    slot: 'Bar2',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.bar,
            styles.bar2,
            styles[`barColor${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$capitalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ownerState.color)}`],
            (ownerState.variant === 'indeterminate' || ownerState.variant === 'query') && styles.bar2Indeterminate,
            ownerState.variant === 'buffer' && styles.bar2Buffer
        ];
    }
})((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$memoTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(({ theme })=>({
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        transition: 'transform 0.2s linear',
        transformOrigin: 'left',
        variants: [
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color
                    },
                    style: {
                        '--LinearProgressBar2-barColor': (theme.vars || theme).palette[color].main
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.variant !== 'buffer' && ownerState.color !== 'inherit',
                style: {
                    backgroundColor: 'var(--LinearProgressBar2-barColor, currentColor)'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant !== 'buffer' && ownerState.color === 'inherit',
                style: {
                    backgroundColor: 'currentColor'
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    opacity: 0.3
                }
            },
            ...Object.entries(theme.palette).filter((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$createSimplePaletteValueFilter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])()).map(([color])=>({
                    props: {
                        color,
                        variant: 'buffer'
                    },
                    style: {
                        backgroundColor: getColorShade(theme, color),
                        transition: `transform .${TRANSITION_DURATION}s linear`
                    }
                })),
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: {
                    width: 'auto'
                }
            },
            {
                props: ({ ownerState })=>ownerState.variant === 'indeterminate' || ownerState.variant === 'query',
                style: indeterminate2Animation || {
                    animation: `${indeterminate2Keyframe} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
                }
            }
        ]
    })));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */ const LinearProgress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function LinearProgress(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DefaultPropsProvider$2f$DefaultPropsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDefaultProps"])({
        props: inProps,
        name: 'MuiLinearProgress'
    });
    const { className, color = 'primary', value, valueBuffer, variant = 'indeterminate', ...other } = props;
    const ownerState = {
        ...props,
        color,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const isRtl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$RtlProvider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRtl"])();
    const rootProps = {};
    const inlineStyles = {
        bar1: {},
        bar2: {}
    };
    if (variant === 'determinate' || variant === 'buffer') {
        if (value !== undefined) {
            rootProps['aria-valuenow'] = Math.round(value);
            rootProps['aria-valuemin'] = 0;
            rootProps['aria-valuemax'] = 100;
            let transform = value - 100;
            if (isRtl) {
                transform = -transform;
            }
            inlineStyles.bar1.transform = `translateX(${transform}%)`;
        } else if ("TURBOPACK compile-time truthy", 1) {
            console.error('MUI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
        }
    }
    if (variant === 'buffer') {
        if (valueBuffer !== undefined) {
            let transform = (valueBuffer || 0) - 100;
            if (isRtl) {
                transform = -transform;
            }
            inlineStyles.bar2.transform = `translateX(${transform}%)`;
        } else if ("TURBOPACK compile-time truthy", 1) {
            console.error('MUI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(LinearProgressRoot, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(classes.root, className),
        ownerState: ownerState,
        role: "progressbar",
        ...rootProps,
        ref: ref,
        ...other,
        children: [
            variant === 'buffer' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressDashed, {
                className: classes.dashed,
                ownerState: ownerState
            }) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressBar1, {
                className: classes.bar1,
                ownerState: ownerState,
                style: inlineStyles.bar1
            }),
            variant === 'determinate' ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(LinearProgressBar2, {
                className: classes.bar2,
                ownerState: ownerState,
                style: inlineStyles.bar2
            })
        ]
    });
});
("TURBOPACK compile-time truthy", 1) ? LinearProgress.propTypes = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
   * Override or extend the styles applied to the component.
   */ classes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
    /**
   * @ignore
   */ className: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string,
    /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */ color: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] /* @typescript-to-proptypes-ignore */ .oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
            'inherit',
            'primary',
            'secondary'
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].string
    ]),
    /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */ sx: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].arrayOf(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOfType([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bool
        ])),
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].func,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].object
    ]),
    /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */ value: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */ valueBuffer: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].number,
    /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */ variant: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].oneOf([
        'buffer',
        'determinate',
        'indeterminate',
        'query'
    ])
} : "TURBOPACK unreachable";
const __TURBOPACK__default__export__ = LinearProgress;
}),
"[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _class_private_field_loose_base(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
        throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
}
exports._ = _class_private_field_loose_base;
}),
"[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var id = 0;
function _class_private_field_loose_key(name) {
    return "__private_" + id++ + "_" + name;
}
exports._ = _class_private_field_loose_key;
}),
"[project]/Downloads/track-b/frontend/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getThemeProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/resolveProps/resolveProps.js [app-ssr] (ecmascript)");
;
function getThemeProps(params) {
    const { theme, name, props } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
        return props;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$resolveProps$2f$resolveProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(theme.components[name].defaultProps, props);
}
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript) <export default as getThemeProps>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getThemeProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript)");
}),
"[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unstable_createUseMediaQuery",
    ()=>unstable_createUseMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getThemeProps$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js [app-ssr] (ecmascript) <export default as getThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// TODO React 17: Remove `useMediaQueryOld` once React 17 support is removed
function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
    const [match, setMatch] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(()=>{
        if (noSsr && matchMedia) {
            return matchMedia(query).matches;
        }
        if (ssrMatchMedia) {
            return ssrMatchMedia(query).matches;
        }
        // Once the component is mounted, we rely on the
        // event listeners to return the correct matches value.
        return defaultMatches;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (!matchMedia) {
            return undefined;
        }
        const queryList = matchMedia(query);
        const updateMatch = ()=>{
            setMatch(queryList.matches);
        };
        updateMatch();
        queryList.addEventListener('change', updateMatch);
        return ()=>{
            queryList.removeEventListener('change', updateMatch);
        };
    }, [
        query,
        matchMedia
    ]);
    return match;
}
// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
};
const maybeReactUseSyncExternalStore = safeReact.useSyncExternalStore;
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
    const getDefaultSnapshot = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(()=>defaultMatches, [
        defaultMatches
    ]);
    const getServerSnapshot = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (noSsr && matchMedia) {
            return ()=>matchMedia(query).matches;
        }
        if (ssrMatchMedia !== null) {
            const { matches } = ssrMatchMedia(query);
            return ()=>matches;
        }
        return getDefaultSnapshot;
    }, [
        getDefaultSnapshot,
        query,
        ssrMatchMedia,
        noSsr,
        matchMedia
    ]);
    const [getSnapshot, subscribe] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (matchMedia === null) {
            return [
                getDefaultSnapshot,
                ()=>()=>{}
            ];
        }
        const mediaQueryList = matchMedia(query);
        return [
            ()=>mediaQueryList.matches,
            (notify)=>{
                mediaQueryList.addEventListener('change', notify);
                return ()=>{
                    mediaQueryList.removeEventListener('change', notify);
                };
            }
        ];
    }, [
        getDefaultSnapshot,
        matchMedia,
        query
    ]);
    const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return match;
}
function unstable_createUseMediaQuery(params = {}) {
    const { themeId } = params;
    return function useMediaQuery(queryInput, options = {}) {
        let theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeWithoutDefault$2f$useThemeWithoutDefault$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
        if (theme && themeId) {
            theme = theme[themeId] || theme;
        }
        // Wait for jsdom to support the match media feature.
        // All the browsers MUI support have this built-in.
        // This defensive check is here for simplicity.
        // Most of the time, the match media logic isn't central to people tests.
        const supportMatchMedia = "undefined" !== 'undefined' && typeof window.matchMedia !== 'undefined';
        const { defaultMatches = false, matchMedia = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null, ssrMatchMedia = null, noSsr = false } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$useThemeProps$2f$getThemeProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__getThemeProps$3e$__["getThemeProps"])({
            name: 'MuiUseMediaQuery',
            props: options,
            theme
        });
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof queryInput === 'function' && theme === null) {
                console.error([
                    'MUI: The `query` argument provided is invalid.',
                    'You are providing a function without a theme in the context.',
                    'One of the parent elements needs to use a ThemeProvider.'
                ].join('\n'));
            }
        }
        let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
        query = query.replace(/^@media( ?)/m, '');
        if (query.includes('print')) {
            console.warn([
                `MUI: You have provided a \`print\` query to the \`useMediaQuery\` hook.`,
                'Using the print media query to modify print styles can lead to unexpected results.',
                'Consider using the `displayPrint` field in the `sx` prop instead.',
                'More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print.'
            ].join('\n'));
        }
        const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== undefined ? useMediaQueryNew : useMediaQueryOld;
        const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
        if ("TURBOPACK compile-time truthy", 1) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useDebugValue({
                query,
                match
            });
        }
        return match;
    };
}
const useMediaQuery = unstable_createUseMediaQuery();
const __TURBOPACK__default__export__ = useMediaQuery;
}),
];

//# sourceMappingURL=61b46_ff8f6cae._.js.map