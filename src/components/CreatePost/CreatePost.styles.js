// src/components/CreatePost/CreatePost.styles.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #0d0d0d;
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
