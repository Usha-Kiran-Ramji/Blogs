import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  // Find the blog to edit by its ID
  const blogToEdit = blogs.find((blog) => blog.id === parseInt(id));

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
      setImage(blogToEdit.image);
    }
  }, [blogToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Ensure the blog data is properly updated
    const updatedBlog = {
      ...blogToEdit,
      title,
      content,
      image,
    };

    // Update the blogs array with the new blog data
    const updatedBlogs = blogs.map((blog) =>
      blog.id === parseInt(id) ? updatedBlog : blog
    );

    // Update the state in the parent (App component)
    setBlogs(updatedBlogs);

    // Redirect to the blog detail page after saving
    navigate(`/blog/${id}`);
  };

  // If no blog is found, show an error message
  if (!blogToEdit) {
    return <p className="not-found">Blog not found</p>;
  }

  return (
    <div className="edit-blog-page">
      <div className="edit-blog-form">
        <h2>Edit Blog</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button type="submit">Update Blog</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
