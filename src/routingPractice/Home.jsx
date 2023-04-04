import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>home page content</h1>
      <nav class="navbar navbar-default">
  <div class="container-fluid">
        <ul class="nav navbar-nav" style={{flexDirection: 'row'}}>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to= '/home/about'>About</Link></li>
      <li><Link to='/home/contacts'>Contact</Link></li>
      <li><Link to='/register'>Register</Link></li>
      {/* <li><Link to='/edit'>Update</Link></li> */}
      
    </ul>
  </div>
</nav>
<Outlet/>
    </div>
  )
}
