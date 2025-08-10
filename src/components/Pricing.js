
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const plans = [
  {
    title: 'Basic',
    price: '10',
    features: ['Core platform features'],
  },
  {
    title: 'Standard',
    price: '20',
    features: ['Basic features + additional functionality'],
  },
  {
    title: 'Premium',
    price: '30',
    features: ['All Standard features + advanced functionality'],
  },
];

const Pricing = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Subscription Plans
      </Typography>
      <Grid container spacing={4}>
        {plans.map((plan) => (
          <Grid item key={plan.title} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {plan.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  ${plan.price}/month
                </Typography>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Select Plan
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
