import React from 'react';
import EventForm from '../components/EventForm';
import EventTable from '../components/EventTable';
import EventTimeline from '../components/EventTimeline';

const EventManager: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">My Storia</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 p-4">
          <EventForm />
        </div>
        <div className="w-full lg:w-2/3 p-4 flex flex-col">
          <div className="flex-1 overflow-auto">
            <EventTable />
          </div>
          <div className="relative h-96 mt-4">
            <div className="absolute inset-0 overflow-y-auto bg-white shadow-lg p-4">
              <EventTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManager;
