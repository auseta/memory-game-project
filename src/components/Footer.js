import React from 'react';
import bonfire from '../images/bonfire.png';

const Footer = () => {
  return (
    <div className='footer'>
      <p><img src={ bonfire } alt='bonfire' />Project made it by <a href='https://www.linkedin.com/in/augusto-seta/' >Augusto Seta</a><img src={ bonfire } alt='bonfire' /></p>
    </div>
  )
}

export default Footer;