import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/comments/${id}`);
    return response.data;
  } catch (error) {
    throw Error('Error fetching data');
  }
});

export const updateData = createAsyncThunk(
  'user/updateData',
  async (payload) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/comments/${payload.id}`,
        payload.data
      );
      return response.data;
    } catch (error) {
      throw Error('Error updating data');
    }
  }
);

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
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
