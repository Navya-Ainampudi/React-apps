import React, { useEffect, useState } from 'react'

export default function UseIncrement() {
  const[num,setNum]= useState(0)
  useEffect(()=>{
    setTimeout(()=>{setNum(num+1)},1000)
      })
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}
