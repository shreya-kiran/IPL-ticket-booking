import React from 'react';
import AuthPage from './components/AuthPage'; // Adjust path if AuthPage.jsx is directly in src/
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';
import './App.css';

function App() {
  return (
    <div>
      {/* Onboarding & Authentication Page */}
      <AuthPage />

      <hr style={{ margin: '40px 0', border: '1px solid #ccc' }} />

      {/* Existing Ticket Booking Interface */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;