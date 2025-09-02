import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard/BlogCard";

const Banner = styled.div`
  background: url("data:image/jpeg;base64,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") center/cover no-repeat;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
`;

const BannerHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const SearchInput = styled.input`
  width: 50%;
  max-width: 500px;
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
`;

const Container = styled.div`
  padding: 32px;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 24px;
`;

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const fakePosts = data.map((item, i) => ({
          id: item.id,
          image: item.url,
          title: `Sample Blog Post ${i + 1}`,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestias.",
          category: ["Tech", "Food", "Automobile"][i % 3],
          author: ["Jane Doe", "Jony Doe", "John Doe"][i % 3],
          authorAvatar: `https://i.pravatar.cc/150?img=${i + 10}`,
          date: ["2h ago", "Yesterday", "2d ago"][i % 3],
        }));
        setPosts(fakePosts);
      });
  }, []);

  // Filter posts by search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Banner>
        <BannerHeading>Change Needs Makers</BannerHeading>
        <SearchInput
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Banner>

      <Container>
        <Heading>Latest Blog Posts</Heading>
        <Grid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
          ) : (
            <p>No posts found matching "{search}"</p>
          )}
        </Grid>
      </Container>
    </>
  );
}
