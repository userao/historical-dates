import React from 'react';
import { useSelector } from 'react-redux';
import './Carousel.sass';
import { animateCategoryChange } from '../animateCategoryChange';
import CategoryButton from './CategoryButton';

interface ICarouselProps {
  categories: string[];
  setNewActive: Function;
  getNewActive: Function;
}

const Carousel :React.FC<ICarouselProps> = ({ categories, setNewActive, getNewActive }) => {
  const active = useSelector((state: any) => state.category.activeCategory);
  const rotationStep = 360 / categories.length;

  const handleClick = (category: string, rotationAngle: number) => {
    if (category === active) return;
    const { newActiveYears } = getNewActive(category);
    animateCategoryChange(rotationAngle, category, newActiveYears, setNewActive);
  };

  return (
    <div className="carousel">
      <svg id="path" height="530" width="530">
        <circle cx="265" cy="265" r="265" stroke="rgb(26, 34, 48, 0.1)" strokeWidth="1" fill="none" />
      </svg>
      {categories.map((category, i) => (
        <CategoryButton
          key={i}
          category={category}
          rotationStep={rotationStep}
          index={i}
          handleClick={handleClick}
        />))
      }
    </div>
  );
};

export default Carousel;
