import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bezier from "bezier-easing";

function WithEase() {
    const Box6 = useRef(null);

    useEffect(() => {
        const sampleBezier = new Bezier(0, 0, 1, 0.5);

        gsap.fromTo(
            Box6.current,
            { duration: 1, x: 10 },
            { x: 300, delay: 1, ease: sampleBezier }
        );
    }, []);

    return (
        <React.Fragment>
            <div className="Parent">
                <h2>with Easing</h2>
                <div className="Box" ref={Box6}>
                    6
                </div>
            </div>
        </React.Fragment>
    );
}

export default WithEase;
