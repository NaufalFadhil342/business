import React, { useEffect } from 'react';
import '../../Styles/modal.css';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from '../Button/button';
import { Form } from './form';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Modal = ({ onCloseModal, posts, setPosts }) => {
  const createPost = async (title, description) => {
    const data = new FormData();

    data.append('title', title);
    data.append('description', description);

    const response = await axios.post('http://localhost:3001/posts', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const updatedPosts = [...posts, response.data];
    setPosts(updatedPosts);
  };

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="panel" onClick={onCloseModal}></div>
      <div className="content">
        <i>
          <AiOutlineCloseCircle onClick={onCloseModal} />
        </i>
        <Form createPost={createPost} />
        <Button onClick={onCloseModal}>Post</Button>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};
