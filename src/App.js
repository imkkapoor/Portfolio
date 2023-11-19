import About from './components/about/About';
import SlotMachineScroll from './components/slot-machine-scroll/SlotMachineScroll';
import NavBar from './components/nav-bar/NavBar';
import ProjectsCardList from './components/projects/ProjectsCardList';
import Hero from './components/hero/Hero';
import Loading from './components/loading/Loading';

import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const backgroundImages = [
      require('./assets/backgrounds/frantisek-g-XXuVXLy5gHU-unsplash.jpg'),
      require('./assets/backgrounds/scott-webb-UjupleczBOY-unsplash.jpg'),
      require('./assets/backgrounds/rohit-ranwa-twEy5TouJLg-unsplash.jpg'),
      require('./assets/backgrounds/steve-johnson-YS0YJLU_h2k-unsplash.jpg'),
      require('./assets/backgrounds/resul-mentes-DbwYNr8RPbg-unsplash.jpg'),
      require('./assets/backgrounds/ground_charcoal_texture.jpg'),
      require('./assets/logo-covers/vertigis-logo.png'),
    ];

    const timeoutPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    const imagePromises = backgroundImages.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // Once all images are loaded, set the state to indicate that the assets are ready and always have 3 second timeout no matter what
    Promise.all([...imagePromises, timeoutPromise])
      .then(() => {
        this.setState({ isLoaded: true });
      })
      .catch((error) => {
        console.error('Error loading images:', error);
      });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          {this.state.isLoaded ? (
            <>
              <NavBar />
              <Hero />
              <About />
              <ProjectsCardList />
              <SlotMachineScroll />
            </>
          ) : (
            <Loading />
          )}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
