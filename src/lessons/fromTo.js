import React, { useEffect } from "react";
import { gsap } from "gsap";

function FromTo() {
    useEffect(() => {
        gsap.set(".Box4", { backgroundColor: "#212121" });
        gsap.fromTo(
            ".Box4",
            { duration: 1, x: 50 },
            {
                x: 100,
                delay: 2,
                immediateRender: true,
                backgroundColor: "#1565C0"
            }
        );
        gsap.fromTo(
            ".Box5",
            { duration: 1, x: 50 },
            { x: 100, delay: 2, immediateRender: false }
        );
    }, []);

    return (
        <React.Fragment>
            <h2>FromTo - animation</h2>
            <div className="Box Box4">4</div>
            <div className="Box Box5">5</div>
        </React.Fragment>
    );
}

export default FromTo;
