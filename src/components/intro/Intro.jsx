import React from "react";
import "./Intro.css";
// import avatar from "../../assets/IMG_20230427_180120.jpg"

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-wrapper">
            {/* <img src={avatar}/> */}

                <div className="content">
                    {/* <h1>Hi,</h1>
                    <h1>I am Vinayak</h1>
                    <h3>
                        I am web developer. enjoy making websites. exploring new
                        libraries, UI/UX designs and animation
                    </h3> */}
                    <div className="name">Hello! I'm Vinayak</div><br></br>
                    A Digital Craftsman
                    {/* Kapoor<br></br> */}
                </div>
            </div>
        </div>
    );
}
