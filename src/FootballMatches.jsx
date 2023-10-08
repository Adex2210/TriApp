// front-end
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://multi-app-suite-server-side.vercel.app/api/football-matches');
        console.log('Response data:', response.data.matches); // Debugging line
        setMatches(response.data.matches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Football Matches Update</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.homeTeam.name} vs. {match.awayTeam.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatches;
