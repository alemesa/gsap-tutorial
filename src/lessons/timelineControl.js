import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function TimelineControl() {
    const animationTimeline = useRef(null);

    useEffect(() => {
        animationTimeline.current = gsap
            .timeline({ paused: true })
            .to(".Box13", { duration: 0.6, x: 150 }, 0)
            .to(".Box14", { duration: 0.6, x: 200 }, "-=0.6")
            .to(".Box15", { duration: 0.6, x: 250 }, "-=0.2")
            .to(".Box16", { duration: 0.6, x: 250 }, "+=0.4");
    }, []);

    function play() {
        animationTimeline.current.play();
    }

    function reverse() {
        animationTimeline.current.timeScale(2).reverse();
    }

    function pause() {
        animationTimeline.current.pause();
    }

    function resume() {
        animationTimeline.current.resume();
    }

    function seek() {
        animationTimeline.current.seek(1);
    }

    function progress() {
        animationTimeline.current.progress(0, 1);
    }

    function timeScale() {
        animationTimeline.current.timeScale(3).play();
    }

    function resetTimeScale() {
        animationTimeline.current.timeScale(1).play();
    }

    return (
        <React.Fragment>
            <h2>Timeline Control - animation</h2>
            <div className="Box Box13">13</div>
            <div className="Box Box14">14</div>
            <div className="Box Box15">15</div>
            <div className="Box Box16">16</div>
            <button onClick={() => play()}>Play</button>
            <button onClick={() => reverse()}>Reverse</button>
            <button onClick={() => pause()}>Pause</button>
            <button onClick={() => resume()}>Resume</button>
            <button onClick={() => seek()}>Seek to second 1</button>
            <button onClick={() => progress()}>Progress to second 1</button>
            <button onClick={() => timeScale()}>Timescale triple</button>
            <button onClick={() => resetTimeScale()}>Reset Timescale</button>
        </React.Fragment>
    );
}

export default TimelineControl;
