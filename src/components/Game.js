import React from 'react';
import data from '../data/data';

const Game = ({ handleScores }) => {

  return (
    <div className='app-wrapper' >

      { data.map( (card, index) => (
        <div className='game--card' key={ index } onClick={ () => handleScores( card.name ) } >
          <img src={ card.img } alt='card-illustration' />
          <h2>{ card.name }</h2>
        </div>
      ))}

    </div>
  )
}

export default Game;