// src/components/EventForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment, addStory } from '../features/eventSlice';

const EventForm = () => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState('appointment');
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    location: '',
    notes: '',
    who: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'appointment') {
      dispatch(addAppointment(formData));
    } else {
      dispatch(addStory(formData));
    }
    setFormData({ date: '', title: '', location: '', notes: '', who: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="inline-flex items-center mr-4">
          <input type="radio" value="appointment" checked={formType === 'appointment'} onChange={() => setFormType('appointment')} className="form-radio" />
          <span className="ml-2">Appointment</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" value="story" checked={formType === 'story'} onChange={() => setFormType('story')} className="form-radio" />
          <span className="ml-2">Story</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      {formType === 'appointment' && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Who</label>
            <input type="text" name="who" value={formData.who} onChange={handleChange} placeholder="Who" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
        </>
      )}
      {formType === 'story' && (
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Content" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200">Add {formType}</button>
    </form>
  );
};

export default EventForm;
