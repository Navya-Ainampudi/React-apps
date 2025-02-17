import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddBday from './AddBday'
import "./Bday.css"
import Bdaydetails from './Bdaydetails'
import BirthdayForm from './BirthdayForm'
import Home from './Home'
import TodayBday from './TodayBday'
export default function BdayHome() {
  return (
    <div>
      {/* <BirthdayForm/> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='Addbday' element={<AddBday/>}></Route>
            <Route path='TodayBday' element={<TodayBday/>}></Route>
            <Route path='Bdaydetails' element={<Bdaydetails/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
