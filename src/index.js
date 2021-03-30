import React from "react";
import ReactDOM from "react-dom";

import To from "./lessons/to";
import FromTo from "./lessons/fromTo";
import WithEase from "./lessons/withEase";
import Transform from "./lessons/transform";
import OnComplete from "./lessons/onComplete";
import Timeline from "./lessons/timeline";
import TimelineControl from "./lessons/timelineControl";
import Stagger from "./lessons/stagger";
import OnScroll from "./lessons/onScroll";

import "./styles.scss";

function App() {
    return (
        <div className="App">
            <h1>GSAP Live Intro</h1>
            <To />
            <FromTo />
            <WithEase />
            <Transform />
            <OnComplete />
            <Timeline />
            <TimelineControl />
            <Stagger />
            <div style={{ height: 400 }}></div>
            <OnScroll />
            <div style={{ height: 400 }}></div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
