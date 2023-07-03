import React from 'react';
import { Projects } from './projects';

export const AboutUs = ({ plan }) => {
  return (
    <div className="aboutus" id="aboutus">
      <div className="header">
        <div className="tagline">About Us</div>
        <h1>
          <i>Naudhil</i> Supply Hand on Great Experience by Give <span>Convenience in Business.</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt fugit maiores suscipit.</p>
      </div>
      <div className="body">
        <Projects plan={plan} />
      </div>
    </div>
  );
};
