import React from 'react';
import { HiOutlineMap, HiOutlineMail, HiPhone, HiOutlineClock } from 'react-icons/hi';

export const Schedule = () => {
  return (
    <div className="schedule">
      <div className="contact-us">
        <h1>Contact Us</h1>
        <div className="contactUs-content">
          <div>
            <HiOutlineMap /> Kayumanis No.39, Tanah Sereal, Bogor, West Java, Indonesia
          </div>
          <div>
            <HiOutlineMail /> youroffice@example.com
          </div>
          <div>
            <HiPhone /> +62-8123-456-789
          </div>
        </div>
      </div>
      <div className="openingHours">
        <h1>Opening Hours</h1>
        <div className="clock">
          <HiOutlineClock />
          <div className="hours">
            <span>Mon - Fri: 8.30am - 17.00pm</span>
            <span>Sat: 9.00am - 14.00pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};
