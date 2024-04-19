import { createSlice } from "@reduxjs/toolkit";

export const toogleSlice= createSlice({
    name:'toogle',
    initialState: {isToogle:false},
    reducers:{
        tooglState: state => {
            state.isToogle = !state.isToogle
        }
    }
})
export default toogleSlice.reducer;
export const {tooglState}=toogleSlice.actions;