import React, { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import './styles/style.css'

function App() {
  const [scores, setScore] = useState({ score: 0, bestScore: 0 })

  return (
    <div className="container">
      <Header scores={ scores } />
      <Game />
    </div>
  );
}

export default App;
