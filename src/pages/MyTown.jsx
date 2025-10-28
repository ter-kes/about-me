import React from 'react';
import mexicocity from '../assets/mexicocity.png';
import Weather from '../components/Weather';

function MyTown() {
  return (
    <section>
      <h1>I am from Mexico City</h1>

      <img
        className="hero"
        src={mexicocity}
        alt="Mexico City skyline"
      />

      <p className="bio">
        Mexico City is the capital of Mexico and is one of the biggest cities in the world.
        
      </p>

      <Weather />
    </section>
  );
}

export default MyTown;
