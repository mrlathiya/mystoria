// src/components/EventTable.tsx
import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Event {
  date: string;
  title: string;
  location?: string;
  content?: string;
}

const EventTable: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filterEventsByDate = (events: Event[], startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (!startDate || eventDate >= start) && (!endDate || eventDate <= end);
    });
  };

  const filterEventsBySearchTerm = (events: Event[], searchTerm: string) => {
    return events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.content?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredAppointments = filterEventsBySearchTerm(filterEventsByDate(events.appointments, startDate, endDate), searchTerm);
  const filteredStories = filterEventsBySearchTerm(filterEventsByDate(events.stories, startDate, endDate), searchTerm);

  return (
    <div>
      <div className="mb-4 flex items-center">
        <div className="mr-4">
          <label className="mr-2">Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} className="border px-2 py-1 rounded-md" />
        </div>
        <div className="mr-4">
          <label className="mr-2">End Date:</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} className="border px-2 py-1 rounded-md" />
        </div>
        <div>
          <label className="mr-2">Search:</label>
          <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search events..." className="border px-2 py-1 rounded-md" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{event.date}</td>
                <td className="py-2 px-4 border-b">{event.title}</td>
                <td className="py-2 px-4 border-b">{event.location}</td>
              </tr>
            ))}
            {filteredStories.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{event.date}</td>
                <td className="py-2 px-4 border-b">{event.title}</td>
                <td className="py-2 px-4 border-b">{event.content}</td>
              </tr>  
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTable;
