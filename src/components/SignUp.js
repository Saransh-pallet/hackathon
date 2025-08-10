
import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth component={Link} to="/trial">
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
