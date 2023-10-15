import React from "react";

import "./ProjectsCard.css";

import pj1 from "../../assets/sourcery highres.png";
import cmdResult from "../../assets/cmd-result-2.png";
import graph from "../../assets/graph.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EastIcon from '@mui/icons-material/East';

export default function ProjectsCard() {
    return (
        <div className="project-card-container">
            <div className="header">Projects</div>
            <div className="project-card-wrapper">
                <div className="primary">
                    <div className="project">
                        <div className="image-wrapper">
                            <img src={pj1} alt="sourcery" />
                        </div>
                        <div className="content">
                            <h2>Sourcery</h2>
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
                                <li>Redux</li>
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
                    </div>
                </div>
                <div className="secondary">
                    <div className="project">
                        <div className="content">
                            <h2>Concordance</h2>
                            <p>
                                Concordance permits you to read or see a word
                                that has been indexed in its original context,
                                as this can often aid the reader to decide
                                whether or not the reference is indeed what they
                                want or need.
                            </p>
                            <ul className="languages">
                                <li>C</li>
                                <li>Python</li>
                            </ul>
                            <div className="links">
                                <a href="https://github.com/imkkapoor/Concordance">
                                    <GitHubIcon />
                                </a>
                                <a href="https://github.com/imkkapoor/Concordance">
                                    View Repository <EastIcon />
                                </a>
                            </div>
                        </div>
                        <div className="image-wrapper">
                            <img src={cmdResult} alt="concord" />
                        </div>
                    </div>

                    <div className="project">
                        <div className="content">
                            <h2>CMS</h2>

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
                        <div className="image-wrapper">
                            <img src={graph} alt="graph" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
