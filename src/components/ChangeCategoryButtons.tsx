import React from 'react';
import './ChangeCategoryButtons.sass';

interface IButtonsProps {
  categories: string[];
  active: string
}

const ChangeCategoryButtons: React.FC<IButtonsProps> = ({ categories, active }) => {
  return (
    <div className="element-container">
      <div className="counter">{`0${categories.indexOf(active) + 1}/0${categories.length}`}</div>
      <div className="buttons">
        <button className="prev-btn">
          <div className='arrow left' />
        </button>
        <button className="next-btn">
          <div className='arrow right' />
        </button>
      </div>
    </div>
  )
}

export default ChangeCategoryButtons;
