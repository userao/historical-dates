import { createSlice } from '@reduxjs/toolkit';
import { ICategoryState } from '../types/data';


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
    setActiveCategory: (state, { payload }) => {
      state.activeCategory = payload;
    },
    setActiveYears: (state, { payload }) => {
      const prev = state.activeYears;
      state.activeYears = payload;
      state.prevYears = prev;
    },
    setActiveEvents: (state, { payload }) => {
      state.activeEvents = payload;
    },
  },
});

export const { actions } = categorySlice;

export default categorySlice.reducer;