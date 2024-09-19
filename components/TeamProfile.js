import React from 'react';
import HackathonTournaments from './HackathonTournaments';

const TeamProfile = ({ team }) => {
  return (
    <div>
      <h2>{team.name} (Rank: {team.rank})</h2>
      <h3>Team Members:</h3>
      <ul>
        {team.members.map((member, index) => (
          <li key={index}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
      <HackathonTournaments hackathons={team.hackathonsWon} />
    </div>
  );
};

export default TeamProfile;
