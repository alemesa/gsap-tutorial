import React, { useEffect } from "react";
import { gsap } from "gsap";

function Transform() {
    useEffect(() => {
        gsap.to(".Box7", 1, {
            x: 200,
            xPercent: 50,
            delay: 0.5,
            rotation: 360,
            scale: 0.5
        });
    }, []);

    return (
        <React.Fragment>
            <h2>Transforms - animation</h2>
            <div className="Box Box7">7</div>
            <div className="table">
                <h3>Documentation Reference</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>GSAP</th>
                            <th>CSS</th>
                        </tr>
                        <tr>
                            <td>x: 100</td>
                            <td>transform: translateX(100px)</td>
                        </tr>
                        <tr>
                            <td>y: 100</td>
                            <td>transform: translateY(100px)</td>
                        </tr>
                        <tr>
                            <td>rotation: 360</td>
                            <td>transform: rotate(360deg)</td>
                        </tr>
                        <tr>
                            <td>rotationX: 360</td>
                            <td>transform: rotateX(360deg)</td>
                        </tr>
                        <tr>
                            <td>rotationY: 360</td>
                            <td>transform: rotateY(360deg)</td>
                        </tr>
                        <tr>
                            <td>skewX: 45</td>
                            <td>transform: skewX(45deg)</td>
                        </tr>
                        <tr>
                            <td>skewY: 45</td>
                            <td>transform: skewY(45deg)</td>
                        </tr>
                        <tr>
                            <td>scale: 2</td>
                            <td>transform: scale(2, 2)</td>
                        </tr>
                        <tr>
                            <td>scaleX: 2</td>
                            <td>transform: scaleX(2)</td>
                        </tr>
                        <tr>
                            <td>scaleY: 2</td>
                            <td>transform: scaleY(2)</td>
                        </tr>
                        <tr>
                            <td>xPercent: 50</td>
                            <td>transform: translateX(50%)</td>
                        </tr>
                        <tr>
                            <td>yPercent: 50</td>
                            <td>transform: translateY(50%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default Transform;
