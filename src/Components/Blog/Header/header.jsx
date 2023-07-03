import React, { useEffect, useState } from 'react';
import { getPhotos } from '../../../api';

export const Header = () => {
  const [headerImage, setHeaderImage] = useState([]);

  const HeaderImage = () => {
    const renderedImage = headerImage.map((image) => {
      return (
        <div style={{ backgroundImage: `url(${image.urls.regular})` }} key={image.id}>
          <div className="backyard" />
        </div>
      );
    });

    const getImage = renderedImage[1];

    return getImage;
  };

  const setImage = async () => {
    const result = await getPhotos();
    setHeaderImage(result);
  };

  useEffect(() => {
    setImage();
  }, []);

  return (
    <div className="header">
      <HeaderImage />
    </div>
  );
};
