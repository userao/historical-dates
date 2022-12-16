import React from 'react';
import './Years.sass';
import { useSelector } from 'react-redux';

const Years: React.FC = () => {
  const activeYears = useSelector((state: any) => state.category.activeYears);

  return (
    activeYears &&
    <div className="years-container">
      <p className="year from">{activeYears.from}</p>
      <p className="year to">{activeYears.to}</p>
    </div>
  )
};

export default Years;
