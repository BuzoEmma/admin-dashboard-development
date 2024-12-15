// import { createSlice } from '@reduxjs/toolkit';
// import { getLoans } from '../Api';

// const loansSlice = createSlice({
//   name: 'ads',
//   initialState: {
//    loans: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getLoans.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getLoans.fulfilled, (state, action) => ({
//         ...state,
//        loans: action.payload,
//       }))
//       .addCase(getLoans.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default loansSlice.reducer;
