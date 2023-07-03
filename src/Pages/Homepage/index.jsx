import React, { useEffect, useState } from 'react';
import './home.css';
import { getPhotos } from '../../api';
import { Header } from '../../Components/Home/header/header';
import { Body } from '../../Components/Home/body/body';
import Footer from '../../Components/Footer/footer';

const Home = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const result = await getPhotos();

    setImages(result);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="homePage">
      <Header images={images} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
