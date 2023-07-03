import React, { useState } from 'react';
import { Button } from '../Button/button';

export const Form = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    createPost(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={submitForm}>
      <div className="title">
        <label>Title</label>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="textarea">
        <label>Text</label>
        <textarea cols="30" rows="10" placeholder="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="action">
        <Button className="button">Create</Button>
      </div>
    </form>
  );
};
