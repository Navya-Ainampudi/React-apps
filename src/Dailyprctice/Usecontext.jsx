import React,{useState,createContext} from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export const userContext= createContext(null)
export const newContext = createContext("")
function Usecontext() {
  return (
    <userContext.Provider value={"navya"}>
        <newContext.Provider value={'krishna'}>
            <ComponentA/>
        </newContext.Provider>
       react context api
       <ComponentA/>
       <ComponentB/>
    </userContext.Provider>
      
    
  )
}

export default Usecontext
