import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    transform: translateY(-4px);
    cursor:pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Category = styled.span`
  display: inline-block;
  background: #e0f2ff;
  color: #0077b6;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
    color: #00000;
  font-weight: 600;
  margin: 8px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

export default function BlogCard({ post }) {
  return (
    <Card>
      <Image src={"https://wallpapers.com/images/hd/link-hd-wallpaper-and-background-image-71mfep3ai8bib1mn.jpg"} alt={post.title} />
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
