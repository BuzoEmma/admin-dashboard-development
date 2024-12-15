import { createSlice } from '@reduxjs/toolkit';
import { getRequestedLoans, getOutstandingLoans, getOverdueLoans, getCompletedLoans } from '../Api';

const requestedLoansSlice = createSlice({
  name: 'requestedLoansData',
  initialState: {
    requestedLoansData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRequestedLoans.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRequestedLoans.fulfilled, (state, action) => ({
        ...state,
        requestedLoansData: action.payload,
        // status: 'Not loading'
      }))
      .addCase(getRequestedLoans.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const outstandingLoansSlice = createSlice({
  name: 'outstandingLoansData',
  initialState: {
    outstandingLoansData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOutstandingLoans.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOutstandingLoans.fulfilled, (state, action) => ({
        ...state,
        outstandingLoansData: action.payload
      }))
      .addCase(getOutstandingLoans.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const overdueLoansSlice = createSlice({
    name: 'overdueLoansData',
    initialState: {
      overdueLoansData: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getOverdueLoans.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getOverdueLoans.fulfilled, (state, action) => ({
          ...state,
          overdueLoansData: action.payload
        }))
        .addCase(getOverdueLoans.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

const completedLoansSlice = createSlice({
    name: 'completedLoansData',
    initialState: {
      completedLoansData: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getCompletedLoans.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getCompletedLoans.fulfilled, (state, action) => ({
          ...state,
          completedLoansData: action.payload
        }))
        .addCase(getCompletedLoans.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  export const requestedLoansData = requestedLoansSlice.reducer;
  export const outstandingLoansData = outstandingLoansSlice.reducer;
  export const overdueLoansData = overdueLoansSlice.reducer;
  export const completedLoansData = completedLoansSlice.reducer;
