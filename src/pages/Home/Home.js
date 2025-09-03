import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
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
