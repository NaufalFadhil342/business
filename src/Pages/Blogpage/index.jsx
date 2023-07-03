import React from 'react';
import './blog.css';
import { Header } from '../../Components/Blog/Header/header';
import { Body } from '../../Components/Blog/Body/body';
import Footer from '../../Components/Footer/footer';

const Blog = () => {
  return (
    <div className="blogPage">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Blog;
