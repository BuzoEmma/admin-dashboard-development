import { createSlice } from '@reduxjs/toolkit';
import { getStates } from '../Api';

const statesSlice = createSlice({
  name: 'states',
  initialState: {
    states: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getStates.fulfilled, (state, action) => ({
        ...state,
        states: action.payload,
      }))
      .addCase(getStates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default statesSlice.reducer;
