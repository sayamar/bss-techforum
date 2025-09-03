import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
// Dummy API data
const dummyData = {
  recent: [
    {
      id: 1,
      title: "How to uninstall unknown programs with unknown paths in Windows",
      description:
        "An unknown program of uncertain origin has been detected...",
      author: "ArkansasQuapaw",
      date: "Sep 01 2025",
      likes: 4,
      comments: [
        {
          id: 1,
          author: "TechHelper",
          text: "Try checking the Task Manager for unknown processes.",
          date: "Sep 01 2025",
        },
        {
          id: 2,
          author: "WindowsGuru",
          text: "You can use Autoruns from Microsoft Sysinternals.",
          date: "Sep 01 2025",
        },
      ],
      views: 4,
      avatar: "",
    },
    {
      id: 2,
      title:
        "Windows system blue screen of death interface actually displays advertisements",
      description:
        "Hello, my computer crashes with a blue screen when launching Minecraft...",
      author: "JacobBrown",
      date: "Sep 01 2025",
      likes: 0,
      comments: [
        {
          id: 1,
          author: "BlueScreenFixer",
          text: "Update your GPU drivers — this often fixes it.",
          date: "Sep 01 2025",
        },
      ],
      views: 3,
      avatar: "",
    },
  ],
  trending: [
    {
      id: 3,
      title: "How to speed up Windows boot time",
      description: "Tips and tricks to make your Windows system boot faster...",
      author: "SpeedyUser",
      date: "Aug 30 2025",
      likes: 10,
      comments: [
        {
          id: 1,
          author: "BlueScreenFixer",
          text: "Update your GPU drivers — this often fixes it.",
          date: "Sep 01 2025",
        },
      ],
      views: 20,
      avatar: "",
    },
  ],
};

export default function Blogs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recent");
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData(dummyData);
    }, 500);
  }, []);

  const currentPosts = data[activeTab] || [];

  // Filter posts based on search input
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

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Card
            key={post.id}
            onClick={() => navigate(`/blogs/${post.id}`, { state: { post } })}
          >
            <Avatar
              src={post.avatar || `https://i.pravatar.cc/150?u=${post.author}`}
              alt={post.author}
            />
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
