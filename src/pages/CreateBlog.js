import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBlog } from '../redux/blogSlice';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && image && content) {
      dispatch(addBlog({ title, image, content }));
      navigate('/');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="create-blog">
      <h2>Create New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          rows="6"
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Publish Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
