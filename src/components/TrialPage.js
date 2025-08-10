
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TrialPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        7-Day Free Trial
      </Typography>
      <Typography variant="body1" align="center">
        You are now on a 7-day free trial. Enjoy full access to the platform.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/billing" sx={{ mt: 2 }}>
        Choose a Plan
      </Button>
    </Container>
  );
};

export default TrialPage;
