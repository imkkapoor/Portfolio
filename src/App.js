import Intro from "./components/intro/Intro";
// import Projects from "./components/projects/Projects";
import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";
// import NavBar from "./components/nav-bar/NavBar"
import ProjectsCard from "./components/projects/ProjectsCard";
import ProjectsCardList from './components/projects/ProjectsCardList';

function App() {
    return (
        <div>
            {/* <NavBar/> */}
            <Intro />
            {/* <Projects /> */}
            {/* <ProjectsCard/> */}
            <ProjectsCardList/>
            {/* <div style={{ height: "100vh", backgroundColor: "#161616" }} /> */}
            <SlotMachineScroll />
        </div>
    );
}

export default App;
