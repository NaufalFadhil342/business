import React from 'react';
import { Button } from '../../../Button/button';

export const Premium = ({ background }) => {
  const getStyleBackground = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="premium" style={getStyleBackground}>
      <div className="premium-content">
        <div className="content">
          <h1>
            Build your website with <i>Naudhil Pro</i>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam?</p>
        </div>
        <div className="action">
          <Button className="button">
            <a href="#header"> Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
