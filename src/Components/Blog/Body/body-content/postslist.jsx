import React, { useContext, useEffect } from 'react';
import { FiDelete } from 'react-icons/fi';
import { BlogContext } from '../../Context/blogContext';

const postImage = 'https://picsum.photos/';

export const PostsList = () => {
  const { deletePost, getPost, posts } = useContext(BlogContext);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className="postsList">
      {posts.map((post) => {
        return (
          <div className="list" key={post.id}>
            <div className="image">
              <div style={{ backgroundImage: `url(${postImage}/seed/${post.id}/700/500` }} />
            </div>
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
            <div
              className="delete"
              onClick={() => {
                deletePost(post.id);
                alert('Are you sure delete this post?');
              }}
            >
              <FiDelete />
            </div>
          </div>
        );
      })}
    </div>
  );
};
