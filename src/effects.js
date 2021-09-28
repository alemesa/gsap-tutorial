import { gsap } from "gsap";

export function registerGSAPeffects() {
    gsap.registerEffect({
        name: "fadeFromTheBottom",
        effect: (targets, config) => {
            return gsap.from(targets, {
                duration: config.duration,
                autoAlpha: 0,
                y: 100
            });
        },
        defaults: { duration: 2 }
    });
}
