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
          <div className="left">VK</div>
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
