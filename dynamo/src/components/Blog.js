import React, { useEffect, useState, useRef } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [newBlog, setNewBlog] = useState({ title: '', username: '', content: '', image: '' }); // State to manage new blog input
  const formRef = useRef(null); // Create a ref for the form

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://6704b401ab8a8f8927348861.mockapi.io/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when component mounts
  }, []);

  // Handle input change for the new blog form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to add a new blog
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('https://6704b401ab8a8f8927348861.mockapi.io/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog), // Send the new blog data
      });

      if (response.ok) {
        setNewBlog({ title: '', username: '', content: '', image: '' }); // Reset form
        setShowForm(false); // Hide the form
        fetchBlogs(); // Refresh the blog list
      } else {
        console.error('Error adding blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  // Function to scroll to the form
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>

      {/* Displaying the list of blogs or a message if none exist */}
      <div className="blog-list">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              {blog.image && (
                <img src={blog.image} alt={blog.title} className="blog-image" />
              )}
              <h2>{blog.title}</h2>
              <p className="blog-username">By: {blog.username}</p>
              <p className="blog-date">Date: {new Date(blog.createdAt).toLocaleDateString()}</p>
              <p>{blog.content}</p>
            </div>
          ))
        ) : (
          <p>No blogs at present</p> // Message when no blogs are available
        )}
      </div>

      {/* Floating button to open add blog form and scroll down */}
      <div className="floating-button"    onClick={() => {
        setShowForm(true);
        scrollToForm(); // Scroll to the form when opening
      }}>
        +
      </div>

      {/* Add Blog Form */}
      {showForm && (
        <form className="add-blog-form" onSubmit={handleSubmit} ref={formRef}>
          <h1>Add Blog</h1>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={newBlog.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            value={newBlog.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newBlog.image}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Blog Content"
            value={newBlog.content}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Add Blog</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Blog;
