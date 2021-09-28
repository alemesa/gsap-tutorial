import React, { useEffect } from "react";
import { gsap } from "gsap";

function ReuseEffects() {
    useEffect(() => {
        gsap.effects.fadeFromTheBottom(".Box20");
        gsap.effects.fadeFromTheBottom(".Box21", { duration: 1, delay: 1 });
        gsap.effects.fadeFromTheBottom(".Box22", { duration: 4, delay: 2 });
    }, []);

    return (
        <React.Fragment>
            <h2>ReuseEffects - animation</h2>
            <div className="Box Box20">20</div>
            <div className="Box Box21">21</div>
            <div className="Box Box22">22</div>
        </React.Fragment>
    );
}

export default ReuseEffects;
