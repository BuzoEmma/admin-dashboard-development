import { createSlice } from '@reduxjs/toolkit';
import { getAgentsPerformance } from '../Api';

const agentsPerformance = createSlice({
  name: 'agentsPerformance',
  initialState: {
    performance: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgentsPerformance.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAgentsPerformance.fulfilled, (state, action) => ({
        ...state,
        // status: 'not loading',
        performance: action.payload,
      }))
      .addCase(getAgentsPerformance.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default agentsPerformance.reducer;
