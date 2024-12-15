import { createSlice } from '@reduxjs/toolkit';
import { getTenants } from '../Api';

const tenantsSlice = createSlice({
  name: 'tenants',
  initialState: {
    tenants: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTenants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTenants.fulfilled, (state, action) => ({
        ...state,
        tenants: action.payload,
      }))
      .addCase(getTenants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tenantsSlice.reducer;
