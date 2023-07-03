import React from 'react';
import { servicesList } from '../../homeList';

export const Services = () => {
  return (
    <div className="service" id="service">
      <div className="header">
        <h1>
          Our <span>Services</span>
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="body">
        {servicesList.map((service, index) => (
          <div className="list" key={index}>
            <i>{service.icon}</i>
            <h3>{service.label}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ducimus.</p>
          </div>
        ))}
      </div>
    </div>
  );
};
