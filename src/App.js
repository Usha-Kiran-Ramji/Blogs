import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import EditBlog from "./pages/EditBlog";
import Header from "./components/Header";

function App() {
  const [blogs, setBlogs] = useState([
    // Sample data
    { id: 1, title: "Blog 1", content: "Content 1", image: "image-url-1" },
    { id: 2, title: "Blog 2", content: "Content 2", image: "image-url-2" },
    // Add more blog data here
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/create" element={<CreateBlog setBlogs={setBlogs} />} />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
    </>
  );
}

export default App;
