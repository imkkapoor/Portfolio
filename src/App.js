import About from "./components/about/About";
import SlotMachineScroll from "./components/slot-machine-scroll/SlotMachineScroll";
import NavBar from "./components/nav-bar/NavBar"

import ProjectsCardList from './components/projects/ProjectsCardList';
import Hero from './components/hero/Hero';

function App() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <About />
            <ProjectsCardList/>
            <SlotMachineScroll />
        </div>
    );
}

export default App;
