
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
  products: [],
  status: 'idle',
  error: null,
  cart:[]
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const { id, title, price,image,category } = action.payload;
        const existingItemIndex = state.cart.findIndex((item) => item.id === id);

        if (existingItemIndex !== -1) {
          // If item already exists in cart, create a new array with updated quantities
          state.cart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1,totalprice:item.totalprice+price } : item
          );
        } else {
          // If item is not in cart, add it to cart array with quantity 1
          state.cart.push({ id, title, price,image,category, quantity: 1,totalprice:price });
        }
      },
      removeFromCart: (state, action) => {
        const idToRemove = action.payload;
        state.cart = state.cart.filter((item) => item.id !== idToRemove);
      },
      incrementQuantity: (state, action) => {
        const item = state.cart.find(item => item.id === action.payload);
        if (item) {
          item.quantity++;
          item.totalprice=item.quantity*item.price
        }
      },
      decrementQuantity: (state, action) => {
        const item = state.cart.find(item => item.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity--;
          item.totalprice=item.quantity*item.price
        }
      },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = productsSlice.actions;
export default productsSlice.reducer;


export const selectCartProductsCount = createSelector(
  state => state.products.cart,
  cart => cart.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector(
  state => state.products.cart,
  cart => cart.reduce((total, item) => total + item.totalprice, 0)
);