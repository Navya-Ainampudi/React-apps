import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav>
      <ul>
           <Link to="/home">  <li>home</li></Link>
           <Link to="/about">  <li>about</li></Link>
           <Link to="/Products"> <li>Products</li></Link>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
