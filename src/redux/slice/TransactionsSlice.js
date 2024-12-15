import { createSlice } from '@reduxjs/toolkit';
import { getAllTransactions } from '../Api';

const transactionsSlice = createSlice({
  name: 'transactins',
  initialState: {
    transactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => ({
        ...state,
        transactions: action.payload,
      }))
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default transactionsSlice.reducer;
