import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
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
  const authUser = useSelector((store) => store.auth.user); // ✅ get logged-in user

  if (!state?.post) {
    return <p>No blog data found. Go back to Blogs.</p>;
  }

  const blog = state.post;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(blog.comments || []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    if (!authUser?.userId) {
      alert("⚠️ Please log in to comment.");
      return;
    }

    try {
      const res = await axios.post(
        `http://bss-tech.ap01.fujifilm-intra.com:8589/api/v1/comments`, // ✅ your backend CommentController
        // `http://localhost:8589/api/v1/comments`,
        {
          postId: blog.postId,
          userId: authUser.userId,
          username: authUser.username, // optional, in case backend uses it
          comment: comment,
           createdAt: null,
        }
      );

      // ✅ Backend returns updated list of comments for the post
      setComments(res.data);
      setComment("");
    } catch (err) {
      console.error("❌ Failed to post comment", err);
      alert("Failed to post comment.");
    }
  };

  return (
    <Container>
      <Title>{blog.title}</Title>
      <Description>{blog.content}</Description>
      <Author>
        By {blog.username} on{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </Author>

      <Stats>
        <span>👍 {blog.likesCount}</span>
        <span>💬 {comments.length}</span>
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
            <CommentCard key={c.commentId}>
              <Avatar>
                {c.avatar ? <img src={c.avatar} alt="avatar" /> : <FaUserCircle />}
              </Avatar>
              <CommentContent>
                <CommentHeader>
                  {c.username || "Anonymous"}{" "}
                  <span>
                    {c.createdAt
                      ? new Date(c.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "just now"}
                  </span>
                </CommentHeader>
                <CommentText>{c.comment}</CommentText>
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
