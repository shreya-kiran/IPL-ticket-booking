import React from 'react';

function MatchCard({ matchNumber, teams, dateTime, venue, general, premium, vip, onBook }) {
  return (
    <tr>
      <td>{matchNumber}</td>
      <td>{teams}</td>
      <td>{dateTime}</td>
      <td>{venue}</td>
      <td>₹{general}</td>
      <td>₹{premium}</td>
      <td>₹{vip}</td>
      <td>
        <button onClick={() => onBook(teams)}>Book</button>
      </td>
    </tr>
  );
}

export default MatchCard;