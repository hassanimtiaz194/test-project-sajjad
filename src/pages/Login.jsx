import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const { data } = await login({ username: email, password });
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("token", data.data.token);
      console.log("Login successful");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
