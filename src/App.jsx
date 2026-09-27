import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MatchCard from './components/MatchCard';
import './App.css';

function App() {
  // Sample match data stored in state
  const [matches] = useState([
    { id: 1, teams: 'RCB vs CSK', dateTime: '28 March 2026, 7:30 PM', venue: 'Bengaluru', general: 800, premium: 1500, vip: 3000 },
    { id: 2, teams: 'MI vs KKR', dateTime: '29 March 2026, 7:30 PM', venue: 'Mumbai', general: 900, premium: 1700, vip: 3500 },
    { id: 3, teams: 'CSK vs MI', dateTime: '31 March 2026, 7:30 PM', venue: 'Chennai', general: 850, premium: 1600, vip: 3200 },
    { id: 4, teams: 'KKR vs RCB', dateTime: '2 April 2026, 7:30 PM', venue: 'Kolkata', general: 750, premium: 1400, vip: 2800 }
  ]);

  const [toastMessage, setToastMessage] = useState('');

  const handleBook = (matchTeams) => {
    setToastMessage(`Selected match: ${matchTeams}`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div>
      <Navbar />
      <Hero />

      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#E2B4BD',
          color: '#ffffff',
          padding: '12px 24px',
          borderRadius: '6px',
          fontWeight: 'bold',
          zIndex: 1000
        }}>
          {toastMessage}
        </div>
      )}

      <section id="matches">
        <h2>Match Schedule</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Match Number</th>
                <th>Teams</th>
                <th>Date & Time</th>
                <th>Venue</th>
                <th>General</th>
                <th>Premium</th>
                <th>VIP</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match) => (
                <MatchCard
                  key={match.id}
                  matchNumber={match.id}
                  teams={match.teams}
                  dateTime={match.dateTime}
                  venue={match.venue}
                  general={match.general}
                  premium={match.premium}
                  vip={match.vip}
                  onBook={handleBook}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;