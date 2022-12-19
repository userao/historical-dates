import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import './App.sass';
import getEvents from '../events';
import EventsContext from '../context/EventsContext';
import store from '../store';

const App :React.FC = () => {
  const events = getEvents();
 
  return (
    <EventsContext.Provider value={events}>
      <Provider store={store}>
        <Main />
      </Provider> 
    </EventsContext.Provider>
  );
};

export default App;
