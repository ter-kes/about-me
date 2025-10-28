import React from 'react';
import selfie from '../assets/selfie.jpg';

function AboutMe() {
  return (
    <section>
      <h1>About Me:</h1>

      <img
        className="profile-pic"
        src={selfie}
        alt="Miguel Angel"
      />

      <p className="intro">
        Hi, I am <strong>Miguel Angel</strong>.
      </p>

      <p className="bio">
        I am an expert in quantitative finance with solid mathematical and programming foundations.
      </p>

      <p className="bio">
        I joined MCDA because I want to become an expert in computing, so I can develop full digital quantitative finance
        systems powered by artificial intelligence.
      </p>
    </section>
  );
}

export default AboutMe;
