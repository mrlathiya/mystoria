// src/features/events/eventsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  date: string;
  title: string;
  location: string;
  notes: string;
  who: string;
}

interface Story {
  date: string;
  title: string;
  content: string;
}

interface EventsState {
  appointments: Appointment[];
  stories: Story[];
}

const initialState: EventsState = {
  appointments: [],
  stories: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload);
    },
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.push(action.payload);
    },
  },
});

export const { addAppointment, addStory } = eventsSlice.actions;
export default eventsSlice.reducer;
