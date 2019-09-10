import React, { useEffect, useRef } from "react";
import { TimelineMax } from "gsap/all";

function Timeline() {
  useEffect(() => {
    // // Default
    // new TimelineMax({})
    //   .to(".Box10", 1, { x: 150 })
    //   .to(".Box11", 1, { x: 150 })
    //   .to(".Box12", 1, { x: 150 });

    //   // With Time
    // new TimelineMax({})
    //   .to(".Box10", 1, { x: 150 }, 1)
    //   .to(".Box11", 1, { x: 150 }, 1.5)
    //   .to(".Box12", 1, { x: 150 }, 2);

    // With Position Parameter
    // new TimelineMax({})
    //   .to(".Box10", 1, { x: 150 }, "+=1")
    //   .to(".Box11", 1, { x: 150 }, "-=0.5")
    //   .to(".Box12", 1, { x: 150 }, "-=0.5");

    // With Options
    new TimelineMax({ repeat: 3, repeatDelay: 1, yoyo: true })
      .to(".Box10", 0.6, { x: 150 }, "+=0.6")
      .to(".Box11", 0.6, { x: 200 }, "-=0.6")
      .to(".Box12", 0.6, { x: 250 }, "-=0.2");
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
