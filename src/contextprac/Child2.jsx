import React, { useContext } from 'react'
import { newContext1 } from './Praccontext';



export default function Child2({name}) {
    const n2context=useContext(newContext1)
  return (
    <div>
        {name}

      <p >child2</p>
     <p> FROM PARENT TO CHILD:{n2context}</p> 
    </div>
  )
}
