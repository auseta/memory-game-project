import React from 'react';

const Header = ({ scores }) => {
  return (
    <div className='header'>
      <div>
        <h1>Dark Souls - The Memory Game Edition </h1>
        <p>The game is quite simple. Select a card and then select another BUT NOT THE SAME! to score points and so on. Enjoy it!</p>
      </div>
      <div className='header--score'>
        <h3>Score: { scores.score } </h3>
        <h3>Best score: { scores.bestScore }</h3>
      </div>
    </div>
  )
}

export default Header