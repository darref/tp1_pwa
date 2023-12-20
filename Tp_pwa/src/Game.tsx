// Game.js
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Game.css"

function getRandomPosition() {
  const x = (Math.random() * 100).toString() + "%";
  const y = (Math.random() * 100).toString() + "%";
  return { x, y };
}

let gamePaused: boolean = false;

function togglePauseGame() : void{
  gamePaused = !gamePaused;
}

function Game() {
  const [counter, setCounter] = useState(0);
  const [position, setPosition] = useState(getRandomPosition());
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if(!gamePaused)
        setTime((prevTime) => {
          localStorage.setItem("gameTime" , String(prevTime + 0.1));
          return prevTime + 0.1;
        });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if(gamePaused) return;
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
      <button style={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }} onClick={togglePauseGame}>
        Game state: {gamePaused? "paused" : "running"}
      </button>
    </div>
  );
}

export default Game;

