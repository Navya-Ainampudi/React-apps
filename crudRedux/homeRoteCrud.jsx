import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomeCrud from './homeCrud'
import HomeTable from './homeTable'
import SignupForm from './signupForm'
import CartRedux from './cartRedux'
import OrderSummary from './orderSummary'
import { useSelector } from 'react-redux'
import { selectUser } from './loginSlice'

const HomeRoteCrud = () => {
  
  const user = useSelector(selectUser);

  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeCrud/>}></Route>
            <Route path='/signIN' element={<HomeCrud/>} ></Route>
            <Route path='/home' element={user?<HomeTable/>:<Navigate to='/signIN' replace ></Navigate>}></Route>
            <Route path='/cart' element={user?<CartRedux/>:<Navigate to='/signIN' replace ></Navigate>}></Route>
            <Route path='/ordersummary' element={user?<OrderSummary/>:<Navigate to='/signIN' replace ></Navigate>}></Route>
        </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default HomeRoteCrud
