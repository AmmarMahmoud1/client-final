import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    postType: "",
    title: "",
    category: "",
    content: "",
    Address: "",
    zipCode: "",
    image: "",
  });

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { status } = await axios.post(
        `https://searchandoffer.onrender.com/api/add`,
        { postType, title, category, content, Address, zipCode, image },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(console.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">postType</label>
      <input
        type="text"
        id="name"
        name="name"
        value={postData.name}
        onChange={handleChange}
      />

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={postData.title}
        onChange={handleChange}
      />

      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        name="category"
        value={postData.category}
        onChange={handleChange}
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={postData.content}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="address">Address</label>
      <textarea
        id="address"
        name="address"
        value={postData.address}
        onChange={handleChange}
      ></textarea>

      <label htmlFor="zipCode">zipCode</label>
      <input
        type="number"
        id="zipCode"
        name="zipCode"
        value={postData.zipCode}
        onChange={handleChange}
      />

      <label htmlFor="image">Image</label>
      <input
        type="image"
        id="image"
        name="image"
        value={postData.image}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
      <button type="submit">Cancel</button>
    </form>
  );
};

export default AddPost;
