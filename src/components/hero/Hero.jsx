import React from 'react';
import './Hero.css';
import memeoji from '../../assets/memeoji.png';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-caption">
          Brewing <span>code potions</span> that would even impress Snape
        </div>
      </div>
      <img src={memeoji} alt="face" />
    </div>
  );
}
