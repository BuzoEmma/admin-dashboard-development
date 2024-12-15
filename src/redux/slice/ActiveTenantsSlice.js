import { createSlice } from '@reduxjs/toolkit';
import { getActiveTenants } from '../Api';

const activeTenantsSlice = createSlice({
  name: 'activeTenants',
  initialState: {
    activeTenants: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActiveTenants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getActiveTenants.fulfilled, (state, action) => ({
        ...state,
        activeTenants: action.payload
      }))
      .addCase(getActiveTenants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default activeTenantsSlice.reducer;
