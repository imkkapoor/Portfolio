import React, { useEffect, useRef, useState } from "react";
import "./SlotMachineScroll.css";

export default function SlotMachineScroll() {
    const [currentRotation, setCurrentRotation] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [renderSet, setRenderSet] = useState(0);

    const rotationStep = 0.1;

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
        var inUse = null;
            if(currentRotation>-10 && currentRotation<11.25){
                inUse = document.getElementById("facebook");
                inUse.style.color = "white";
               
            }else{
                inUse = document.getElementById("facebook");
                inUse.style.color = "black";
                
            }
            if(currentRotation>11.35 && currentRotation<33.75){
                inUse = document.getElementById("email");
                inUse.style.color = "white";
            }else{
                inUse = document.getElementById("email");
                inUse.style.color = "black";
            }
            if(currentRotation>33.75 && currentRotation<56.25){
                inUse = document.getElementById("instagram");
                inUse.style.color = "white";
            }else{
                inUse = document.getElementById("instagram");
                inUse.style.color = "black";
            }
            if(currentRotation>56.25 && currentRotation<78.75){
                inUse = document.getElementById("twitter");
                inUse.style.color = "white";
            }else{
                inUse = document.getElementById("twitter");
                inUse.style.color = "black";
            }
            if(currentRotation>78.75 && currentRotation<110){
                inUse = document.getElementById("github");
                inUse.style.color = "white";
            }else{
                inUse = document.getElementById("github");
                inUse.style.color = "black";
            }

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
                        <div className="slot-item" id = "facebook">Facebook</div>
                        <div className="slot-item" id = "email">Email</div>
                        <div className="slot-item" id = "instagram">Instagram</div>
                        <div className="slot-item" id = "twitter">Twitter</div>
                        <div className="slot-item" id = "github">Github</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
