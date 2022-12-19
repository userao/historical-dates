import React, { useEffect, useContext } from 'react';
import './Main.sass';
import Carousel from './Carousel';
import Years from './Years';
import ChangeCategoryButtons from './ChangeCategoryButtons';
import { IEvent, IActiveYears } from '../types/data';
import Swipe from './Swipe';
import EventsContext from '../context/EventsContext';
import { actions as categoryActions } from '../slices/categorySlice';
import { useAppDispatch } from '../hooks/useAppDispatch';

const getCategories = (events: IEvent[]) => events.reduce((acc: string[], event: IEvent) => {
  const category = event.category;
  const newAcc: string[] = [...acc];
  if (!newAcc.includes(category)) newAcc.push(category);
  return newAcc;
}, []);

const getActiveEvents = (events: IEvent[], category: string) => events.filter((event) => event.category === category);

const getActiveYears = (events: IEvent[]) => events.reduce<IActiveYears>((acc, event: IEvent) => {
  const newAcc = {...acc};
  if (!newAcc.from || newAcc.from > event.year) newAcc.from = event.year;
  if (!newAcc.to || newAcc.to < event.year) newAcc.to = event.year;
  return newAcc;
}, {from: null, to: null});

const Main :React.FC = () => {
  const events = useContext(EventsContext);
  const dispatch = useAppDispatch();
  const eventsCategories = getCategories(events);

  const getNewActive = (category: string): {newActiveEvents: IEvent[], newActiveYears: IActiveYears} => {
    const newActiveEvents = getActiveEvents(events, category);
    const newActiveYears = getActiveYears(newActiveEvents);
    return {
      newActiveEvents,
      newActiveYears,
    }
  };

  const setNewActive = (category: string): void => {
    const activeEvents = getActiveEvents(events, category);
    const activeYears = getActiveYears(activeEvents);
    dispatch(categoryActions.setActiveCategory(category));
    dispatch(categoryActions.setActiveEvents(activeEvents));
    dispatch(categoryActions.setActiveYears(activeYears));
  }

  useEffect(() => {
    setNewActive(events[0].category);
  }, []);

  return (
    <div className="container">
      <div className="horizontal" />
      <div className="vertical" />
      <div className="header-wrap">
        <h1 className="header">Исторические даты</h1>
      </div>
      <Carousel categories={eventsCategories} setNewActive={setNewActive} getNewActive={getNewActive} />
      <Years />
      <ChangeCategoryButtons categories={eventsCategories} setNewActive={setNewActive} getNewActive={getNewActive} />
      <Swipe />
    </div>
  )
};

export default Main;
