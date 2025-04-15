import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <Link to={`/blog/${blog.id}`}>Read More</Link>
    </div>
  );
};

export default BlogCard;
