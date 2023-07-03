import React, { useEffect, useState } from 'react';
import { getPhotos } from '../../../../api';

export const WorkUs = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((result) => {
      setPhotos(result);
    });
  }, []);

  const PopularPhotos = () => {
    const rendered = photos.map((photo) => (
      <div className="photos" key={photo.id}>
        <div style={{ backgroundImage: `url(${photo.urls.small})` }}>
          <h3>Your Projects</h3>
        </div>
      </div>
    ));

    const photosAmount = rendered.slice(0, 8);

    return photosAmount;
  };

  return (
    <div className="workus">
      <div className="header">
        <h1>
          Our <span>Work</span>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="body">
        <a href="#header">
          <PopularPhotos />
        </a>
      </div>
    </div>
  );
};
