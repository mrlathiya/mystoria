// src/features/events/eventsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  stories: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    addStory: (state, action) => {
      state.stories.push(action.payload);
    },
    // Other reducers like update, delete, and search can be added here
  },
});

export const { addAppointment, addStory } = eventsSlice.actions;
export default eventsSlice.reducer;
