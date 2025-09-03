import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  max-width: 95vw;
  margin: 0 auto;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 16px;
`;

export const Button = styled.button`
  background-color: #0D0D0D;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #333;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 24px;
`;

export const Tab = styled.button`
  padding: 8px 16px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #0D0D0D" : "none")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#0D0D0D" : "#000")};
  transition: all 0.3s ease; 

  &:hover {
    color: #0D0D0D;
    font-weight: 700;
  }
`;

export const Card = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 16px;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s ease; /* smooth animation */

  &:hover {
    background: #fafafa; /* slightly different background */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* soft shadow */
    transform: translateY(-2px); /* subtle lift */
  }
`;


export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 8px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 8px 0;
`;

export const Meta = styled.div`
  font-size: 12px;
  color: #777;
  display: flex;
  gap: 16px;
`;
