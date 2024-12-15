import { createSlice } from '@reduxjs/toolkit';
import { getInactiveTenants } from '../Api';

const inactiveTenantsSlice = createSlice({
  name: 'inactiveTenants',
  initialState: {
    inactiveTenants: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInactiveTenants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInactiveTenants.fulfilled, (state, action) => ({
        ...state,
        inactiveTenants: action.payload
      }))
      .addCase(getInactiveTenants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default inactiveTenantsSlice.reducer;
