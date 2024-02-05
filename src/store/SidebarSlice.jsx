import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice= createSlice({
    name:'sidebar',
    initialState:{
        options:[
            {id:1,name:'Option1'},
            {id:2,name:'Option2'},
             {id:3,name:'Option3'},
             {id:4,name:'Option4'}
        ],
        isOpen:false
    },
    reducers:{
     toogleSidebar: (state)=>{
        state.isOpen = !state.isOpen
     }
    }
})
export const{toogleSidebar}=sidebarSlice.actions;
export const selectNavbar= (state)=>state.sidebar;
export default sidebarSlice.reducer;