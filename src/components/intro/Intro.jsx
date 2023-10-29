import React from "react";
import "./Intro.css";
// import avatar from "../../assets/IMG_20230427_180120.jpg"

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-wrapper">
                <div className="left-about">
                    <div className="about-title">About</div>
                </div>
                <div className="right-desc">
                    <div className="desc-content">
                        Vinayak <sub>(He/Him)</sub> is a 3<sup>rd</sup> Computer Science major<br></br> at the
                        University of Victoria. I'm in pursuit of internships,
                        armed with a robust skill set in software development.
                        Fueled by motivation and a thirst for learning, <br></br>I'm
                        ready to dive into challenging projects. Let's engineer
                        some excellence!🚀
                    </div>
                </div>
            </div>
        </div>
    );
}
