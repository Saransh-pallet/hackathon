
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import TrialPage from './components/TrialPage';
import BillingPage from './components/BillingPage';
import DashboardPage from './components/DashboardPage';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/trial" element={<TrialPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
