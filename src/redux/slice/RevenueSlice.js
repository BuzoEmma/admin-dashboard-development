import { createSlice } from '@reduxjs/toolkit';
import { getRevenueData, getRevenueAnalysis } from '../Api';

const revenueSlice = createSlice({
  name: 'revenue',
  initialState: {
    revenue: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRevenueData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRevenueData.fulfilled, (state, action) => ({
        ...state,
        revenue: action.payload,
      }))
      .addCase(getRevenueData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const revenueAnalysisSlice = createSlice({
  name: 'revenueAnalysis',
  initialState: {
    revenueAnalysis: [],
    loanInterests: [],
    registrations: [],
    properties: [],
    rentCommissions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRevenueAnalysis.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getRevenueAnalysis.fulfilled, (state, action) => ({
        ...state,
        revenueAnalysis: action.payload.categories,
        loanInterests: action.payload.categories[0]?.['loan-interests']?.categories?.loans,
        registrations: action.payload.categories[1]?.registrations?.categories,
        properties: action.payload.categories[3]?.properties?.categories?.landlords,
        rentCommissions: action.payload.categories[2]['rent-commision'].categories.loans
      }))
      .addCase(getRevenueAnalysis.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const revenueData = revenueSlice.reducer;
export const revenueAnalysis = revenueAnalysisSlice.reducer;
