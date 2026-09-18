module.exports = [
"[project]/Downloads/track-b/frontend/src/components/animate/variants/path.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
                ...props?.transition
            }
        }
    });
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varFade",
    ()=>varFade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varFade = (direction, options)=>{
    const distance = options?.distance || 120;
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])()
            },
            exit: {
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])()
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/zoom.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varZoom",
    ()=>varZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varZoom = (direction, options)=>{
    const distance = options?.distance || 720;
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/flip.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varFlip",
    ()=>varFlip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varFlip = (direction, options)=>{
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ inX: {
            initial: {
                rotateX: -180,
                opacity: 0
            },
            animate: {
                rotateX: 0,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                rotateX: -180,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                rotateY: -180,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/slide.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varSlide",
    ()=>varSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varSlide = (direction, options)=>{
    const distance = options?.distance || 160;
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ inUp: {
            initial: {
                y: distance
            },
            animate: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inDown: {
            initial: {
                y: -distance
            },
            animate: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inLeft: {
            initial: {
                x: -distance
            },
            animate: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        inRight: {
            initial: {
                x: distance
            },
            animate: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        /**** Out ****/ outUp: {
            initial: {
                y: 0
            },
            animate: {
                y: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outDown: {
            initial: {
                y: 0
            },
            animate: {
                y: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                y: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outLeft: {
            initial: {
                x: 0
            },
            animate: {
                x: -distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        },
        outRight: {
            initial: {
                x: 0
            },
            animate: {
                x: distance,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                x: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/scale.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varScale",
    ()=>varScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varScale = (direction, options)=>{
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scaleX: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                scaleY: 0,
                opacity: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/bounce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varBounce",
    ()=>varBounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varBounce = (direction, options)=>{
    const distance = options?.distance || 720;
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(options?.transition)
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
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(options?.transition)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(options?.transition)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/rotate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "varRotate",
    ()=>varRotate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
;
const varRotate = (direction, options)=>{
    const deg = options?.deg || 360;
    const transitionIn = options?.transitionIn;
    const transitionOut = options?.transitionOut;
    const variants = {
        /**** In ****/ in: {
            initial: {
                opacity: 0,
                rotate: -deg
            },
            animate: {
                opacity: 1,
                rotate: 0,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionEnter"])(transitionIn)
            },
            exit: {
                opacity: 0,
                rotate: -deg,
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
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
                transition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitionExit"])(transitionOut)
            }
        }
    };
    return variants[direction];
};
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const varHover = (value = 1.09)=>({
        scale: value
    });
const varTap = (value = 0.9)=>({
        scale: value
    });
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
                ...props?.transitionIn
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                ...props?.transitionOut
            }
        }
    });
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/background.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
                ...options?.transition
            }
        }
    });
const varBgKenburns = (direction, options)=>{
    const transition = {
        duration: 5,
        ease: 'easeOut',
        ...options?.transition
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
    const gradient = (deg)=>`linear-gradient(${deg}deg, ${colors.join(', ')})`;
    const transition = {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
        ...options?.transition
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$path$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/path.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$zoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/zoom.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$flip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/flip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$slide$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/slide.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$scale$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/scale.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$bounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/bounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$rotate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/rotate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$transition$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/transition.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$background$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/background.ts [app-ssr] (ecmascript)");
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateText",
    ()=>AnimateText,
    "animateTextClasses",
    ()=>animateTextClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/fade.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const animateTextClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__root'),
    lines: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__lines'),
    line: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__line'),
    word: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__word'),
    char: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__char'),
    space: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('animate__text__space'),
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
function AnimateText({ sx, variants, className, textContent, once = true, amount = 1 / 3, component = 'p', repeatDelayMs = 100, ...other }) {
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const textArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.isArray(textContent) ? textContent : [
            textContent
        ], [
        textContent
    ]);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(textRef, {
        once,
        amount
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeout;
        const triggerAnimation = ()=>{
            if (repeatDelayMs) {
                timeout = setTimeout(async ()=>{
                    await animationControls.start('initial');
                    animationControls.start('animate');
                }, repeatDelayMs);
            } else {
                animationControls.start('animate');
            }
        };
        if (isInView) {
            triggerAnimation();
        } else {
            animationControls.start('initial');
        }
        return ()=>clearTimeout(timeout);
    }, [
        animationControls,
        isInView,
        repeatDelayMs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: component,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
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
           */ [`& .${animateTextClasses.srOnly}`]: srOnlyStyles
            },
            ...Array.isArray(sx) ? sx : [
                sx
            ]
        ],
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: animateTextClasses.srOnly,
                children: textArray.join(' ')
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTextContainer, {
                "aria-hidden": true,
                ref: textRef,
                initial: "initial",
                animate: animationControls,
                exit: "exit",
                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varContainer"])(),
                className: animateTextClasses.lines,
                children: textArray?.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextLine, {
                        "data-index": lineIndex,
                        className: animateTextClasses.line,
                        sx: {
                            display: 'block'
                        },
                        children: line.split(' ').map((word, wordIndex)=>{
                            const lastWordInline = line.split(' ')[line.split(' ').length - 1];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextWord, {
                                "data-index": wordIndex,
                                className: animateTextClasses.word,
                                sx: {
                                    display: 'inline-block'
                                },
                                children: [
                                    word.split('').map((char, charIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedTextChar, {
                                            variants: variants ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$fade$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varFade"])('in'),
                                            "data-index": charIndex,
                                            className: animateTextClasses.char,
                                            sx: {
                                                display: 'inline-block'
                                            },
                                            children: char
                                        }, `${char}-${charIndex}`, false, {
                                            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this)),
                                    lastWordInline !== word && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextWord, {
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
                            }, `${word}-${wordIndex}`, true, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this);
                        })
                    }, `${line}-${lineIndex}`, false, {
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
// ----------------------------------------------------------------------
const TextLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')``;
const TextWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span')``;
const AnimatedTextContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span)``;
const AnimatedTextChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span)``;
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
"[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logoClasses",
    ()=>logoClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-ssr] (ecmascript)");
;
const logoClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('logo__root')
};
}),
"[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Link/Link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/routes/components/router-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Logo({ sx, disabled, className, href = '/', isSingle = true, ...other }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const uniqueId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
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
    */ const singleLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-1`,
                        x1: "152",
                        y1: "167.79",
                        x2: "65.523",
                        y2: "259.624",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_DARKER
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-2`,
                        x1: "86",
                        y1: "128",
                        x2: "86",
                        y2: "384",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-3`,
                        x1: "402",
                        y1: "288",
                        x2: "402",
                        y2: "384",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-1`})`,
                d: "M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-2`})`,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-3`})`,
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
    const fullLogo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 360 128",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-1`,
                        x1: "38",
                        y1: "41.9469",
                        x2: "16.381",
                        y2: "64.906",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_DARKER
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-2`,
                        x1: "21.5",
                        y1: "32",
                        x2: "21.5",
                        y2: "96",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: `${uniqueId}-3`,
                        x1: "100.5",
                        y1: "72",
                        x2: "100.5",
                        y2: "96",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                stopColor: PRIMARY_LIGHT
                            }, void 0, false, {
                                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-1`})`,
                d: "M21.588 61.59C34.378 53.546 40.458 61.254 45.792 71.393C41.379 79.429 38.459 84.333 37.032 86.105C34.343 89.447 31.409 91.978 27.8 93.438C20.214 97.004 10.783 97.17 3.5 92.762L21.588 61.59Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-2`})`,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M111.078 57.431C99.51 37.194 87.552 18.124 73.817 46.096C71.937 49.69 70.568 56.68 67.5 56.68V56.644C64.432 56.644 63.063 49.656 61.184 46.06C47.448 18.09 35.49 37.157 23.922 57.396C23.052 58.922 22.216 60.379 21.5 61.645C48.01 44.863 45.778 95.562 67.5 95.965V96C89.223 95.597 86.99 44.899 113.5 61.68C112.785 60.414 111.949 58.957 111.078 57.431Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: `url(#${`${uniqueId}-3`})`,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M112.5 96C119.127 96 124.5 90.627 124.5 84C124.5 77.373 119.127 72 112.5 72C105.873 72 100.5 77.373 100.5 84C100.5 90.627 105.873 96 112.5 96Z"
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRoot, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$routes$2f$components$2f$router$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterLink"],
        href: href,
        "aria-label": "Logo",
        underline: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logoClasses"].root,
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
// ----------------------------------------------------------------------
const LogoRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>({
        flexShrink: 0,
        color: 'transparent',
        display: 'inline-flex',
        verticalAlign: 'middle'
    }));
}),
"[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/classes.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateLogoRotate",
    ()=>AnimateLogoRotate,
    "AnimateLogoZoom",
    ()=>AnimateLogoZoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/logo/logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AnimateLogoZoom({ logo, slotProps, sx, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomRoot, {
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span, {
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
                children: logo ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                    disabled: true,
                    ...slotProps?.logo,
                    sx: [
                        {
                            width: 64,
                            height: 64
                        },
                        ...Array.isArray(slotProps?.logo?.sx) ? slotProps.logo.sx : [
                            slotProps?.logo?.sx
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomPrimaryOutline, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoZoomSecondaryOutline, {
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
const LogoZoomRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        width: 120,
        height: 120,
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center'
    }));
const LogoZoomPrimaryOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span)(({ theme })=>({
        position: 'absolute',
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
        border: `solid 3px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.primary.darkChannel, 0.24)}`
    }));
const LogoZoomSecondaryOutline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span)(({ theme })=>({
        width: '100%',
        height: '100%',
        position: 'absolute',
        border: `solid 8px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varAlpha"])(theme.vars.palette.primary.darkChannel, 0.24)}`
    }));
function AnimateLogoRotate({ logo, sx, slotProps, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRotateRoot, {
        sx: sx,
        ...other,
        children: [
            logo ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$logo$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                ...slotProps?.logo,
                sx: [
                    {
                        zIndex: 9,
                        width: 40,
                        height: 40
                    },
                    ...Array.isArray(slotProps?.logo?.sx) ? slotProps.logo.sx : [
                        slotProps?.logo?.sx
                    ]
                ]
            }, void 0, false, {
                fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoRotateBackground, {
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
const LogoRotateRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(()=>({
        width: 96,
        height: 96,
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center'
    }));
const LogoRotateBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span)(({ theme })=>({
        width: '100%',
        height: '100%',
        opacity: 0.16,
        borderRadius: '50%',
        position: 'absolute',
        backgroundImage: `linear-gradient(135deg, transparent 50%, ${theme.vars.palette.primary.main} 100%)`,
        transition: theme.transitions.create([
            'opacity'
        ], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        })
    }));
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateBorder",
    ()=>AnimateBorder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// ----------------------------------------------------------------------
const animateBorderClasses = {
    root: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__root'),
    primaryBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__primary'),
    secondaryBorder: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__secondary'),
    svgWrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__svg__wrapper'),
    movingShape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('border__animation__moving__shape')
};
function AnimateBorder({ sx, children, duration, slotProps, className, ...other }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primaryBorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const secondaryBorderStyles = useComputedElementStyles(theme, primaryBorderRef);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleVisibility = ()=>{
            if (rootRef.current) {
                const displayStyle = getComputedStyle(rootRef.current).display;
                setIsHidden(displayStyle === 'none');
            }
        };
        handleVisibility();
        window.addEventListener('resize', handleVisibility);
        return ()=>{
            window.removeEventListener('resize', handleVisibility);
        };
    }, []);
    const outlineColor = typeof slotProps?.outlineColor === 'function' ? slotProps?.outlineColor(theme) : slotProps?.outlineColor;
    const borderProps = {
        duration,
        isHidden,
        rx: slotProps?.svgSettings?.rx,
        ry: slotProps?.svgSettings?.ry
    };
    const renderPrimaryBorder = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingBorder, {
            ...borderProps,
            ref: primaryBorderRef,
            size: slotProps?.primaryBorder?.size,
            sx: [
                {
                    ...theme.mixins.borderGradient({
                        padding: slotProps?.primaryBorder?.width
                    })
                },
                ...Array.isArray(slotProps?.primaryBorder?.sx) ? slotProps.primaryBorder.sx : [
                    slotProps?.primaryBorder?.sx
                ]
            ]
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
            lineNumber: 97,
            columnNumber: 5
        }, this);
    const renderSecondaryBorder = ()=>slotProps?.secondaryBorder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MovingBorder, {
            ...borderProps,
            size: slotProps?.secondaryBorder?.size ?? slotProps?.primaryBorder?.size,
            sx: [
                {
                    ...theme.mixins.borderGradient({
                        padding: slotProps?.secondaryBorder?.width ?? secondaryBorderStyles.padding
                    }),
                    borderRadius: secondaryBorderStyles.borderRadius,
                    transform: 'scale(-1, -1)'
                },
                ...Array.isArray(slotProps?.secondaryBorder?.sx) ? slotProps.secondaryBorder.sx : [
                    slotProps?.secondaryBorder?.sx
                ]
            ]
        }, void 0, false, {
            fileName: "[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        dir: "ltr",
        ref: rootRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
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
                    padding: slotProps?.primaryBorder?.width
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
function MovingBorder({ sx, size, isHidden, rx = '30%', ry = '30%', duration = 8, ...other }) {
    const svgRectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const updateAnimationFrame = (time)=>{
        if (!svgRectRef.current) return;
        try {
            const pathLength = svgRectRef.current.getTotalLength();
            const pixelsPerMs = pathLength / (duration * 1000);
            progress.set(time * pixelsPerMs % pathLength);
        } catch  {
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
        } catch  {
            return {
                x: 0,
                y: 0
            };
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationFrame"])((time)=>!isHidden ? updateAnimationFrame(time) : undefined);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, (val)=>calculateTransform(val).x);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, (val)=>calculateTransform(val).y);
    const transform = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionTemplate"]`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                width: "100%",
                height: "100%",
                className: animateBorderClasses.svgWrapper,
                style: {
                    position: 'absolute'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span,
                style: {
                    transform
                },
                className: animateBorderClasses.movingShape,
                sx: {
                    width: size,
                    height: size,
                    filter: 'blur(8px)',
                    position: 'absolute',
                    background: `radial-gradient(currentColor 40%, transparent 80%)`
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
// ----------------------------------------------------------------------
function useComputedElementStyles(theme, ref) {
    const [computedStyles, setComputedStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isRtl = theme.direction === 'rtl';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        ref,
        isRtl
    ]);
    return {
        padding: `${computedStyles?.paddingTop} ${computedStyles?.paddingRight} ${computedStyles?.paddingBottom} ${computedStyles?.paddingLeft}`,
        borderRadius: `${computedStyles?.borderTopLeftRadius} ${computedStyles?.borderTopRightRadius} ${computedStyles?.borderBottomRightRadius} ${computedStyles?.borderBottomLeftRadius}`
    };
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionViewport",
    ()=>MotionViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function MotionViewport({ children, viewport, disableAnimate = true, ...other }) {
    const smDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((theme)=>theme.breakpoints.down('sm'));
    const disabled = smDown && disableAnimate;
    const baseProps = disabled ? {} : {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div,
        initial: 'initial',
        whileInView: 'animate',
        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varContainer"])(),
        viewport: {
            once: true,
            amount: 0.3,
            ...viewport
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ...baseProps,
        ...other,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress,
    "scrollProgressClasses",
    ()=>scrollProgressClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/utils/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/theme/create-classes.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const scrollProgressClasses = {
    circular: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('scroll__progress__circular'),
    linear: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$theme$2f$create$2d$classes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClasses"])('scroll__progress__linear')
};
function ScrollProgress({ sx, size, portal, variant, slotProps, className, progress, thickness = 3.6, whenScroll = 'y', color = 'primary', ...other }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const isRtl = theme.direction === 'rtl';
    const transformProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
        0,
        -1
    ], [
        0,
        1
    ]);
    const progressValue = isRtl && whenScroll === 'x' ? transformProgress : progress;
    const progressSize = variant === 'circular' ? size ?? 64 : size ?? 3;
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(progressValue, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const renderCircular = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularRoot, {
            viewBox: `0 0 ${progressSize} ${progressSize}`,
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].circle, {
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
    const renderLinear = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinearRoot, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])([
                scrollProgressClasses.linear,
                className
            ]),
            sx: [
                {
                    height: progressSize,
                    ...color !== 'inherit' && {
                        background: `linear-gradient(135deg, ${theme.vars.palette[color].light}, ${theme.vars.palette[color].main})`
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
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...slotProps?.wrapper,
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
// ----------------------------------------------------------------------
const CircularRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].svg)(({ theme })=>({
        transform: 'rotate(-90deg)',
        color: theme.vars.palette.text.primary,
        circle: {
            fill: 'none',
            strokeDashoffset: 0,
            stroke: 'currentColor'
        }
    }));
const LinearRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div)(({ theme })=>({
        top: 0,
        left: 0,
        right: 0,
        transformOrigin: '0%',
        backgroundColor: theme.vars.palette.text.primary
    }));
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/use-scroll-progress.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollProgress",
    ()=>useScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function useScrollProgress(target = 'document') {
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const options = {
        container: elementRef
    };
    const { scrollYProgress, scrollXProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])(target === 'container' ? options : undefined);
    const memoizedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            elementRef,
            scrollXProgress,
            scrollYProgress
        }), [
        elementRef,
        scrollXProgress,
        scrollYProgress
    ]);
    return memoizedValue;
}
}),
"[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$scroll$2d$progress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/scroll-progress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$use$2d$scroll$2d$progress$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/use-scroll-progress.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimateCountUp",
    ()=>AnimateCountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AnimateCountUp({ to, sx, from = 0, toFixed = 0, once = true, duration = 2, amount = 0.5, unit: unitProp, component = 'p', ...other }) {
    const countRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shortNumber = shortenNumber(to);
    const startCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(from);
    const endCount = shortNumber ? shortNumber.value : to;
    const unit = unitProp ?? shortNumber?.unit;
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(countRef, {
        once,
        amount
    });
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(startCount, (latest)=>latest.toFixed(isFloat(latest) ? toFixed : 0));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (inView) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(startCount, endCount, {
                duration
            });
        }
    }, [
        duration,
        endCount,
        inView,
        startCount
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].span, {
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionContainer",
    ()=>MotionContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/framer-motion/dist/es/render/components/m/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/container.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MotionContainer({ sx, animate, children, action = false, ...other }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$m$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"].div,
        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$container$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["varContainer"])(),
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackToTopButton",
    ()=>BackToTopButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/minimal-shared/dist/hooks/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Fab/Fab.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/iconify/iconify.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function BackToTopButton({ sx, isDebounce, renderButton, scrollThreshold = '90%', ...other }) {
    const { onBackToTop, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$minimal$2d$shared$2f$dist$2f$hooks$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBackToTop"])(scrollThreshold, isDebounce);
    if (renderButton) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(renderButton(isVisible), {
            onClick: onBackToTop
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$iconify$2f$iconify$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Iconify"], {
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
}),
"[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$variants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/variants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$border$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-border.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$viewport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/motion-viewport.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$scroll$2d$progress$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/scroll-progress/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$count$2d$up$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-count-up.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$motion$2d$container$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/motion-container.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$back$2d$to$2d$top$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/back-to-top-button.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/Downloads/track-b/frontend/src/components/loading-screen/splash-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashScreen",
    ()=>SplashScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/src/components/animate/animate-logo.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function SplashScreen({ portal = true, slots, slotProps, sx, ...other }) {
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingWrapper, {
            ...slotProps?.wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContent, {
                sx: sx,
                ...other,
                children: slots?.logo ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$src$2f$components$2f$animate$2f$animate$2d$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimateLogoZoom"], {
                    ...slotProps?.logo
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
// ----------------------------------------------------------------------
const LoadingWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
});
const LoadingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
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
    }));
}),
"[project]/Downloads/track-b/frontend/src/components/loading-screen/loading-screen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingScreen",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/Portal/Portal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/styles/styled.js [app-ssr] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/track-b/frontend/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function LoadingScreen({ portal, slots, slotsProps, sx, ...other }) {
    const PortalWrapper = portal ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Portal$2f$Portal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortalWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingContent, {
            sx: sx,
            ...other,
            children: slots?.progress ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                color: "inherit",
                sx: [
                    {
                        width: 1,
                        maxWidth: 360
                    },
                    ...Array.isArray(slotsProps?.progress?.sx) ? slotsProps.progress.sx : [
                        slotsProps?.progress?.sx
                    ]
                ],
                ...slotsProps?.progress
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
// ----------------------------------------------------------------------
const LoadingContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$track$2d$b$2f$frontend$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    }));
}),
];

//# sourceMappingURL=Downloads_track-b_frontend_src_5cb709ae._.js.map