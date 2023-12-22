// Game.js
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Game.css"

const audio = new Audio("piece.wav");

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
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const getCountry = async () => {
    try {
      const response = await fetch(
        'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en'
      );
      const data = await response.json();
      return data.countryName;
    } catch (error) {
      console.error('Error fetching country:', error);
      return '';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gamePaused) {
        setTime((prevTime) => {
          localStorage.setItem('gameTime', String(prevTime + 0.1));
          return prevTime + 0.1;
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [gamePaused]);

  useEffect(() => {
    const fetchCountry = async () => {
      const countryName = await getCountry();
      setCountry(countryName);
    };

    fetchCountry();
  }, []);

  const handleClick = () => {
    if(gamePaused) return;
    setCounter((prevCounter) => prevCounter + 1);
    // Dans le gestionnaire de clic sur la div
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    window.navigator.vibrate(200);

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
      <button style={{ position: 'absolute', bottom: 10, left: 10, color: 'black' }} onClick={togglePauseGame}>
        Game state: {gamePaused? "paused" : "running"}
      </button>
      
      <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
        Clicked: {country}
      </div>
    </div>
  );
}

export default Game;

