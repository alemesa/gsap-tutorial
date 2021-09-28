import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bezier from "bezier-easing";

function WithEase() {
    const Box61 = useRef(null);
    const Box62 = useRef(null);

    useEffect(() => {
        const sampleBezier = new Bezier(0.17, 0.0, 0.28, 1.0);
        const sampleBezier2 = gsap.parseEase("0.17, 0.0, 0.28, 1.0");

        gsap.fromTo(
            Box61.current,
            { duration: 1, x: 10 },
            { x: 300, delay: 1, ease: sampleBezier }
        );

        gsap.fromTo(
            Box62.current,
            { duration: 1, x: 10 },
            { x: 300, delay: 1, ease: sampleBezier2 }
        );
    }, []);

    return (
        <React.Fragment>
            <div className="Parent">
                <h2>with Easing</h2>
                <div className="Box" ref={Box61}>
                    6.1
                </div>
                <div className="Box" ref={Box62}>
                    6.2
                </div>
            </div>
        </React.Fragment>
    );
}

export default WithEase;
