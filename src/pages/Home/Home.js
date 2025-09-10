import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedCard from "../../components/FeedCard/FeedCard"; // updated import

import {
  Banner,
  BannerHeading,
  SearchInput,
  Container,
  Heading,
  Grid,
} from "./Home.styles";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8589/api/v1/feed");

        const blogPosts = res.data.map((item) => ({
          id: item.link,
          link: item.link,
          title: item.title,
          description: item.summary,
          date: item.publishedDate,
          author: item.author,
        }));

        setPosts(blogPosts);
      } catch (err) {
        setError("Failed to load blog posts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
        <Heading>Recent Blogs</Heading>

        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <Grid>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <FeedCard key={post.id} post={post} />
              ))
            ) : (
              <p>No posts found matching "{search}"</p>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
}
