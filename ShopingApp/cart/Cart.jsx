import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div className='container-fluid'>
        <div className='row '>
        <header> 
            <Link to ='/home'>
      <h3>back to shopping</h3>
      </Link>
      <hr/>
      </header>
      </div>
    </div>
  )
}
