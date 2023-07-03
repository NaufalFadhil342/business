import React from 'react';
import { Button } from '../../Button/button';

export const Header = ({ images }) => {
  const SetBackground = () => {
    const renderedImage = images.map((image) => {
      return (
        <div className="image" key={image.id} style={{ backgroundImage: `url(${image.urls.regular})` }}>
          <div className="layer">
            <h1>
              Welcome to <i>Naudhil</i>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, enim dicta quis placeat iusto nesciunt!</p>
            <Button className="button">
              <a href="#aboutus">Start Projects</a>
            </Button>
          </div>
        </div>
      );
    });

    const image = renderedImage[1];

    return image;
  };

  return (
    <div className="header" id="header">
      <SetBackground />
    </div>
  );
};
