import React from 'react';
import './Button.css';

function Button(props) {
  const { number,onClick } = props;
  return (
    <div onClick={()=>onClick(number)} className='button'>
      {number}
    </div>
  )
}

export default Button
