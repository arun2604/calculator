import React from 'react';
import './TextBox.css'

function TextBox(props) {
  const { displayText } = props;
  return (
      <div className='input-container'>
          <input type="text" className='innput-box' value={displayText} />
    </div>
  )
}

export default TextBox
