import React, { useCallback } from 'react'
import { useState } from 'react'
import Increment from './Increment'
import Button from './Button'


export default function Callback() {
   
    const[age,setAge]=useState(55)
    const[salary,setSalory]=useState(50000)
    const incrementage= useCallback(()=>{setAge(age+1) 
        console.log("Age button rendered")},[age]);
    const incrmentSal=useCallback(()=>{setSalory(salary+5000)
    console.log("salary button renderd")},[salary])
  return (
    <div>
      callback
      <Increment text={'age'} num={age}/>
      <Button click={incrementage} value={"age"}/>
      <Increment text={'salory'} num={salary}/>
      <Button click={incrmentSal} value={"salary"}/>
    </div>
  )
}
