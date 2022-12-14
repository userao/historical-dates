import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Main.sass';
import Carousel from './Carousel'
import getEvents from '../events';
import Years from './Years';
import ChangeCategoryButtons from './ChangeCategoryButtons';
import { actions as eventsActions } from '../slices/eventsSlice';
import { IEvent, IActiveYearsType } from '../types/data';
import Swipe from './Swipe';

const getCategories = (events: IEvent[]) => events.reduce((acc: string[], event: IEvent) => {
  const category = event.category;
  const newAcc: string[] = [...acc];
  if (!newAcc.includes(category)) newAcc.push(category);
  return newAcc;
}, []);

const getActiveEvents = (events: IEvent[], category: string) => events.filter((event) => event.category === category);

const getActiveYears = (events: IEvent[]) => {
  
  return events.reduce<IActiveYearsType>((acc, event: IEvent) => {
    const newAcc = {...acc};
    if (!newAcc.from || newAcc.from > event.year) newAcc.from = event.year;
    if (!newAcc.to || newAcc.to < event.year) newAcc.to = event.year;
    return newAcc;
}, {from: null, to: null});
};

const Main :React.FC = () => {
  const dispatch = useDispatch()
  const events = getEvents();
  // dispatch(eventsActions.addEvents(events));
  const eventCategories = getCategories(events);
  const [activeCategory, setActiveCategory] = useState(eventCategories[0]);
  const activeEvents = getActiveEvents(events, activeCategory);
  const activeYears = getActiveYears(activeEvents);
  
  return (
    <div className="container">
      <div className="horizontal" />
      <div className="vertical" />
      <div className="header-wrap">
        <h1 className="header">Исторические даты</h1>
      </div>
      <Carousel categories={eventCategories} active={activeCategory} />
      <Years activeYears={activeYears} />
      <ChangeCategoryButtons categories={eventCategories} active={activeCategory} />
      <Swipe events={activeEvents} />
    </div>
  )
};

export default Main;
