import React from 'react';
import { AboutUs } from './body-contents/aboutUs';
import { Rewards } from './body-contents/rewards';
import { Services } from './body-contents/services';
import { Benefit } from './body-contents/benefit';
import { Team } from './body-contents/team';
import { WorkUs } from './body-contents/workUs';
import { Comments } from './body-contents/comments/comments';
import { Prices } from './body-contents/prices/prices';
import { Premium } from './body-contents/premium';
import { Clients } from './body-contents/Clients/clients';
import planning from '../../../Images/background/planning.jpg';
import rewards from '../../../Images/background/rewards.jpg';
import build from '../../../Images/background/building.jpg';
import comments from '../../../Images/background/comments.jpg';
import premium from '../../../Images/background/premium.jpg';

export const Body = () => {
  return (
    <div className="body">
      <AboutUs plan={planning} />
      <Rewards background={rewards} />
      <Services />
      <Benefit background={build} />
      <WorkUs />
      <Team />
      <Comments image={comments} />
      <Prices />
      <Premium background={premium} />
      <Clients />
    </div>
  );
};
