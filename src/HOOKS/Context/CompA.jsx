import React, { Component, useState } from 'react'
import CompA1 from './CompA1'
import CompA2 from './CompA2'
import CompB from './CompB'

export const contextName = React.createContext()

export default function CompA() {
    const [input,setInput]=useState('')
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        <contextName.Provider  value={`hello ${input}`}>
     
        <CompA2 greet={input}/>
        <CompB/>
        </contextName.Provider>
      
    </div>
  )
}
