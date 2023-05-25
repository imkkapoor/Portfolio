import React from "react";
import "./Projects.css";
import pj1 from "../../assets/pj1-re.png";
import cmd1 from "../../assets/cmd2-2.png";
import cmdResult from "../../assets/cmd-result-2.png";
import graph from "../../assets/graph.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <div className="project">
                    <div className="project-index">01</div>
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="header">Sourcery</div>
                            <p>
                                Developed a dynamic MERN stack website with a
                                REST API, user authentication, CRUD operations,
                                and a responsive UI for ecommerce functionality
                                including product browsing, cart management, and
                                secure checkout with Stripe integration.
                            </p>
                            <ul className="languages">
                                <li>React</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                            </ul>
                            <div className="links">
                                <a href="https://github.com/imkkapoor/Sourcery">
                                    <GitHubIcon />
                                </a>
                                <a href="https://sourcery604.netlify.app/">
                                    <LinkIcon />
                                </a>
                            </div>
                        </div>
                        <img src={pj1} alt="mac" />
                    </div>
                </div>

                <div className="project">
                    <div className="project-index">02</div>
                    <div className="content-wrapper">
                        <img src={cmd1} alt="cmd-in" />

                        <div className="content">
                            <div className="header">Concordance</div>
                            <p>
                                Concordance permits you to read
                                or see a word that has been indexed in its
                                original context, as this can often aid the
                                reader to decide whether or not the reference is
                                indeed what they want or need.
                            </p>
                            <ul className="languages">
                                <li>C</li>
                                <li>Python</li>
                            </ul>
                            <div className="links">
                                <a href="https://github.com/imkkapoor/Concordance">
                                    <GitHubIcon />
                                </a>
                            </div>
                        </div>
                        <img src={cmdResult} alt="cmd-result" />
                    </div>
                </div>
                <div className="project">
                    <div className="project-index">03</div>
                    <div className="content-wrapper">
                        <div className="content">
                            <div className="header">Covid Management Sys</div>
                            <p>
                                Covid management system helps us to
                                store,update,view and represent data of covid
                                patients and the medical staff involved with the
                                help of a python code linked with MySQL.
                            </p>
                            <ul className="languages">
                                <li>Python</li>
                                <li>MySQL</li>
                                <li>Pandas</li>
                                <li>Matplotlib</li>
                            </ul>
                            <div className="links">
                                {" "}
                                <a href="https://github.com/imkkapoor/Covid-Management-System">
                                    <GitHubIcon />
                                </a>
                            </div>
                        </div>
                        <img
                            src={graph}
                            alt="graph"
                            style={{ borderRadius: "15px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
