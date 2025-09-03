import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  Container,
  Title,
  Author,
  Description,
  Stats,
  CommentBox,
  Button,
  CommentsSection,
  CommentCard,
  Avatar,
  CommentContent,
  CommentHeader,
  CommentText,
} from "./BlogDetails.styles";
export default function BlogDetails() {
  const { state } = useLocation();

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
      <Author>
        By {blog.author} on {blog.date}
      </Author>

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
                {c.avatar ? (
                  <img src={c.avatar} alt="avatar" />
                ) : (
                  <FaUserCircle />
                )}
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
