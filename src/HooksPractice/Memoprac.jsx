import React, { useEffect, useMemo, useState } from 'react'

 function fact(n) {
    let ans=1
    for (let i=n; i>=1; i--){
          ans=ans*i
    }console.log("factorial for ",n,"is" ,ans)
         return ans
         
    }
export default function Memoprac() {
 const[name,setName]=useState('')
 const[list,setList]=useState([])
 const submitHandler=(e)=>{
   e.preventDefault()
   let data= {name}
   setList((l)=>[...l,data])
   console.log(list)
   setName('')
 }
 const[num,setNum]=useState(0)
  const clickHandler=()=>{
   let numb=num+1
     setNum(numb)
     console.log(numb)
  };
  
  const calculation= useMemo(()=>fact(num),[num])
//   const calc= useEffect(()=>{fact(num)},[num])
//   fact(num)
  return (
    <div>
        <h1>usememo</h1>
      <form >
      <input name='name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <button onClick={submitHandler}>add todo</button>
            </form>
      <h4>todo: {
        list.map((a,i)=><li key={i} >{a.name}</li>)
        }</h4>
        <button onClick={clickHandler} >num click </button>
        <h3>no of clicks : {num} </h3>
        <h2>factorial of click num : {calculation}</h2>
        {/* <h1>effect square: {calc}</h1> */}
    </div>
  )
}
