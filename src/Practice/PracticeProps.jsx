
import React from 'react'
import { useState } from 'react'

export default function PracticeProps() {
  const[name,setName]= useState('navya')
  const [change,setChange]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    setName(change)  
  }
  return (
    <div>
      <h1>name-{name}</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeHolder='entername'  onChange={(e)=>{setChange(e.target.value)}}></input>
        <input type='submit' value='submit'></input>
      </form>
    </div>
  )
}
