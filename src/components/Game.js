import React from 'react';
import data from '../data/data';

const Game = (props) => {

  console.log(props);

  return (
    <div className='app-wrapper' >

      { data.map( (card, index) => (
        <div className='game--card' key={ index } onClick={ props.handleScore } >
          <img src={ card.img } />
          <h2>{ card.name }</h2>
        </div>
      ))}

    </div>
  )
}

export default Game;