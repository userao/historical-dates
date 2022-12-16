import React from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap'

interface ICategoryButtonProps {
  category: string;
  rotationStep: number;
  index: number;
  handleClick: Function;
}

const CategoryButton: React.FC<ICategoryButtonProps> = ({ category, rotationStep, index, handleClick }) => {
  interface ICatNames {
    [name: string]: string;
  };
  const categoryNames: ICatNames = {
    literature: 'Литература',
    sports: 'Спорт',
    cinematography: 'Кино',
    science: 'Наука',
  };

  const activeCategory = useSelector((state: any) => state.category.activeCategory);
  const isActive = category === activeCategory;
  const defaultAngle = 290;
  const rotationAngle = rotationStep * index;
  const transform = `
    rotate(${rotationAngle + defaultAngle}deg)
    translateX(265px)
    rotate(-${rotationAngle + defaultAngle}deg)
  `;

  const setActive = (e: any, isActiveCategory: boolean) => {
    if (isActiveCategory) return;

    const targetElement = e.target;
    const buttonElement = targetElement.querySelector('.btn')
    
    if (!buttonElement) return;

    const buttonClasses = buttonElement.classList;
    buttonClasses.add('active-category-hover');
    buttonClasses.remove('inactive-category');

    const categoryNumber = buttonElement.querySelector('.category-index');
    const categoryNumberClasses = categoryNumber.classList;
    categoryNumberClasses.add('shown');
    categoryNumberClasses.remove('hidden');
  };

  const setInactive = (e: any, isActiveCategory: boolean) => {
    if (isActiveCategory) return;

    const targetElement = e.target;
    const buttonElement = targetElement.querySelector('.btn')
    
    if (!buttonElement) return;

    const buttonClasses = buttonElement.classList;
    buttonClasses.remove('active-category-hover');
    buttonClasses.add('inactive-category');

    const categoryNumber = buttonElement.querySelector('.category-index');
    const categoryNumberClasses = categoryNumber.classList;
    categoryNumberClasses.remove('shown');
    categoryNumberClasses.add('hidden');
  };

  return (
    <div
      className="btn-container"
      style={{transform: `${transform}`}}
      onMouseEnter={(e) => setActive(e, isActive)}
      onMouseLeave={(e) => setInactive(e, isActive)}  
    >
      <div
        onClick={(e) => handleClick(e, category, rotationAngle)}
        key={category}
        className={`btn ${isActive ? 'active-category' : 'inactive-category'}`}
      >
        <p className={`category-index ${isActive ? 'shown' : 'hidden'}`}>{index + 1}</p>
      </div>
      <div className={`category-name ${isActive ? 'shown' : 'hidden'}`}>{categoryNames[category]}</div>
    </div>
  )
};

export default CategoryButton;
