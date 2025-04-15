import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <h1>MyBlog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
