import About from './components/about/About';
import SlotMachineScroll from './components/slot-machine-scroll/SlotMachineScroll';
import NavBar from './components/nav-bar/NavBar';
import ProjectsCardList from './components/projects/ProjectsCardList';
import Hero from './components/hero/Hero';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About />
        <ProjectsCardList />
        <SlotMachineScroll />
      </BrowserRouter>
    </>
  );
}

export default App;
