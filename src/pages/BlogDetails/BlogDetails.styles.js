import styled from "styled-components";
export const Container = styled.div`
  max-width: 80vw;
  margin: 40px auto;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  margin-bottom: 24px;
  color: #777;
`;

export const CommentBox = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 100px;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const Button = styled.button`
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

export const CommentsSection = styled.div`
  margin-top: 30px;
`;

export const CommentCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
`;

export const Avatar = styled.div`
  font-size: 40px;
  color: #aaa;
`;

export const CommentContent = styled.div`
  flex: 1;
`;

export const CommentHeader = styled.div`
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

export const CommentText = styled.p`
  font-size: 14px;
  color: #444;
  margin: 0;
`;