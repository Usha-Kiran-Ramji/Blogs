import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog } from '../redux/blogSlice';
import '../App.css';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector(state =>
    state.blogs.find(blog => blog.id.toString() === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    navigate('/');
  };

  if (!blog) return <h2>Blog Not Found</h2>;

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} />
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <div className="actions">
        <button onClick={() => navigate(`/edit/${blog.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BlogDetails;
