import { createSlice } from '@reduxjs/toolkit';
import { getTenantsFinance } from '../Api';

const tenantsFinanceSlice = createSlice({
  name: 'tenantsFinance',
  initialState: {
    tenantsFinance: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTenantsFinance.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTenantsFinance.fulfilled, (state, action) => ({
        ...state,
        tenantsFinance: action.payload,
      }))
      .addCase(getTenantsFinance.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tenantsFinanceSlice.reducer;
