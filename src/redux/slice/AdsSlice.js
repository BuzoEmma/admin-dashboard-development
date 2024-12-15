import { createSlice } from '@reduxjs/toolkit';
import { getAds } from '../Api';

const adsSlice = createSlice({
  name: 'ads',
  initialState: {
    ads: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAds.fulfilled, (state, action) => ({
        ...state,
        ads: action.payload,
      }))
      .addCase(getAds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default adsSlice.reducer;
