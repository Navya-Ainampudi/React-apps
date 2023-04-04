    import React, { createContext, useRef, useState } from 'react'
import Child1 from './Child1'

   export const newContext1= createContext()
   export const newContext2=createContext()
    export default function Praccontext() {
        const[user,setUser]=useState("")
      return (
        <div>
            <newContext1.Provider value={user}>
                <input type='text' placeholder='user' onChange={(e)=>{setUser(e.target.value)}} ></input>
          <h1>main</h1>
          <newContext2.Provider value='navya'>
          <h3><Child1 /></h3>

          </newContext2.Provider>
          
          </newContext1.Provider>
        </div>
      )
    }
    