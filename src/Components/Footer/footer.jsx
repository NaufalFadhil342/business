import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="footer-content">
          <h1>Business</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore numquam vero recusandae odio voluptatibus culpa obcaecati.</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <div className="quick-content">
            <Link to="/" hrefLang="#header">
              My front page
            </Link>
            <Link to="/blog">A day at the office</Link>
            <Link to="/blog">Don't miss our next event</Link>
            <Link to="/blog">Just a crowded street</Link>
          </div>
        </div>
        <div className="footer-content">
          <h3>Services</h3>
          <div className="services-content">
            <a href="#service">UI/UX Design</a>
            <a href="#service">Development</a>
            <a href="#service">Marketing</a>
            <a href="#service">Provider</a>
          </div>
        </div>
        <div className="footer-content">
          <h3>Contact</h3>
          <div className="contact-content">
            <div className="street">Kayumanis No.39, Tanah Sereal, Bogor, West Java, Indonesia</div>
            <div className="phone">(+62) 8123 456 789</div>
            <div className="email">office@example.org</div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div>
          &copy; 2023 Business.inc, proudly by <b>Naudhil</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
