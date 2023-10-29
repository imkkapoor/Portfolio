import About from "./components/about/About";
// import Projects from "./components/projects/Projects";
import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";
import NavBar from "./components/nav-bar/NavBar"
// import ProjectsCard from "./components/projects/ProjectsCard";
import ProjectsCardList from './components/projects/ProjectsCardList';
import Hero from './components/hero/Hero';

function App() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <About />
            {/* <Projects /> */}
            {/* <ProjectsCard/> */}
            <ProjectsCardList/>
            {/* <div style={{ height: "100vh", backgroundColor: "#161616" }} /> */}
            <SlotMachineScroll />
        </div>
    );
}

export default App;
