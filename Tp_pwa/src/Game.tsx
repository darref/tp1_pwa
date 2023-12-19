// Game.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Game.css"

function getRandomPosition() {
  const x = (Math.random() * 100).toString() + "%";
  const y = (Math.random() * 100).toString() + "%";
  return { x, y };
}

function Game() {
  const [counter, setCounter] = useState(0);
  const [position, setPosition] = useState(getRandomPosition());
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setPosition(getRandomPosition());

    if (counter === 9) {
      navigate('/end');
    }
  };

  return (
    <div className='divPrincipale'>
      <div className='target' onClick={handleClick} style={{  top: position.x, left: position.y}}></div>
      <div style={{ position: 'absolute', top: 10, right: 10, color: 'white' }}>
        Clicked: {counter}
      </div>
      <div style={{ position: 'absolute', bottom: 10, right: 10, color: 'white' }}>
        Time: {time.toFixed(3)} sec
      </div>
    </div>
  );
}

export default Game;

