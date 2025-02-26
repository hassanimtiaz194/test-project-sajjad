import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { signUpUser } from "../../services";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    deviceType: "",
    status: "",
    parentId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signUpUser(formData);
      console.log("Signup Successful:", result);
      navigate('/login')
    } catch (error) {
      console.error("Signup Failed:", error.response?.data || error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          fullWidth
          margin="normal"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Device Type"
          name="deviceType"
          fullWidth
          margin="normal"
          value={formData.deviceType}
          onChange={handleChange}
        />
        <TextField
          label="Status"
          name="status"
          fullWidth
          margin="normal"
          value={formData.status}
          onChange={handleChange}
        />
        <TextField
          label="Parent ID"
          name="parentId"
          fullWidth
          margin="normal"
          value={formData.parentId}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
