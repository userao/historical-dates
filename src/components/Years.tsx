import React from 'react';
import { IActiveYearsType } from '../types/data';
import './Years.sass';

interface IYearsProps {
  activeYears: IActiveYearsType;
}

const Years: React.FC<IYearsProps> = ({ activeYears }) => {

  return <div className="years-container">
    <p className="year from">{activeYears.from}</p>
    <p className="year to">{activeYears.to}</p>
  </div>
};

export default Years;
