import React from 'react';
import '../assets/styles/Hero.css';

function Hero() {
  return (
    <div id="hero">
      <div id="heroleft">
        <div className="elem">
          <h1>Harikesh</h1>
          <h1>Diligent &</h1>
          <h1>Passionate</h1>
          <h1>Singer</h1>
          <h1>Talented</h1>
        </div>
        <div className="elem">
          <h1>Kumar</h1>
          <h1>Versatile</h1>
          <h1>Website</h1>
          <h1>Beatboxer</h1>
          <h1>Music</h1>
        </div>
        <div className="elem">
          <h1>Sharma</h1>
          <h1>Coder</h1>
          <h1>Designer</h1>
          <h1>Rapper</h1>
          <h1>Producer</h1>
        </div>
        <a href="https://discord.gg/5ASqU3fe" target="_blank" rel="noopener noreferrer">
          <button>DISCORD SERVER</button>
        </a>
      </div>
      <div id="heroright">
        <div className="profile-card">
          <div className="imgBx">
            <img src="/assets/cap_profile.jpg" alt="Profile" />
          </div>
          <div className="profile-content">
            <div className="profile-details">
              <h2>Harikesh Kumar Sharma <br /><span>Full Stack Web Developer</span></h2>
              <div className="data">
                <h3>50+<br /><span>Mini Projects</span></h3>
                <h3>5<br /><span>Clients</span></h3>
                <h3>100+<br /><span>Problems Solved</span></h3>
              </div>
              <div className="actionBtn">
                <a href="https://www.linkedin.com/in/harikeshksharma/details/certifications" target="_blank" rel="noopener noreferrer">
                  <button>Certifications</button>
                </a>
                <a href="https://www.linkedin.com/in/harikeshksharma/details/skills" target="_blank" rel="noopener noreferrer">
                  <button>Skills</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p>Greetings! I'm Harikesh, a zealous explorer of the realms of Computer Science and Engineering...</p>
      </div>
    </div>
  );
}

export default Hero;
