import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import passwordData from "../../api/password.json";
import { login } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { Container, FormWrapper, Title, Label, Input, CheckboxWrapper, Checkbox, Button, Links } from "./SignIn.styles";
export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // <-- state for error message

  
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

