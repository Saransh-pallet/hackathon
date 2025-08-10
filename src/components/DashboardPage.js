
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const DashboardPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" align="center">
        Manage your subscription, view payment history, and update your details here.
      </Typography>
      <Button variant="contained" color="error" sx={{ mt: 2 }}>
        Cancel Subscription
      </Button>
    </Container>
  );
};

export default DashboardPage;
