import About from "./components/about/About";
import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";
import NavBar from "./components/nav-bar/NavBar";
import ProjectsCardList from "./components/projects/ProjectsCardList";
import Hero from "./components/hero/Hero";
import Music from "./components/music/Music";

function App() {
    return (
        <div>
            <NavBar />
            <Hero />
            <About />
            <Music />
            <ProjectsCardList />
            <SlotMachineScroll />
        </div>
    );
}

export default App;
