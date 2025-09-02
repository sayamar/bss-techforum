import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const Container = styled.div`
  max-width: 80vw;
  margin: 40px auto;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  margin-bottom: 24px;
  color: #777;
`;

const CommentBox = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 100px;
  font-size: 14px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  background: #0D0D0D;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #333;
  }
`;

const CommentsSection = styled.div`
  margin-top: 30px;
`;

const CommentCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
`;

const Avatar = styled.div`
  font-size: 40px;
  color: #aaa;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentHeader = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #333;

  span {
    font-weight: normal;
    color: #777;
    margin-left: 6px;
    font-size: 12px;
  }
`;

const CommentText = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
`;

export default function BlogDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.post) {
    return <p>No blog data found. Go back to Blogs.</p>;
  }

  const blog = state.post;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(blog.comments || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: comment,
      author: "CurrentUser", // TODO: replace with logged-in user
      date: "1m ago",
      avatar: "", // fallback to icon if empty
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <Container>
      <Title>{blog.title}</Title>
      <Description>{blog.description}</Description>
      <Author>By {blog.author} on {blog.date}</Author>
     
      <Stats>
        <span>👍 {blog.likes}</span>
        <span>💬 {comments.length}</span>
        <span>👁️ {blog.views}</span>
      </Stats>

      <form onSubmit={handleSubmit}>
        <CommentBox
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit">Submit Comment</Button>
      </form>

      <CommentsSection>
        <h3>Comments ({comments.length})</h3>
        {comments.length > 0 ? (
          comments.map((c) => (
            <CommentCard key={c.id}>
              <Avatar>
                {c.avatar ? <img src={c.avatar} alt="avatar" /> : <FaUserCircle />}
              </Avatar>
              <CommentContent>
                <CommentHeader>
                  {c.author} <span>{c.date}</span>
                </CommentHeader>
                <CommentText>{c.text}</CommentText>
              </CommentContent>
            </CommentCard>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </CommentsSection>
    </Container>
  );
}
