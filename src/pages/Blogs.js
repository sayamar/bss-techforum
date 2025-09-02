import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      likments: 0,
      viees: 4,
      comws: 4,
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
      comments: 0,
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
      comments: 2,
      views: 20,
      avatar: "",
    },
  ],
};

const Container = styled.div`
  padding: 32px;
  max-width: 95vw;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 16px;
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

const Tabs = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 24px;
`;

const Tab = styled.button`
  padding: 8px 16px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #0078D4" : "none")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#0078D4" : "#000")};

  &:hover {
    color: #0078d4;
  }
`;

const Card = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  align-items: flex-start;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 8px 0;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #777;
  display: flex;
  gap: 16px;
`;

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
          <Card key={post.id}>
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
                <span>💬 {post.comments}</span>
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
