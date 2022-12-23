import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Header from './components/Header';
import data from './data/data';
import './styles/style.css'

function App() {
  const [scores, setScore] = useState({ score: 0, bestScore: 0 })

  const incrementScore = () => setScore( { ...scores, score : scores.score + 1 } )
  const setMaxScore = () => setScore( { ...scores, bestScore : scores.score } )

  const shuffleData = ( data ) => {
    for ( let i = data.length - 1; i > 0; i -- ) {
      const j = Math.floor(Math.random() * ( i - 1 ));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data
  }

  useEffect(() => {
    shuffleData(data)
  }, [scores])

  return (
    <div className="container">
      <Header scores={ scores } />
      <Game handleScore={ incrementScore } />
    </div>
  );
}

export default App;
