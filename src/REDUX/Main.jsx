import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home';
import Option1 from './Option1';
import Option2 from './Option2';
import Option3 from './Option3';


const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Login/>}></Route>
            <Route path="/home" element={<Home/>} >
            <Route path='/home/:optionId' element={<Option1/>}></Route>
            <Route path='/home/2' element={<Option2/>}></Route>
            <Route path='/home/3' element={<Option3/>}></Route>
            
            
            </Route>
            
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Main
