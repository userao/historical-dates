import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './Carousel.sass';

interface ICarouselProps {
  categories: string[];
  active: string
}

const Carousel :React.FC<ICarouselProps> = ({ categories, active }) => {
  interface ICatNames {
    [name: string]: string;
  }
  const categoryNames: ICatNames = {
    literature: 'Литература',
    sports: 'Спорт',
    cinematography: 'Кино',
    science: 'Наука',
  }
  const defaultAngle = 290;
  const rotationStep = 360 / categories.length;

  return (
    <div className="carousel">
      {
      categories.map((category, i) => {
        const rotationAngle = rotationStep * i;
        const isActive = category === active;
        const transform = `
          rotate(${rotationAngle + defaultAngle}deg)
          translateX(265px)
          rotate(-${rotationAngle + defaultAngle}deg)
        `
        return (
          <div
            key={category}
            className={isActive ? 'active-category' : 'inactive-category'}
            style={{transform: `${transform}`}}
          >
            <span className={`category-index ${isActive ? 'shown' : 'hidden'}`}>{categories.indexOf(category) + 1}</span>
            <div className={`category-name ${isActive ? 'shown' : 'hidden'}`}>{categoryNames[category]}</div>
          </div>
        );   
      })
      }
    </div>
  )
};

export default Carousel;