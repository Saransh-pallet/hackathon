
import React, { useState } from 'react';
import { Container, Typography, RadioGroup, FormControlLabel, Radio, TextField, Button } from '@mui/material';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // This is where you would typically make an API call to your backend
    // to create an order and get an order_id. For demonstration, we'll
    // use a placeholder.
    const data = {
      amount: 50000, // amount in paisa (e.g., 50000 paisa = 500 INR)
      currency: 'INR',
      receipt: 'receipt_id_1',
      payment_capture: 1,
    };

    // In a real application, you would get this from your backend
    const order_id = 'order_placeholder_123'; 

    const options = {
      key: 'rzp_test_o2EDWEWcmNegy3', // Replace with your actual Razorpay Key ID
      amount: data.amount,
      currency: data.currency,
      name: 'Subscription Billing System',
      description: 'Test Transaction',
      order_id: order_id,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        // Here you would typically verify the payment on your backend
      },
      prefill: {
        name: 'John Doe', // Replace with actual user name
        email: 'john.doe@example.com', // Replace with actual user email
        contact: '9999999999', // Replace with actual user contact
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399CC',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Select Payment Method
      </Typography>
      <RadioGroup row value={paymentMethod} onChange={handlePaymentMethodChange}>
        <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
      </RadioGroup>

      {paymentMethod === 'card' && (
        <>
          <TextField label="Card Number" fullWidth margin="normal" />
          <TextField label="Expiry Date" fullWidth margin="normal" placeholder="MM/YY" />
          <TextField label="CVV" fullWidth margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={displayRazorpay}>
            Set up Card Mandate
          </Button>
        </>
      )}

      {paymentMethod === 'upi' && (
        <>
          <TextField label="UPI ID" fullWidth margin="normal" />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={displayRazorpay}>
            Approve UPI Mandate
          </Button>
        </>
      )}
    </Container>
  );
};

export default Payment;
