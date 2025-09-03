import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Input,
  Textarea,
  FileInput,
  Button,
} from "./CreatePost.styles";

export default function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post submitted:", form);

    // TODO: send to backend API
    alert("Post created successfully ✅");

    // redirect to blogs
    navigate("/blogs");
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
          name="description"
          placeholder="Enter description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <FileInput
          type="file"
          name="file"
          accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}
