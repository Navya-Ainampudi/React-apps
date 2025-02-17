import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import SidebarReducer from "./SidebarSlice";
import  toogleSlice  from "./toogleSlice";
export default configureStore({
    reducer:{
        user:userReducer,
        sidebar:SidebarReducer,
        toogle: toogleSlice,
    }
})
