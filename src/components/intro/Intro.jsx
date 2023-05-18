import React from "react";
import "./Intro.css";
import mac from "../../assets/m2_laptop_hw__c84jsepabw2u_large_2x.jpg";
import screen from "../../assets/screen_processing__f36dk3ge7wey_large_2x.jpg";


export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-wrapper">
                <img src={mac} alt="mac" />
                <img src = {screen}/>

                <div className="content" >
                    {/* <h1>Hi,</h1>
                    <h1>I am Vinayak</h1>
                    <h3>
                        I am web developer. enjoy making websites. exploring new
                        libraries, UI/UX designs and animation
                    </h3> */}
                </div>
            </div>
        </div>
    );
}
