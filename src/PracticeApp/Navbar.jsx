import React from 'react'

export default function Navbar() {
const navstyle={
  display:'flex',
  listStyle:'none',
  justifyContent:'spaceBetween',
  margin:'0 10px',
  alignItems:"right",
  color:'navy'
}

  return (
    <div>
      <nav>
        <ul className='nav' style={navstyle}>
        <li>home</li>
        <li>about</li>
        </ul>
      </nav>
    </div>
  )
}
