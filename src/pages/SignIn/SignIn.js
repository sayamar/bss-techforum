import React, { useState, useEffect } from "react";
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

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Fetch user data (replace with your backend API)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/password.json"); // ⬅️ replace with real backend API
        setUsers(res.data);
      } catch (err) {
        setError("Failed to load user data");
      }
    };
    fetchUsers();
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const userObj = {
        userId: user.userId,
        username: user.username,
        email: user.email,
        loginFlag: true,
      };

      dispatch(login(userObj)); // ✅ This will also save to localStorage (handled in slice)
      navigate("/blogs");
    } else {
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
          Don&apos;t have an account? <Link to="/register">Sign up</Link>
        </Links>
      </FormWrapper>
    </Container>
  );
}
