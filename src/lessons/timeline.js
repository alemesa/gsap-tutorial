import React, { useEffect } from "react";
import { gsap } from "gsap";

function Timeline() {
    useEffect(() => {
        // // Default
        // gsap.timeline({})
        //   .to(".Box10", { duration: 1, x: 150 })
        //   .to(".Box11", { duration: 1, x: 150 })
        //   .to(".Box12", { duration: 1, x: 150 });

        //   // With Time
        // gsap.timeline({})
        //   .to(".Box10", { duration: 1, x: 150 }, 1)
        //   .to(".Box11", { duration: 1, x: 150 }, 1.5)
        //   .to(".Box12", { duration: 1, x: 150 }, 2);

        // With Position Parameter
        // gsap.timeline({})
        //   .to(".Box10", { duration: 1, x: 150 }, "+=1")
        //   .to(".Box11", { duration: 1, x: 150 }, "-=0.5")
        //   .to(".Box12", { duration: 1, x: 150 }, "-=0.5");

        // With Relative Parameter
        // gsap.timeline({})
        //     .to(".Box10", { duration: 1, x: 150 }, "0")
        //     //insert tween at the end of the previous tween - most recently added animation START
        //     .to(".Box11", { duration: 1, x: 150 }, ">")
        //     //insert tween at the start of the previous tween - most recently added animation END
        //     .to(".Box12", { duration: 1, x: 150 }, "<");

        // With Options
        gsap.timeline({ repeat: 3, repeatDelay: 1, yoyo: true })
            .to(".Box10", { duration: 0.6, x: 150 }, "+=0.6")
            .to(".Box11", { duration: 0.6, x: 200 }, "-=0.6")
            .to(".Box12", { duration: 0.6, x: 250 }, "-=0.2");
    }, []);

    return (
        <React.Fragment>
            <h2>Timeline Examples - animation</h2>
            <div className="Box Box10">10</div>
            <div className="Box Box11">11</div>
            <div className="Box Box12">12</div>
        </React.Fragment>
    );
}

export default Timeline;
