import React, { useState } from 'react'

export default function Toogle() {
    const[istoogle,setToogle]=useState(true)
  return (
    <div>
      <button onClick={()=>(setToogle(!istoogle))}>click</button>
      {istoogle?<p>form</p>:<h1>home</h1>    }
    </div>
  )
}
