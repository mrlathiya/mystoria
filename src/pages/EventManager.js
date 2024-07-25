// src/pages/EventManager.js
import React from 'react';
import EventForm from '../components/EventForm';
import EventTable from '../components/EventTable';
import EventTimeline from '../components/EventTimeline';

const EventManager = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">MyStoria</h1>
      <EventForm />
      <EventTable />
      <EventTimeline />
    </div>
  );
};

export default EventManager;