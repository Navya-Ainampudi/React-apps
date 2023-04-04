import React, { useMemo, useState } from 'react'

 function multiple (n){
   for(let i=1 ; i<1000; n++){
    n=n*2
    console.log("memo")
    return n
   }
 }
export default function Evaluation() {
const [name,setName]=useState('navya')
const [num,setNum]= useState(0)
const clickHandler=()=>{setNum(num+1)}
 const  calculation= useMemo(()=>multiple(num),[num])
// const calculation = multiple(num)
  return (
    <div>
      <h1>usememo</h1>
      <h2>{num}</h2>
      <button onClick={clickHandler} >click</button>
      <h1>calculation {calculation}</h1>
      <button onClick={()=>{setName('Ainumpudi')}}>click name</button>
      <p>{name}</p>
      
    </div>
  )
}
