import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nopage() {
    const navigate=useNavigate()
  return (
    <div>
      <h1> page was not found</h1>
      <button onClick={()=>{navigate(-1)}}>back</button>
    </div>
  )
}
