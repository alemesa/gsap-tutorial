import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OnScroll() {
    useEffect(() => {
        gsap.fromTo(
            ".OnScroll",
            { duration: 1, autoAlpha: 0 },
            {
                x: 200,
                y: 50,
                delay: 0.5,
                autoAlpha: 1,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".Wrapper",
                    start: "top 60%",
                    end: "bottom 30%",
                    scrub: true,
                    markers: true
                }
            }
        );
    }, []);

    return (
        <React.Fragment>
            <div
                className="Wrapper"
                style={{ border: "1px solid coral", margin: 50, padding: 20 }}
            >
                <h2>ScrollTrigger - animation</h2>
                <div className="Box OnScroll Box17">17</div>
                <div className="Box OnScroll Box18">18</div>
                <div className="Box OnScroll Box19">19</div>
            </div>
        </React.Fragment>
    );
}

export default OnScroll;
