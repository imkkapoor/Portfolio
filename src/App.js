import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";
import "./base.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            watch={[]}
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <div
                    style={{ height: "100vh", backgroundColor: "beige" }}
                    data-scroll-section
                />
                <SlotMachineScroll data-scroll-section/>
            </div>
        </LocomotiveScrollProvider>
    );
}

export default App;
