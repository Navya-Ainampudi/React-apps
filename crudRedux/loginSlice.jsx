import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser=createAsyncThunk(
    'user/login',
    async(userData,{rejectWithValue})=>{
       
        try{
        const response= await axios.get(`http://localhost:8000/users?email=${userData.email}&password=${userData.password}`)
        console.log(response.data,userData)
        if(response.data.length===1 &&response.data[0].Email === userData.email && response.data[0].password === userData.password){
         return response.data[0]
        }else if(response.data.length===0){
            throw new Error('invalid credentials')
        }
        else{
            throw new Error('multiple credentials')
        }
        }
        catch (error){
            console.log(error ,'-----')
        return rejectWithValue(error.message)
        }
    }
)

const loginSlice=createSlice({
    name:'loginUser',
    initialState:{
        loading:false,
        error:null,
        user:null,
        redirectToLogin:false,
    },
    reducers :{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading=true;
            state.error=null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user=action.payload
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading =false;
            state.error=action.payload;
        })
    }
})
export const selectUser = (state) => state.login.user;

export default loginSlice.reducer;