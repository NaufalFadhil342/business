import React from 'react';
import { benefitList } from '../../homeList';

export const Benefit = ({ background }) => {
  return (
    <div className="benefit" style={{ backgroundImage: `url(${background})` }}>
      <div className="benefit-content">
        <div className="header">
          <h1>
            Develop Your Amazing <span>Business</span> in the 5.0 Era
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="body">
          {benefitList.map((benefit, index) => (
            <div className="list" key={index}>
              <i>{benefit.icon}</i>
              <div>{benefit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
