import React,{useEffect,useState} from 'react';

function UseEffect() {
const [count,setCount]=useState(0);
const[result,setResult]=useState(0)

useEffect(()=>{setResult(()=>count*2);},[count])

  return (
    <div>
     <p> {count}</p> 
      <button onClick={()=>setCount((c)=>c+1)}> click</button>
      <p> result: {result}</p>
    </div>
  )
}

export default UseEffect
