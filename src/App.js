import Intro from "./components/intro/Intro";
import NavBar from "./components/nav-bar/NavBar";
import Projects from "./components/projects/Projects";
import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";

function App() {
    return (
        <div>
            <NavBar />
            <Intro />
            <Projects />
            {/* <div style={{ height: "100vh", backgroundColor: "#161616" }} /> */}
            <SlotMachineScroll />
        </div>
    );
}

export default App;
