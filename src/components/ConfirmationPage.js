
import React from 'react';
import { Container, Typography } from '@mui/material';

const ConfirmationPage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Subscription Confirmed!
      </Typography>
      <Typography variant="body1" align="center">
        Thank you for subscribing. You will receive a confirmation email shortly.
      </Typography>
    </Container>
  );
};

export default ConfirmationPage;
