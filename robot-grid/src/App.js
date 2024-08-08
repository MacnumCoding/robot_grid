import React, { useState } from 'react';
import './App.css';
import image from './robot.jpg';

const Grid = () => {
  const [rotation, setRotation] = useState(0); 
  const [position, setPosition] = useState(0); 

  const rotateLeft = () => {
    setRotation((prevRotation) => (prevRotation - 90 + 360) % 360);
  };

  const rotateRight = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const moveForward = () => {
    setPosition((prevPosition) => {
      const direction = rotation % 360;
      let newPosition = prevPosition;

      if (direction === 0 && prevPosition >= 5) {
        newPosition -= 5;
      } else if (direction === 90 && (prevPosition + 1) % 5 !== 0) {
        newPosition += 1;
      } else if (direction === 180 && prevPosition < 20) { 
        newPosition += 5;
      } else if (direction === 270 && prevPosition % 5 !== 0) { 
        newPosition -= 1;
      }

      return newPosition;
    });
  };

  return (
    <>
    <div class='content'>
      <div className='grid-container'>
        {Array.from({ length: 25 }, (_, index) => (
          <div className='grid-item' key={index}>
            {index === position && (
              <img
                src={image}
                alt='Description'
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
    <div class='content'>
      <div className='buttons'>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
    </>
  );
};

export default Grid;
