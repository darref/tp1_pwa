// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  

  return (
    <div>
      <h1>Welcome to the Game</h1>
      <Link to="/game">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Home;
