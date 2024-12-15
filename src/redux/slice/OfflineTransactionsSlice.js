import { createSlice } from '@reduxjs/toolkit';
import { getOfflineTransactions } from '../Api';

const offlineTransactionsSlice = createSlice({
  name: 'offlineTransactions',
  initialState: {
    offlineTransactions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOfflineTransactions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOfflineTransactions.fulfilled, (state, action) => ({
        ...state,
        offlineTransactions: action.payload
      }))
      .addCase(getOfflineTransactions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default offlineTransactionsSlice.reducer;
