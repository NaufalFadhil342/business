import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiDelete } from 'react-icons/fi';

const postImage = 'https://picsum.photos/';

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const response = await axios.get('http://localhost:3001/posts', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setPosts(response.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:3001/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const updatedPost = posts.filter((post) => {
      return post.id !== id;
    });

    setPosts(updatedPost);
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
