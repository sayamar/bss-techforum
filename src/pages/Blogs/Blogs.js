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
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8589/api/v1/posts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // ✅ Categorize posts into tabs with updated rules
  const categorizePosts = (posts) => {
    const now = new Date();
    const solutions = [];
    const recent = [];
    const noReplies = [];
    const trending = [];

    posts.forEach((post) => {
      const createdDate = new Date(post.createdAt);
      const diffInDays = (now - createdDate) / (1000 * 60 * 60 * 24);

      if (post.solved) {
        // ✅ Solved posts
        solutions.push(post);
      } else if (diffInDays <= 2) {
        // ✅ Created within 2 days → Recent
        recent.push(post);
      } else if (!post.comments || post.comments.length === 0) {
        // ✅ No comments → No Replies
        noReplies.push(post);
      } else if ((post.comments?.length || 0) >= 1) {
        // ✅ At least 1 comment → Trending
        trending.push(post);
      } else {
        // ✅ Default → push to Recent
        recent.push(post);
      }
    });

    const sortDesc = (arr) =>
      arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
      solutions: sortDesc(solutions),
      recent: sortDesc(recent),
      noReplies: sortDesc(noReplies),
      trending: sortDesc(trending),
    };
  };

  const categorized = categorizePosts(posts);

  const getPostsForTab = () => {
    switch (activeTab) {
      case "recent":
        return categorized.recent;
      case "trending":
        return categorized.trending;
      case "solutions":
        return categorized.solutions;
      case "noReplies":
        return categorized.noReplies;
      default:
        return [];
    }
  };

  // ✅ Apply search filter per tab
  const filteredPosts = getPostsForTab().filter((post) =>
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
        <p>Loading posts...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card
            key={post.postId}
            onClick={() =>
              navigate(`/blogs/${post.postId}`, { state: { post } })
            }
          >
            {post.avatar ? (
              <Avatar src={post.avatar} alt={post.username} />
            ) : (
              <FaUserCircle
                size={40}
                style={{ marginRight: "12px", color: "#666" }}
              />
            )}
            <Content>
              <Title>{post.title}</Title>
              <Description>{post.content}</Description>
              <Meta>
                <span>👤 {post.username}</span>
                <span>📌 {post.categoryName}</span>
                <span>
                  🗓️{" "}
                  {new Date(post.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span>👍 {post.likesCount}</span>
                <span>💬 {post.comments?.length || 0}</span>
                {post.solved && <span>✅ Solved</span>}
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
