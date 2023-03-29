import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    applyFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { applyFilter } = filterSlice.actions;
