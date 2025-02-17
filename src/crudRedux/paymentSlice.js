import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  cardData: {
    cardType: '',
    cardHolderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  },
  status: 'idle',
  error: null,
};
export const addCard = createAsyncThunk(
  'payment/addCard',
  async ({userId,paymentData}, thunkAPI) => {
    try {

      const response = await axios.patch(`http://localhost:8000/users/${userId}`, { card: paymentData });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cardData = action.payload;
    },
   
    setPaymentStatus: (state, action) => {
      state.status = action.payload;
    },
    setPaymentError: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.status = 'success';
  
      })
      .addCase(addCard.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { setCards, setPaymentStatus, setPaymentError } = paymentSlice.actions;

export default paymentSlice.reducer;
