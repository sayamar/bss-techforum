import styled from "styled-components";
export const Card = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Category = styled.span`
  display: inline-block;
  background: #e0f2ff;
  color: #0077b6;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
    color: #00000;
  font-weight: 600;
  margin: 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;