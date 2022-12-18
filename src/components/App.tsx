import React from 'react';
import Main from './Main';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.sass';
import categoryReducer from '../slices/categorySlice';
import getEvents from '../events';
import EventsContext from '../context/EventsContext';

const App :React.FC = () => {
  const store = configureStore({
    reducer: {
      category: categoryReducer,
    },
  });
  
  const events = getEvents();
 
  return (
    <EventsContext.Provider value={events}>
      <Provider store={store}>
        <Main />
      </Provider> 
    </EventsContext.Provider>
  );
}

export default App;
