import React from "react";
import {
  Card,
  Image,
  Content,
  Category,
  Title,
  Description,
  AuthorBox,
  Avatar,
} from "./BlogCard.style";

export default function BlogCard({ post }) {
  return (
    <Card>
      <Image
        src={
          "https://wallpapers.com/images/hd/link-hd-wallpaper-and-background-image-71mfep3ai8bib1mn.jpg"
        }
        alt={post.title}
      />
      <Content>
        <Category>{post.category}</Category>
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <AuthorBox>
          <Avatar src={post.authorAvatar} alt={post.author} />
          <div>
            <p style={{ fontWeight: 500 }}>{post.author}</p>
            <p>{post.date}</p>
          </div>
        </AuthorBox>
      </Content>
    </Card>
  );
}
