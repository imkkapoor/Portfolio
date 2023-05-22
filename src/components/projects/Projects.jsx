import React from "react";
import "./Projects.css";
import pj1 from "../../assets/pj1.png";

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <div className="project">
                    <div className="content">
                        <div className="header">SOURCERY</div>
                        Developed a dynamic website using the MERN stack,
                        implementing a REST API with all essential CRUD
                        operations and user authentication through JWT for
                        improved security<br></br> • Built a modern, responsive,
                        and visually appealing user interface that allows
                        customers to browse products, add them to their cart,
                        and checkout with ease <br></br>• Crafted user
                        login/register pathways, integrated stripe payment
                        gateway, added redux persist for state management and
                        utilized CryptoJs encryption for increased security
                        Developed a Full-Stack Ecommerce website on MERN stack.
                    </div>
                    <img src={pj1} alt="mac" />
                </div>

                <div className="project">
                    <div className="content"></div>
                </div>
                <div className="project">
                    <div className="content"></div>
                </div>
                <div className="project">
                    <div className="content"></div>
                </div>
            </div>
        </div>
    );
}
