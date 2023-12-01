import React from 'react';
import './Hero.css';
import blob from '../../assets/backgrounds/blob.png';
import HeroTextReveal from '../../framer/HeroTextReveal';
import OpacityReveal from '../../framer/OpacityReveal';

export default function Hero() {

  return (
    <>
      <div id="hero" />
      <div className="hero-container">
        <div className="hero-wrapper">
          <img src={blob} alt="blob"></img>
          <div className="hero-title">
            <HeroTextReveal xValue={"-50vw"} isLeft={false}>
            <span>Digital</span> 
            </HeroTextReveal>
              
            <HeroTextReveal xValue={"50vw"} isLeft={true}>
            <span>Artisian</span> 
            </HeroTextReveal>
          </div>
          <div className="hero-caption">
          <OpacityReveal>
            Brewing <span>code potions</span> that would even impress Snape
          </OpacityReveal>

          </div>
        </div>
      </div>
    </>
  );
}
