import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
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

  // 🔹 Fetch "API"
  useEffect(() => {
    fetch("/api/password.json") // <--replace ur backend end point here )
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to load user data"));
  }, []);

  const handleLogin = () => {
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

      dispatch(login(userObj));
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
          <div
            style={{
              color: "red",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
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
          Don't have an account? <Link to="/register">Sign up</Link>
        </Links>
      </FormWrapper>
    </Container>
  );
}
