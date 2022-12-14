import React from 'react';
import Main from './Main';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.sass';
import eventsReducer from '../slices/eventsSlice';

const App :React.FC = () => {
  const store = configureStore({
    reducer: {
      events: eventsReducer,
    }
  })
  return (
    <Provider store={store}>
      <Main />
    </Provider> 
  );
}

export default App;
