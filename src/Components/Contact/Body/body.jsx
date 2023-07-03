import React from 'react';
import { Form } from './body-content/form';
import { Schedule } from './body-content/schedule';

export const Body = () => {
  return (
    <div className="body">
      <Schedule />
      <Form />
    </div>
  );
};
