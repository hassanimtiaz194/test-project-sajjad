import React from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const Signup = () => {
  return (
    <Container>
      <Typography variant="h4">Signup</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <br />
      <br />
      <Button variant="contained" color="primary" fullWidth>Signup</Button>
    </Container>
  );
};

export default Signup;
