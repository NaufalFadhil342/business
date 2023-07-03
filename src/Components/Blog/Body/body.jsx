import React from 'react';
import { CreatePost } from './body-content/createPost';
import { PostsList } from './body-content/postslist';

export const Body = () => {
  return (
    <div className="body">
      <PostsList />
      <CreatePost />
    </div>
  );
};
