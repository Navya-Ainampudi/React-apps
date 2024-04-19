
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  formData: {
    fullName: '',
    contactNumber: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  status: 'idle',
  error: null,
};

// Adjust the API endpoint to handle updating the address for an existing user
export const updateAddressForm = createAsyncThunk(
  'address/updateAddressForm',
  async ({ userId, addressData }, thunkAPI) => {
    try {
      const response = await axios.patch(`http://localhost:8000/users/${userId}`, { address: addressData });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressFormData: (state, action) => {
      state.formData = action.payload;
    },
    setAddressStatus: (state, action) => {
      state.status = action.payload;
    },
    setAddressError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAddressForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateAddressForm.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(updateAddressForm.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { setAddressFormData, setAddressStatus, setAddressError } = addressSlice.actions;

export default addressSlice.reducer;
