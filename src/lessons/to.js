import React, { useEffect } from "react";
import { TweenMax } from "gsap/all";
import { Power3 } from "gsap/TweenMax";

function To() {
  useEffect(() => {
    TweenMax.to(".Box1", 1, { x: 200, delay: 0.5, ease: Power3.easeOut });
    TweenMax.to(".Box2", 0.2, { x: 200 });
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
