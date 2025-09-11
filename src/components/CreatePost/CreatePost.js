import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // ✅ Redux hook
import axios from "axios";
import {
  Container,
  Form,
  Input,
  TextArea,
  Label,
  Button,
  Select,
} from "./CreatePost.styles";

export default function CreatePost() {
  const navigate = useNavigate();
  const authUser = useSelector((store) => store.auth.user); // ✅ get logged-in user

  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    categoryId: "",
    userId: "", // will set from authUser
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Set logged-in userId when authUser is available
    if (authUser?.userId) {
      setForm((prev) => ({ ...prev, userId: authUser.userId }));
    }
  }, [authUser]);

  useEffect(() => {
    // Fetch categories for dropdown
    const fetchCategories = async () => {
      try {
       
         const res = await axios.get(
          "http://bss-tech.ap01.fujifilm-intra.com:8589/api/v1/categories"
        );
        setCategories(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load categories.");
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!authUser?.userId) {
      setError("Please log in to create a post.");
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        "http://bss-tech.ap01.fujifilm-intra.com:8589/api/v1/posts",
        form
      );
      //  await axios.post(
      //   "http://localhost:8589/api/v1/posts",
      //   form
      // );
      navigate("/blogs"); // Redirect back to blogs list
    } catch (err) {
      console.error(err);
      setError("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Create New Post</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Form onSubmit={handleSubmit}>
        <Label>Category</Label>
        <Select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name} {/* show only category name */}
            </option>
          ))}
        </Select>

        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter topic title"
          required
        />

        <Label>Content</Label>
        <TextArea
          name="content"
          rows="6"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your post here..."
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Post"}
        </Button>
      </Form>
    </Container>
  );
}
