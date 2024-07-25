// src/components/EventTimeline.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const EventTimeline: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);

  const sortedEvents = [...events.appointments, ...events.stories].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow-md mt-8">
      {sortedEvents.map((event, index) => (
        <div key={index} className="mb-4 p-4 border-b">
          <p className="text-sm text-gray-500">{event.date}</p>
          <h3 className="text-lg font-bold">{event.title}</h3>
          <p>{event.date || event.title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
