
import React from 'react';
import { Container, Typography, FormControlLabel, Checkbox, FormGroup } from '@mui/material';

const Addons = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Select Add-ons
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Accounting Feature" />
        <FormControlLabel control={<Checkbox />} label="Usage-Based Add-ons (AI, SMS)" />
      </FormGroup>
    </Container>
  );
};

export default Addons;
