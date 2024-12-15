import { createSlice } from '@reduxjs/toolkit';
import { getHabeepHouses } from '../Api';

const housesSlice = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHabeepHouses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHabeepHouses.fulfilled, (state, action) => ({
        ...state,
        houses: action.payload,
      }))
      .addCase(getHabeepHouses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default housesSlice.reducer;
