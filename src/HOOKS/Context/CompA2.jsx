import React, { useContext } from 'react'
import { contextName } from './CompA'
import CompA1 from './CompA1'
import CompB from './CompB'

export default function CompA2(Props) {
    const cons=useContext(contextName)
    // console.log(Props)
  return (
    <div>
        <h2>compA2</h2>
         <h2> welcome {Props.greet}</h2>
        
    </div>
  )
}
