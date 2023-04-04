import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'
import Edit from './Edit'
import Home from './Home'
import Nopage from './Nopage'
import Regestration from './Regestration'

export default function HomePage() {
  return (
    <div>
        <h1>Routing</h1>
        <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/home/about' element={<About/>} />
            <Route path='/home/contacts' element={<Contacts/>} />
              <Route path='/register' element={<Regestration/>} />
            <Route path='/edit' element={<Edit/>}></Route>
            <Route path='*' element={<Nopage/>}/>
        </Routes>
        </BrowserRouter>

        
      
    </div>
  )
}
