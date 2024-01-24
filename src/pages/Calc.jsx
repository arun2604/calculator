import React, { useState } from 'react';
import './Calc.css';
import TextBox from '../components/TextBox/TextBox';
import Button from '../components/Button/Button';

function Calc() {
  const [displayText, setDisplayText] = useState('');
  const calcButtonDetails = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '+', '0', '.', '=', '-','%','Del',]

  const handleButtonClick = (param) => {
    let arithmatics = ['+', '-', '*', '/', '%'];
    if (param === '=') {
      let total = eval(displayText);
      setDisplayText(String(total));
      return;
    }
    if (param === 'Del') {
      let newString
      if (displayText[displayText.length - 1] === ' ') newString = displayText.slice(0, -3);
      else newString = displayText.slice(0, -1);
      setDisplayText(newString);
      return;
    }
    if (arithmatics.includes(param)) setDisplayText(displayText + ' ' + param + ' ');
    else setDisplayText(displayText + param);
  }

  const handleClear = ()=>{
    setDisplayText('');
  }

  return (
    <div className='calc-container'>
      <div className='calc-inner-container'>
        <TextBox displayText={displayText} />
        <div  className='button-container'>
          <div className='button-wrapper'>
            {
              calcButtonDetails.map((button) => {
                return (
                  <Button number={ button} onClick={handleButtonClick} />
                )
              })
            }
            <div onClick={handleClear} className='clear-button'>
              Clr
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calc
