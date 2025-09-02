import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import passwordData from "../api/password.json";
import { login } from "../features/auth/authSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
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

const CheckboxWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
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

const Links = styled.div`
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

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // <-- state for error message

  // const handleLogin = () => {
  //   if (email === passwordData.email && password === passwordData.password) {
  //     dispatch(login({ email }));
  //     navigate("/blogs");
  //   } else {
  //     setError("Credentials are not valid"); // <-- show error instead of alert
  //   }
  // };


  
const handleLogin = () => {
  const user = passwordData.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    dispatch(login({ email: user.email }));
    navigate("/blogs");
  } else {
    setError("Credentials are not valid");
  }
};

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>

        {error && (
          <div style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
            {error}
          </div>
        )}

        <Label>Email:</Label>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Password:</Label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          Show Password
        </CheckboxWrapper>

        <Button onClick={handleLogin}>Sign In</Button>

        <Links>
          Forgot <a href="#">Email / Password?</a>
          <br />
          Don't have an account? <Link to="register">Sign up</Link>
        </Links>
      </FormWrapper>
    </Container>
  );
}

