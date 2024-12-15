import { createSlice } from '@reduxjs/toolkit';
import { getHbpRates } from '../Api';

const hbpRatesSlice = createSlice({
  name: 'hbpRates',
  initialState: {
    ads: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHbpRates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHbpRates.fulfilled, (state, action) => ({
        ...state,
        hbpRates: action.payload,
      }))
      .addCase(getHbpRates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default hbpRatesSlice.reducer;
