import React, { Fragment } from 'react'
import "../ShopingApp/ShopApp.css"
import logo from '../ShopingApp/logo.png'
import { Link, NavLink } from 'react-router-dom'

export default function ShopApp() {
  
  return (
   
    < >
     
    <div className='hero-bg-img '>

    <section className='hero-navbar-section'>
        <div className='navbar-sec'>
      
        <nav className='navbar1'>  
        <img src={logo} className='nav-img-logo'/>
        <ul className='navright'>
         <Link to='/home'>Home</Link>
         <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        </ul>   
        </nav>
        </div>
      
      </section>
      
        <div className='hero-sect-app'>
           <h1>ShopingApp</h1>
           <div className='hero-secn-btns'>
            <Link to='/login'>
            <button className='btn btn-group-justified hero-btn-login'>Login</button>
            </Link>
           <Link to ='/signup'>
           <button className='btn btn-group-justified hero-btn-login'>Signup</button>
           </Link>
           
           </div>
          
        </div>
        
       </div>
       
       
    </>
 
  
  )
}
