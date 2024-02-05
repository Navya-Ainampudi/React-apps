import React from 'react'
import PortfolioHome from './PortfolioHome'
import AboutPage from './AboutPage'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function HomePagePortfolio() {
  return (
    <div>     
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<PortfolioHome/>}></Route>
            <Route path='about' element={ <AboutPage/>} ></Route>
            <Route path='portfolio' element={<Portfolio/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
