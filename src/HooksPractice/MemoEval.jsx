import React, { useMemo, useState } from 'react'

function fact(n){
    let ans=1
    for(let i =n; i>=1; i--){
     ans=ans*i
         } console.log("memo")
         return ans
}

export default function MemoEval() {
const [count,setCount]=useState(0)
const [num,setNum]=useState(1)
 const ClickHandler=()=>{setNum(num*2)
console.log('click')
}
const changeHandler=(e)=>{setCount(e.target.value)
console.log('onchange')
}
const factorial = useMemo(()=>fact(count),[count]) 
// const factorial=fact(count)
  return (
    <div>
        <h3>useMemo</h3>
        <input type='number' value={count} onChange={changeHandler}></input>
      <h1>{count}</h1>
      <h2>{num}</h2>
      <button onClick={ClickHandler}> click</button>
       <h2>factorail:{ factorial}</h2>
    </div>
  )
}
