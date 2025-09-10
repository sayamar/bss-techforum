import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { login } from "../../features/auth/authSlice";
import {
  Container,
  FormWrapper,
  Title,
  Label,
  Input,
  CheckboxWrapper,
  Checkbox,
  Button,
  Links,
} from "./SignIn.styles";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const userLoginRequest = {
      email,
      password,
    };

    try {
      const res = await axios.post("http://bss-tech.ap01.fujifilm-intra.com:8589/api/v1/login", userLoginRequest);

      // assume backend returns user object or JWT token
      const user = res.data;

      const userObj = {
        userId: user.userId,
        username: user.username,
        email: user.email,
        loginFlag: true,
        token: user.token, // optional if JWT returned
      };

      dispatch(login(userObj));
      navigate("/blogs");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
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

        <Label>Email Address</Label>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Password</Label>
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
          Don&apos;t have an account? <Link to="/register">Sign up</Link>
        </Links>
      </FormWrapper>
    </Container>
  );
}
