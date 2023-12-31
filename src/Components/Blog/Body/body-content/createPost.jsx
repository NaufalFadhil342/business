import React, { useState } from 'react';
import { Button } from '../../../Button/button';
import { Modal } from '../../../Modal/modal';

export const CreatePost = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const modal = <Modal onCloseModal={closeModal} />;

  return (
    <div className="createPost">
      {showModal && modal}
      <Button onClick={openModal}>Create Posts</Button>
    </div>
  );
};
