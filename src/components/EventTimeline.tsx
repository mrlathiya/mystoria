import React from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { RootState } from '../store';

const EventTimeline: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);

  const sortedEvents = [
    ...events.appointments.map(event => ({ ...event, type: 'Appointment' })),
    ...events.stories.map(event => ({ ...event, type: 'Story' }))
  ].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="event-timeline">
      <h2 className="text-xl font-semibold mb-4">Timeline</h2>
      {sortedEvents.map((event, index) => (
        <div key={index} className="mb-6 p-4 border-b">
          <span className={`inline-block px-3 py-1 mb-2 text-sm font-semibold text-white ${event.type === 'Appointment' ? 'bg-blue-500' : 'bg-green-500'} rounded`}>
            {event.type}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="flex mb-2">
              <div className="w-1/3 font-semibold text-gray-600">Date:</div>
              <div className="w-2/3 text-md">{event.date}</div>
            </div>
            <div className="flex mb-2">
              <div className="w-1/3 font-semibold text-gray-600">Title:</div>
              <div className="w-1/3 text-md">{event.title}</div>
            </div>
            {event.type === 'Appointment' && (
              <>
                <div className="flex mb-2">
                  <div className="w-1/3 font-semibold text-gray-600">Location:</div>
                  <div className="w-2/3 text-md">{event.location}</div>
                </div>
                <div className="flex mb-2">
                  <div className="w-1/3 font-semibold text-gray-600">Person Name: </div>
                  <div className="w-2/3 text-md">{event.who}</div>
                </div>
              </>
            )}
            <div className="flex mb-2">
              <div className="w-1/3 font-semibold text-gray-600">Details:</div>
              <div className="w-2/3 text-md">
                <ReactMarkdown>{event.content || event.notes || ''}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
