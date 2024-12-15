import { createSlice } from '@reduxjs/toolkit';
import { getSummary } from '../Api';

const summarySlice = createSlice({
  name: 'summary',
  initialState: {
    summary: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSummary.fulfilled, (state, action) => ({
        ...state,
        summary: action.payload?.data,
      }))
      .addCase(getSummary.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default summarySlice.reducer;
