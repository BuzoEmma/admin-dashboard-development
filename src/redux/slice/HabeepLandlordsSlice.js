import { createSlice } from '@reduxjs/toolkit';
import { getHabeepLandlords } from '../Api';

const habeepLandlordsSlice = createSlice({
  name: 'landlords',
  initialState: {
    landlords: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHabeepLandlords.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHabeepLandlords.fulfilled, (state, action) => ({
        ...state,
        landlords: action.payload,
      }))
      .addCase(getHabeepLandlords.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default habeepLandlordsSlice.reducer;
