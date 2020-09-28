import React, { useEffect } from "react";
import { gsap } from "gsap";

function To() {
    useEffect(() => {
        gsap.to(".Box1", {
            duration: 1,
            x: 200,
            delay: 0.5,
            ease: "power3.inOut"
        });
        gsap.to(".Box2", { duration: 0.2, x: 200 });
    }, []);

    return (
        <React.Fragment>
            <h2>To - animation</h2>
            <div className="Box Box1">1</div>
            <div className="Box Box2">2</div>
            <div className="Box Box3">3</div>
        </React.Fragment>
    );
}

export default To;
