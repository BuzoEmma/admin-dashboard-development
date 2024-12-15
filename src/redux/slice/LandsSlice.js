import { createSlice } from '@reduxjs/toolkit';
import { getLands } from '../Api';

const landsSlice = createSlice({
  name: 'ads',
  initialState: {
   lands: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLands.fulfilled, (state, action) => ({
        ...state,
       lands: action.payload,
      }))
      .addCase(getLands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default landsSlice.reducer;
