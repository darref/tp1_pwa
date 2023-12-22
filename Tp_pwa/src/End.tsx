
import { Link } from 'react-router-dom';

function End() {
  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your time: {localStorage.getItem('gameTime')} sec</p>
      <Link to="/game">
        <button>Replay</button>
      </Link>
      <p>Liste des précédents scores: {localStorage.getItem("scoresHistory")}</p>
    </div>
  );
}

export default End;
