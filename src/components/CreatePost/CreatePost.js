// src/pages/CreatePost.js
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
`;

const FileInput = styled.input`
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #6b52d2;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #5936b0;
  }
`;

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
