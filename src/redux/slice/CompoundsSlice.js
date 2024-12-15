import { createSlice } from '@reduxjs/toolkit';
import { getCompounds } from '../Api';

const compoundsSlice = createSlice({
  name: 'compounds',
  initialState: {
    compounds: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompounds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCompounds.fulfilled, (state, action) => ({
        ...state,
        compounds: action.payload,
      }))
      .addCase(getCompounds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default compoundsSlice.reducer;
