import React from 'react';
import { Icons } from './icons';

import black from '../../../../../Images/png/logo-black.png';
import colorful from '../../../../../Images/png/logo-color.png';
import noBackground from '../../../../../Images/png/logo-no-background.png';
import white from '../../../../../Images/png/logo-white.png';

export const Clients = () => {
  return (
    <div className="client">
      <div className="logo-client">
        <Icons logo={black} text="black" />
        <Icons logo={colorful} text="colorful" />
        <Icons logo={noBackground} text="no-background" />
        <Icons logo={white} text="white" />
      </div>
    </div>
  );
};
