import { gsap } from "gsap";

export function registerGSAPeffects() {
    gsap.registerEffect({
        name: "fadeFromTheBottom",
        effect: (targets, config) => {
            return gsap.from(targets, {
                duration: config.duration,
                autoAlpha: 0,
                y: 100,
                delay: config.delay
            });
        },
        defaults: { duration: 2, delay: 0 },
        extendTimeline: true,
    });
}
