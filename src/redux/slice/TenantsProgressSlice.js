import { createSlice } from '@reduxjs/toolkit';
import { getTenantsProgress } from '../Api';

const tenantProgressSlice = createSlice({
  name: 'tenantProgress',
  initialState: {
    tenantProgress: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTenantsProgress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTenantsProgress.fulfilled, (state, action) => ({
        ...state,
        tenantProgress: action.payload?.data?.data,
      }))
      .addCase(getTenantsProgress.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tenantProgressSlice.reducer;
