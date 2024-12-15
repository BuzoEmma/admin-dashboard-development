import { createSlice } from '@reduxjs/toolkit';
import { getHbpTransactions } from '../Api';

const hbpTransactionsSlice = createSlice({
  name: 'hbpTransactions',
  initialState: {
    hbpTransactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHbpTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getHbpTransactions.fulfilled, (state, action) => ({
        ...state,
        hbpTransactions: action.payload,
      }))
      .addCase(getHbpTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default hbpTransactionsSlice.reducer;
