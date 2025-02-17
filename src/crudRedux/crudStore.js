import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import loginSlice from "./loginSlice";
import homeTableSlice from "./homeTableSlice";
import toogleSlice from "./toogleSlice";
import productsSlice from './shopHomeSlice'
import addressSlice from "./adressSlice";
import paymentSlice from "./paymentSlice";

export default configureStore({
    reducer:{
        user:userSlice,
        login: loginSlice,
        homeTable:homeTableSlice,
        toogle: toogleSlice,
        products: productsSlice,
        address: addressSlice,
        payment:paymentSlice
    }
})