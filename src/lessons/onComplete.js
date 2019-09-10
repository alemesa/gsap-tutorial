import React, { useEffect } from "react";
import { TweenMax } from "gsap/all";

function OnComplete() {
  useEffect(() => {
    TweenMax.to(".Box8", 1, {
      x: 200,
      xPercent: 50,
      delay: 0.5,
      rotation: 360,
      scale: 0.5,
      onStart: console.log("1st Animation is Starting"),
      onComplete: onCompleteExample
    });
  }, []);

  function onCompleteExample() {
    console.log("1st Animation is Done");
    TweenMax.fromTo(
      ".Box9",
      1,
      { x: 0, scale: 0.3 },
      {
        x: 400,
        xPercent: 50,
        delay: 0.5,
        rotation: 360,
        scale: 1,
        onStart: console.log("2nd Animation is Starting"),
        onComplete: console.log("2nd Animation is Done")
      }
    );
  }

  return (
    <React.Fragment>
      <h2>On Complete - animation</h2>
      <div className="Box Box8">8</div>
      <div className="Box Box9">9</div>
    </React.Fragment>
  );
}

export default OnComplete;
