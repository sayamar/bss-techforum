import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Input,
  Textarea,
  Button,
} from "./CreatePost.styles";

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userId: "1",       // hardcoded for now
    categoryId: "100", // hardcoded for now
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8589/api/v1/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      console.log("Post created:", await response.json());
      alert("Post created successfully ✅");

      // redirect to blogs
      navigate("/blogs");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create post");
    }
  };

  return (
    <Container>
      <Title>Create a Post</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Enter title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Textarea
          name="content"
          placeholder="Enter content"
          value={form.content}
          onChange={handleChange}
          required
        />

        {/* if you want user to select category dynamically */}
        <Input
          type="text"
          name="categoryId"
          placeholder="Enter category ID"
          value={form.categoryId}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}
