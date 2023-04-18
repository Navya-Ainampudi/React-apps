import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComp from './AboutComp';
import ContactComp from './ContactComp';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import ShopApp from './ShopApp';
import Update from './Update';
import Cart from './cart/Cart';

export default function MainShop() {
  return (
    <div>
    
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<ShopApp/>}></Route>
            <Route path='/home' element={<HomeComponent/>}></Route>
            <Route path='/about' element={<AboutComp/>}></Route>
            <Route path='/contact'element={<ContactComp/>}></Route>            
            <Route path='/login' element={<LoginForm/>}> </Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/update/:idS' element={<Update/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          </BrowserRouter>
      
    </div>
  )
}
