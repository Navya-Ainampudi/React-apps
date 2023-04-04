import React, {useState, createContext} from 'react';
import ContextComp_a from './ContextComp_a';
import ContextComp_b from './ContextComp-b';

export const myContext= React.createContext();

function ContextPractice() {
    const[task,setTask]= useState([]);
  return (
    <div>
        <myContext.Provider value={[task,setTask]}>
            <h1>Todo management</h1>
            <ContextComp_b/>
            <ContextComp_a/>
            
        </myContext.Provider>
    </div>
  )
}

export default ContextPractice
