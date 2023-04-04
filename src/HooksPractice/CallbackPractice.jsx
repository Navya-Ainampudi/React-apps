import React, { useCallback, useMemo, useState } from 'react'
import Button from './CALLback/Button'
import Count from './CALLback/Count'
import Title from './CALLback/Title'

export default function CallbackPractice() {
  const[age,setAge]=useState(20);
  const[exp,setExp]=useState(0);
   
  const incrmentAge= useCallback(()=>{
    setAge(age+1)
},[age])

  const incrementExp= ()=>{
    setExp(exp+1)
  }

  const memo= useMemo(()=>(incrementExp),[exp])
    
  return (
    <div style={{}}>
      <h1>call back practice</h1>
      <Title/>
      <Count text={age} count="Age"/>
      <Button click={incrmentAge} val='Age'/>
      <Count text={exp} count='Experiance' />
      <Button click={memo} val='Experiance'/>
      
    </div>
  )
}
