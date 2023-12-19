
import { Link } from 'react-router-dom';

function End() {
  return (
    <div>
      <h1>Game Over!</h1>
      <p>Your time: {localStorage.getItem('time')} sec</p>
      <Link to="/game">
        <button>Replay</button>
      </Link>
    </div>
  );
}

export default End;
