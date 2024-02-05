import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  
  return (
    <div style={{display:'flex'}}>
      <Navbar/>
      <Sidebar/>
      
      <div style={{marginTop:'6%' ,marginLeft:'20%'}}>
      <h1 style={{}}>hiiiiii</h1>
      <Outlet/>
      
      </div>
    </div>
  )
}

export default Home
