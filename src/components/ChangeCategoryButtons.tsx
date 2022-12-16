import React from 'react';
import { useSelector } from 'react-redux';
import './ChangeCategoryButtons.sass';

interface IButtonsProps {
  categories: string[];
}

const ChangeCategoryButtons: React.FC<IButtonsProps> = ({ categories }) => {
  const active = useSelector((state: any) => state.category.activeCategory);

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
