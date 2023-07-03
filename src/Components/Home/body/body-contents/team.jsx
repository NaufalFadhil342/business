import React from 'react';
import { teamList } from '../../homeList';

export const Team = () => {
  return (
    <div className="team">
      <div className="header">
        <h1>
          Meet <span>Our Team</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="body">
        {teamList.map((team, index) => (
          <div className="list" key={index}>
            <div className="image">
              <div style={{ backgroundImage: `url(${team.image})` }} />
            </div>
            <div className="worker">
              <div className="name">{team.name}</div>
              <div className="job">{team.job}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
