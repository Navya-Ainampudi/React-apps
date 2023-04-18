import React, { useState } from 'react'
import ChildButton from './ChildButton'

export default function ParentCounter() {
    const [count,setcount]=useState(0)
  const increment=()=>{
     setcount(count+1)
  }
  return (
    <div>
        <h1> count from parent component:{count}</h1>
      <ChildButton increment={increment}/>
    </div>
  )
}
