import React, { useContext, useEffect } from 'react';
import '../../Styles/modal.css';
import ReactDOM from 'react-dom';
import { Button } from '../Button/button';
import { Form } from './form';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BlogContext } from '../Blog/Context/blogContext';

export const Modal = ({ onCloseModal }) => {
  const { createPost } = useContext(BlogContext);

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
