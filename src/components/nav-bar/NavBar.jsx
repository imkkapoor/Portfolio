import React, { useEffect, useState } from 'react';
import './NavBar.css';
export default function NavBar() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;

      // Adjust the threshold as needed
      const threshold = 0.2 * window.innerHeight;

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
      <div className="navbar-container-top">
        <div className="navbar-wrapper">
          <div className="left">VK</div>
          <div className="right">
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div
        className="navbar-container-bottom"
        style={{ opacity: showComponent ? 1 : 0 }}
      >
        <div className="navbar-wrapper">
          <div
            className="left"
            style={{ display: screenWidth > 1000 ? 'block' : 'none' }}
          >
            VK
          </div>
          <div className="right">
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
