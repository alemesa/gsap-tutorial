import React, { useEffect } from "react";
import { TweenMax } from "gsap/all";

function Stagger() {
  useEffect(() => {
    TweenMax.staggerFromTo(".Stagger", 1, { autoAlpha: 0 }, { x: 200, y: 100, delay: 0.5, autoAlpha: 1 }, 0.05);
  }, []);

  return (
    <React.Fragment>
      <h2>Stagger - animation</h2>
      <div className="Box Stagger Box17">17</div>
      <div className="Box Stagger Box18">18</div>
      <div className="Box Stagger Box19">19</div>
    </React.Fragment>
  );
}

export default Stagger;
