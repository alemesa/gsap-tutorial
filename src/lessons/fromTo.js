import React, { useEffect } from "react";
import { TweenMax } from "gsap/all";

function FromTo() {
  useEffect(() => {
    TweenMax.set(".Box4", { backgroundColor: "#212121" });
    TweenMax.fromTo(".Box4", 1, { x: 50 }, { x: 100, delay: 2, immediateRender: true, backgroundColor: "#1565C0" });
    TweenMax.fromTo(".Box5", 1, { x: 50 }, { x: 100, delay: 2, immediateRender: false });
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
