import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';
import NavbarReveal from '../../framer/NavbarReveal';

export default function NavBar() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;

      // Adjust the threshold as needed
      const threshold = 0.7 * window.innerHeight;

      setShowComponent(scrollHeight > threshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavbarReveal opacityValue={!showComponent}>
        <div
          className="navbar-container-top"
          style={{
            // opacity: !showComponent ? 1 : 0,
            zIndex: !showComponent ? 2 : -10,
          }}
        >
          <div className="navbar-wrapper">
            <div className="left">
              <Link to="#hero">VK</Link>
            </div>
            <div className="right">
              <Link to="#about">About</Link>
              <Link to="#projects">Projects</Link>
              <Link to="#contact">Contact</Link>
            </div>
          </div>
        </div>
      </NavbarReveal>
      <NavbarReveal opacityValue={showComponent}>
        <div
          className="navbar-container-bottom"
          style={{
            // opacity: showComponent ? 1 : 0,
            zIndex: showComponent ? 100001 : -10,
          }}
        >
          <div className="navbar-wrapper">
            <div
              className="left"
              style={{ display: screenWidth > 1000 ? 'block' : 'none' }}
            >
              <Link to="#hero">VK</Link>
            </div>
            <div className="right">
              <Link to="#about">About</Link>
              <Link to="#projects">Projects</Link>
              <Link to="#contact">Contact</Link>
            </div>
          </div>
        </div>
      </NavbarReveal>
    </>
  );
}
