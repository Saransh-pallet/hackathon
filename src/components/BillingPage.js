import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';
import Pricing from './Pricing';
import Addons from './Addons';
import Payment from './Payment';

const steps = ['Select Plan', 'Select Add-ons', 'Payment'];

const BillingPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Billing
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 0 && <Pricing />}
        {activeStep === 1 && <Addons />}
        {activeStep === 2 && <Payment />}
      </div>
      <div>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </Container>
  );
};

export default BillingPage;