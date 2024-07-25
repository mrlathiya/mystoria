
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/eventSlice';
import EventManager from './pages/EventManager';

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <EventManager />
    </Provider>
  );
};

export default App;
