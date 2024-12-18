import React from "react";
import "./About.css";
import vertiGISLogo from "../../assets/logo-covers/vertigis-logo.png";
import giftbitLogo from "../../assets/logo-covers/giftbit-logo.png";
import Reveal from "../../framer/Reveal";

export default function About() {
    return (
        <div className="intro-container" id="about">
            <Reveal>
                <div className="intro-wrapper">
                    <div className="left-about">
                        <div className="about-title">About</div>
                    </div>
                    <div className="right-desc">
                        <div className="desc-content">
                            Vinayak <sub>(He/Him)</sub> is a 3<sup>rd</sup> year
                            Computer Science major<br></br> at the University of
                            Victoria. I'm in pursuit of internships, armed with
                            a robust skill set in software development. Fueled
                            by motivation and a thirst for learning, I'm ready
                            to dive into challenging projects. Let's engineer
                            some excellence!
                        </div>
                        <div className="job-description">
                            <div className="current">
                                <div className="job-description-head">
                                    Currently cooking as
                                </div>
                                <div className="current-job">
                                    <div className="company-logo">
                                        <img src={giftbitLogo} alt="logo"></img>
                                    </div>
                                    <div className="description">
                                        <p>Software Engineering Intern</p>
                                        <p>Giftbit</p>
                                    </div>
                                </div>
                            </div>
                            <div className="past">
                                <div className="job-description-head">
                                    Last internship as
                                </div>
                                <div className="current-job">
                                    <div className="company-logo">
                                        <img
                                            src={vertiGISLogo}
                                            alt="logo"
                                        ></img>
                                    </div>
                                    <div className="description">
                                        <p>Quality Assuarance Analyst Intern</p>
                                        <p>VertiGIS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    );
}
