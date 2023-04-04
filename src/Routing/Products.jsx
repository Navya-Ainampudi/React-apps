import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
    <div>
      {/* <input type="text" placeHolder= "search products"></input> */}
    </div>
    <nav>
        <NavLink to= "/products/new">New</NavLink>
        <li> <NavLink to= "/products/selected">Selected</NavLink></li>
        
    </nav>
    <Outlet/>
    </>
  )
}

export default Products
