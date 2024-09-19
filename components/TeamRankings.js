import React from 'react';
import teamsData from '../data/teamsData';
import TeamProfile from './TeamProfile';

const TeamRankings = () => {
  return (
    <div>
      <h1>Hackathon Team Rankings</h1>
      <ul>
        {teamsData.map((team) => (
          <li key={team.id}>
            {team.rank}. {team.name}
            <TeamProfile team={team} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamRankings;
