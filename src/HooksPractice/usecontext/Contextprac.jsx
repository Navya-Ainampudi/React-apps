import React, { createContext } from 'react'
import ContextCompA from './ContextCompA'
import ContextCompB from './ContextCompB';

export const newContext= createContext('')
export default function Contextprac() {

  return (
    <div>
        <h1>Use context practice</h1>
        <newContext.Provider value='navya'>
        <ContextCompA/>
      <ContextCompB />
        </newContext.Provider>
      
    </div>
  )
}
