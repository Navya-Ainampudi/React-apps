import React, { useEffect } from 'react'
import counterSlice, { decrement, increment } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count= useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
    
  return (
    <div>
      <h1>counter</h1>
      <h6>{count}</h6>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())} >decrement</button>
    </div>
  )
}

export default Counter
