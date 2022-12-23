import React from 'react';

const Header = ({ scores }) => {
  return (
    <div className='header'>
      <h1>Memory Game</h1>
      <div className='header--score'>
        <h4>Score: { scores.score } </h4>
        <h4>Best score: { scores.bestScore }</h4>
      </div>
    </div>
  )
}

export default Header