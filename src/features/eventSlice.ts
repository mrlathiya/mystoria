import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  date: string;
  title: string;
  location?: string;
  notes?: string;
  who?: string;
  content?: string;
}

interface EventsState {
  appointments: Event[];
  stories: Event[];
}

const initialState: EventsState = {
  appointments: [],
  stories: []
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<EventsState>) {
      state.appointments = action.payload.appointments;
      state.stories = action.payload.stories;
    },
    addAppointment(state, action: PayloadAction<Event>) {
      state.appointments.push(action.payload);
    },
    addStory(state, action: PayloadAction<Event>) {
      state.stories.push(action.payload);
    }
  }
});

export const { setEvents, addAppointment, addStory } = eventsSlice.actions;
export default eventsSlice.reducer;
