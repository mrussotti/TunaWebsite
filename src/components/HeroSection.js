import React from 'react';
//import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* <img src= "./SummitBackground.jpg" alt="Summit Background"/> //use this to cover whole background. change video tag to img */}
      <h1>Bigger Tuna Crypto</h1>
      <p>Developing on the radix network</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to="/Training"
        >
          Button 1
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to="/Recovery"
        >
          Button 2
          <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
