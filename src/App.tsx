import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEvents } from './features/eventSlice';
import EventManager from './pages/EventManager';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/event.json');
        const data = await response.json();
        dispatch(setEvents(data));
      } catch (error) {
        console.error('Error loading events data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return <EventManager />;
};

export default App;
