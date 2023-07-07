import { createContext, useState } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const Provider = ({ children }) => {
  const [posts, setPosts] = useState([]);

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

  const getPost = async () => {
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

  const value = {
    posts,
    createPost,
    getPost,
    deletePost,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
