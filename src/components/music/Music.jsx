import React from "react";
import "./Music.css";

export default function Music() {
    return (
        <div className="music-container">
            <div className="music-wrapper">
                <div className="card">
                    <iframe
                        style={{"border-radius":"12px"}}
                        src="https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n?utm_source=generator&theme=0"
                        width="20%"
                        height="152"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
