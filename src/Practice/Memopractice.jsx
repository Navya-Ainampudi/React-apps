import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const  Memopractice=() =>{
    const[one,setOne]=useState(0);
    const[two,setTwo]=useState(0);
    const increment=()=>{setOne(one+1)}
    const incrementTwo=()=>{setTwo(two+1)}
    const even= useMemo(()=>{ 
        let i;
        while( i<=2000000000000000000000); i++;
        return one%2===0},[one])

  return (
    <div>
        <button onClick={increment}>click1-{one}</button>
        <p>{even? 'even':'odd'}</p>
        <button onClick={incrementTwo}>click2-{two}</button>
    </div>
  )
}
export default Memopractice;