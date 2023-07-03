import React from 'react';
import { PriceList } from './priceList';
import { priceDetail } from '../../../homeList';

export const Prices = () => {
  return (
    <div className="price">
      <div className="header">
        <h1>
          Our <span>Pricing</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div className="body">
        {priceDetail.map((detail, i) => {
          return <PriceList detail={detail} key={i} />;
        })}
      </div>
    </div>
  );
};
