import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogCard from './BlogCard';
import '../App.css';

const Home = () => {
  const blogs = useSelector(state => state.blogs);

  return (
    <div className="home">
      <h2>All Blogs</h2>
      <div className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs yet. Go ahead and create one!</p>
        ) : (
          blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default Home;
