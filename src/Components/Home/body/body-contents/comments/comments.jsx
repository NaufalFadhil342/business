import React from 'react';
import { feedBacks } from '../../../homeList';
import { Feeds } from './feeds';

export const Comments = ({ image }) => {
  return (
    <div className="comment">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="contents">
        <Feeds comments={feedBacks} />
      </div>
    </div>
  );
};
