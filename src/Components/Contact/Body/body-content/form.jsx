import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../schema';
import { Button } from '../../../Button/button';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data, event) => {
    event.preventDefault();

    console.log(data);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="name">
        <label>Name</label>
        <section>
          <div className="first">
            <p>{errors.first?.message}</p>
            <input
              id="first"
              {...register('first')}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="first">First</label>
          </div>
          <div className="last">
            <p>{errors.last?.message}</p>
            <input
              id="last"
              {...register('last')}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor="last">Last</label>
          </div>
        </section>
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <p>{errors.email?.message}</p>
        <input
          type="email"
          id="email"
          {...register('email')}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="message">
        <label htmlFor="comment">Comment {'&'} Message</label>
        <p>{errors.comment?.message}</p>
        <textarea
          id="comment"
          {...register('comment')}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div className="action">
        <Button className="button">Submit</Button>
      </div>
    </form>
  );
};
