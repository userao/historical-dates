import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IActiveYears, ICategoryState, IEvent } from '../types/data';

const initialState: ICategoryState = {
  activeCategory: null,
  activeYears: null,
  activeEvents: null,
  prevYears: null,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setActiveCategory: (state, { payload }: PayloadAction<string>) => {
      state.activeCategory = payload;
    },
    setActiveYears: (state, { payload }: PayloadAction<IActiveYears>) => {
      const prev = state.activeYears;
      state.activeYears = payload;
      state.prevYears = prev;
    },
    setActiveEvents: (state, { payload }: PayloadAction<IEvent[]>) => {
      state.activeEvents = payload;
    },
  },
});

export const { actions } = categorySlice;

export default categorySlice.reducer;