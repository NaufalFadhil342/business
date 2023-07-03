import React from 'react';
import { Button } from '../../../../Button/button';

export const PriceList = ({ detail }) => {
  return (
    <div className="priceList">
      <div className="amount">
        $<h1>{detail.amount}</h1>/month
      </div>
      <div className="plan">{detail.plan}</div>
      <div className="feature">
        <span>Just a feature</span>
        <span>Just a feature</span>
        <span>Just a feature</span>
      </div>
      <div className="action">
        <Button className="button">
          <a href="#header"> Buy now </a>
        </Button>
      </div>
    </div>
  );
};
