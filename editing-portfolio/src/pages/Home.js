import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Professional Editing Services</h1>
          <p className="tagline">Elevate your writing with expert editing expertise</p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm an experienced editor with a passion for refining written content. 
            With years of expertise in various editing styles, I help authors, publishers, 
            and businesses polish their writing to perfection.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
