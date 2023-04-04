import React, { useContext, useRef } from 'react'
import Child2 from './Child2'
import { newContext2 } from './Praccontext'

export default function Child1() {
 const contxt2= useContext(newContext2)
//  const cntxtref=useRef(contxt2)
  return (
    <div>
      child1
      {/* <input type="text" ref={cntxtref}></input> */}
      {contxt2}
      <Child2/>
    </div>
  )
}
