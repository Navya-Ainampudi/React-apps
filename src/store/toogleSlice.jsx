import { createSlice } from "@reduxjs/toolkit";


export const toogleSlice=createSlice(
    {
        name:'toogle',
        initialState:{
            isOpen:false
        },
        reducers:{
            toggle:(state,action)=>{
              state.isOpen = !state.isOpen
            }
        }
    }
)
export const {toggle}= toogleSlice.actions;
export const Toogle= (state)=>state.toogle;
export default toogleSlice.reducer;