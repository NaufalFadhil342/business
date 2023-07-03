import React, { useEffect, useState } from 'react';
import { getPhotos } from '../../../api';

export const Header = () => {
  const [getImage, setGetImage] = useState([]);

  useEffect(() => {
    getPhotos().then((response) => {
      setGetImage(response);
    });
  }, []);

  const photos = getImage.map((image) => {
    return (
      <div style={{ backgroundImage: `url(${image.urls.regular})` }}>
        <div className="backyard" />
      </div>
    );
  });

  const setPhoto = photos[5];

  return <div className="header">{setPhoto}</div>;
};
