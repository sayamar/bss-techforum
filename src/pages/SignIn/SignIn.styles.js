import styled from "styled-components";
export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const FormWrapper = styled.div`
  background: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0D0D0D;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #333;
  }
`;

export const Links = styled.div`
  text-align: center;
  font-size: 14px;
  a {
    color: #0D0D0D;
    text-decoration: none;
    margin: 0 5px;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;