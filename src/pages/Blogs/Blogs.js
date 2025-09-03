import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import {
  Container,
  HeaderSection,
  SearchInput,
  Button,
  Tabs,
  Tab,
  Card,
  Avatar,
  Content,
  Title,
  Description,
  Meta,
} from "./Blogs.styles";

export default function Blogs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recent");
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs.json"); // ⬅️ reads from public/api/blogs.json
        setData(res.data);
      } catch (err) {
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const currentPosts = data[activeTab] || [];

  const filteredPosts = currentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <HeaderSection>
        <SearchInput
          placeholder="Search here first for answers, topics and users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => navigate("/createpost")}>Create Post</Button>
      </HeaderSection>

      <Tabs>
        {["recent", "trending", "noReplies", "solutions"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "noReplies"
              ? "No Replies"
              : tab === "solutions"
              ? "Solutions"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Tab>
        ))}
      </Tabs>

      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card
            key={post.id}
            onClick={() => navigate(`/blogs/${post.id}`, { state: { post } })}
          >
            {post.avatar ? (
              <Avatar src={post.avatar} alt={post.author} />
            ) : (
              <FaUserCircle
                size={40}
                style={{ marginRight: "12px", color: "#666" }}
              />
            )}
            <Content>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <Meta>
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>👍 {post.likes}</span>
                <span>💬 {post.comments?.length || 0}</span>
                <span>👁️ {post.views}</span>
              </Meta>
            </Content>
          </Card>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </Container>
  );
}
