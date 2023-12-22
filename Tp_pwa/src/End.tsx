
import { Link } from 'react-router-dom';

function End() {

  const scores = JSON.parse(localStorage.getItem("scoresHistory")!) || [];

  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your time: {localStorage.getItem('gameTime')} sec</p>
      <Link to="/game">
        <button>Replay</button>
      </Link>
      <p>Liste des précédents scores: </p>
      <ol>
        {/* Parcourir le tableau des scores et créer un élément <li> pour chaque score */}
        {scores.map((score: { time: number; }, index:number) => (
          <li key={index}>{`Score ${index + 1}: ${score.time.toFixed(3)} sec`}</li>
        ))}
      </ol>
    </div>
  );
}

export default End;
