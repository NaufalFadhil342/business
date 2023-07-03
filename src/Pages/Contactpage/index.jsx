import React from 'react';
import './contact.css';
import { Header } from '../../Components/Contact/Header/header';
import { Body } from '../../Components/Contact/Body/body';
import Footer from '../../Components/Footer/footer';

const Contact = () => {
  return (
    <div className="contactPage">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Contact;
