import React from 'react';

const HackathonTournaments = ({ hackathons }) => {
  return (
    <div>
      <h3>Hackathons Won:</h3>
      <ul>
        {hackathons.map((hackathon, index) => (
          <li key={index}>{hackathon}</li>
        ))}
      </ul>
    </div>
  );
};

export default HackathonTournaments;
