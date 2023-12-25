import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit'
import {cog} from 'react-icons-kit/ikons/cog'

export default function ColorPicker() {
  const gradientColors = [
    'linear-gradient(360deg, #3F3CCC 2.98%, rgba(63, 60, 204, 0.00) 85.97%)',
    'linear-gradient(360deg, #ADA4DB 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #BEE916 1.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #C5FBB9 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #DE3232 2.26%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #CCFF00 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #043458 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #8B3E3E 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #1D1A21 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
    'linear-gradient(360deg, #28193D 2.98%, rgba(63, 60, 204, 0.00) 85.42%)',
  ];
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorClick = (color) => {
    setShowColorPicker(false);
    document.body.style.background = color; 
  };
  useEffect(()=>{handleColorClick(gradientColors[1])},[])

  return (
    <>
      <div className="ColorPickerContainer">
        <button className='pickBtn rounded-start text-light' onClick={() => setShowColorPicker(!showColorPicker)}>
          <Icon icon={cog} size={25}></Icon>
        </button>
        {showColorPicker ? (
          <div className="color-picker bg-muted">
            {gradientColors.map((color, index) => (
              <div key={index} className="color-option"
                style={{ background: index === 0 ? color : color, width: '20px', height: '20px', marginBottom: '5px' }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
