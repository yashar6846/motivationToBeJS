import { combineReducers } from 'redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Create an async thunk for fetching data using the PUT method
export const fetchData = createAsyncThunk('data/fetch', async (payload) => {
  const { id, newData } = payload;
  try {
    const response = await axios.post(`http://localhost:3001/data/${id}`, newData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// Create a slice with reducers and actions
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Combine reducers
const rootReducer = combineReducers({
  data: dataSlice.reducer,
});

// export { fetchData };

export default rootReducer;
