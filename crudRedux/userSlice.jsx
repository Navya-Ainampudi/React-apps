import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser= createAsyncThunk(
    'user/signup',
    async(userData,{rejectWithValue})=>{
        try{
       const response= await axios.post('http://localhost:8000/users',userData);
       return response.data
        }
        catch (error){
       return rejectWithValue(error.message)
        }
    }
)
const userSlice= createSlice({
    name:'user',
    initialState: {
        loading: false,
        error: null,
        user: null,
      },
      reducers: {},
      extraReducers:(builder)=> {
        builder.addCase
        (signupUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        }).addMatcher
        (signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        }).addMatcher
        (signupUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
      },
})
export default userSlice.reducer