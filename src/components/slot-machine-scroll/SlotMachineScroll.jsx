import React, { useEffect, useRef, useState } from "react";
import "./SlotMachineScroll.css";

export default function SlotMachineScroll() {
    const [currentRotation, setCurrentRotation] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);
    const rotationStep = 3;
    const [renderSet, setRenderSet] = useState(0);

    const ref = useRef(null);
   
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY - renderSet;

            const newRotation =
                Math.floor(scrollPosition / rotationStep) * rotationStep;
            if (
                newRotation !== currentRotation &&
                newRotation > 0 &&
                newRotation < 100
            ) {
                setCurrentRotation(newRotation);
                setScrollAmount(scrollPosition);
                // setCurrentRotation(0);
            }
        };

        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // console.log(window.scrollY);
                    if (!renderSet) {
                        
                        let offset = window.scrollY;
                        console.log("yess");
                        setRenderSet(offset);
                    }
                    window.addEventListener("scroll", handleScroll);
                } else {
                    setCurrentRotation(0);
                    setScrollAmount(0);
                    window.removeEventListener("scroll", handleScroll);
                }
            },
            { threshold: 0.9 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [currentRotation, renderSet]);

    return (
        <div className="scroll-parent-container"  >
            <div
                className="contact"
                style={{ transform: `translateY(${scrollAmount}px)` }}
                ref={ref}
            >
                <div className="wrapper">
                    <div
                        className="picker"
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
