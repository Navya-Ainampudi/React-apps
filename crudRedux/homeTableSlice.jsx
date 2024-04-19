// homeTableSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const fetchHomeTableData = createAsyncThunk(
  'homeTable/fetchData',
  async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      return response.data;
    } catch (error) {
      throw Error(error.response.data.error);
    }
  }
);

export const editUserData = createAsyncThunk(
  'homeTable/editData',
  async (userData) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/${userData.id}`, userData);
      return response.data;
    } catch (error) {
      throw Error(error.response.data.error);
    }
  }
);

export const deleteUserData = createAsyncThunk(
  'homeTable/deleteData',
  async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/users/${userId}`);
      return { id: userId }; // Return deleted user's ID
    } catch (error) {
      throw Error(error.response.data.error);
    }
  }
);

const homeTableSlice = createSlice({
  name: 'homeTable',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeTableData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeTableData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHomeTableData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.data = state.data.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(deleteUserData.fulfilled, (state, action) => {
        state.data = state.data.filter(item => item.id !== action.payload.id);
      });
  },
});

export default homeTableSlice.reducer;
