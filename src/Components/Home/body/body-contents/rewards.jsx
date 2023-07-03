import React from 'react';
import { rewardsList } from '../../homeList';

export const Rewards = ({ background }) => {
  return (
    <div className="reward">
      <div className="image" style={{ backgroundImage: `url(${background})` }} />
      <div className="backyard">
        {rewardsList.map((reward, index) => (
          <div className="list" key={index}>
            <i>{reward.icon}</i>
            <h1>{reward.total}</h1>
            <div>{reward.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
