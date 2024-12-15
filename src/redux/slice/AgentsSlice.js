import { createSlice } from '@reduxjs/toolkit';
import { getAgents, getAgentsResidences } from '../Api';

const agentsSlice = createSlice({
  name: 'agents',
  initialState: {
    agents: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAgents.fulfilled, (state, action) => ({
        ...state,
        agents: action.payload?.data?.data,
      }))
      .addCase(getAgents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const agentsResidenceSlice = createSlice({
  name: 'agentsResidence',
  initialState: {
    agentsResidence: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAgentsResidences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAgentsResidences.fulfilled, (state, action) => ({
        ...state,
        agentsResidence: action.payload
      }))
      .addCase(getAgentsResidences.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const agents = agentsSlice.reducer;
export const agentsResidence = agentsResidenceSlice.reducer;
