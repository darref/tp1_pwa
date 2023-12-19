// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import Game from './Game.tsx';
import End from './End.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;
