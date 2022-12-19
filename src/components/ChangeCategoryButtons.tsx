import React from 'react';
import { useSelector } from 'react-redux';
import './ChangeCategoryButtons.sass';
import { animateCategoryChange } from '../animateCategoryChange';
import { IEvent, IActiveYears } from '../types/data';

interface IButtonsProps {
  categories: string[];
  setNewActive: (category: string) => void;
  getNewActive: (category: string) => {newActiveEvents: IEvent[], newActiveYears: IActiveYears};
}

const ChangeCategoryButtons: React.FC<IButtonsProps> = ({ categories, getNewActive, setNewActive }) => {
  const active: string = useSelector((state: any) => state.category.activeCategory);
  const rotationStep = 360 / categories.length;

  const setNextCategory = () => {
    const nextCategory: string = categories[categories.indexOf(active) + 1] ?? categories[0];
    const rotationAngle = rotationStep * categories.indexOf(nextCategory);
    const { newActiveYears } = getNewActive(nextCategory);
    animateCategoryChange(rotationAngle, nextCategory, newActiveYears, setNewActive);
  };

  const setPrevCategory = () => {
    const prevCategory: string = categories[categories.indexOf(active) - 1] ?? categories[categories.length - 1];
    const rotationAngle = rotationStep * categories.indexOf(prevCategory);
    const { newActiveYears } = getNewActive(prevCategory);
    animateCategoryChange(rotationAngle, prevCategory, newActiveYears, setNewActive);
  };

  return (
    <div className="element-container">
      <div className="counter">{`0${categories.indexOf(active) + 1}/0${categories.length}`}</div>
      <div className="buttons">
        <button onClick={setPrevCategory} className="prev-btn">
          <div className='arrow left' />
        </button>
        <button onClick={setNextCategory} className="next-btn">
          <div className='arrow right' />
        </button>
      </div>
    </div>
  )
}

export default ChangeCategoryButtons;
