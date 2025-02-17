import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home '>
    <div className='col-6' style={{transform:'translate(10px,190px)'}}>
    <Link to="/Addbday">
        <button className='btn btn-info'>Add Birthday Details</button>
    </Link> <br/> <br/>
    <Link to="/TodayBday">
        <button className='btn btn-info'>Today Bday</button>
    </Link><br/><br/>
    <Link to="/Bdaydetails">
        <button className='btn btn-info'>Birthday Details</button>
    </Link>
    
    </div>
      
    </div>
  )
}
