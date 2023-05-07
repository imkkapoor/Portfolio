import React, { useEffect, useState } from "react";
import "./SlotMachineScroll.css";

export default function SlotMachineScroll() {
    const [currentRotation, setCurrentRotation] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);
    const rotationStep = 1;

    useEffect(() => {
        const handleScroll = () => {
            if (currentRotation < 91) {
                setScrollAmount(Math.floor(window.scrollY));
            }
            const scrollPosition = window.scrollY;
            const newRotation =
                Math.floor(scrollPosition / rotationStep) * rotationStep;
            if (newRotation !== currentRotation && newRotation < 100) {
                setCurrentRotation(newRotation);
                // setCurrentRotation(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentRotation]);

    return (
        <div>
            <div
                className="contact"
                style={{ transform: `translateY(${scrollAmount}px)` }}
            >
                <div className="wrapper">
                    <div
                        className="container"
                        style={{
                            transform: `rotateX(${currentRotation}deg)`,
                        }}
                    >
                        <div className="slot-item">Facebook</div>
                        <div className="slot-item">Email</div>
                        <div className="slot-item">Instagram</div>
                        <div className="slot-item">Twitter</div>
                        <div className="slot-item">Github</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
