import React from 'react'

import "./Hero.css";

import myPicture from "../assets/image/myPicture.png"

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-text">
        <h3>Hello, <br /> <span>It's Me</span></h3>

        <h1>Oluwa <span>dunsin</span></h1>

        <h2>
          And I'm a <span>Full-Stack Developer</span>
        </h2>

        <p>
            I’m a Full-Stack Developer with expertise in creating modern, <br /> responsive, and user-friendly websites and web applications. <br />.I’m a Full-Stack Developer with expertise in creating modern, responsive, <br />and user-friendly websites and web applications. 

        </p>

        <button><a href="#about">Learn More...</a></button>
      </div>

      <div className="hero-image">
        <img src={myPicture} alt="Profile" />
      </div>
    </div>
  );
}

export default Hero;



