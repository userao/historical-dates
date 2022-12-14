import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const eventsAdapter = createEntityAdapter();
export const eventsSlice = createSlice({
  name: 'events',
  initialState: eventsAdapter.getInitialState(),
  reducers: {
    addEvents: eventsAdapter.addMany,
  }
})


export const { actions } = eventsSlice;

export default eventsSlice.reducer;
