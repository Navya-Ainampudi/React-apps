import React, { useEffect, useRef, useState } from 'react'

export default function UsestatePrac() {
    const[data,setData]=useState({name:"navya ",password:"555"})
    // const{name,password}= data
    const changeHandler=(e)=>{setData({name:'devi', password:"123"})}
         
    const neme = useRef('')
     useEffect(()=>{
        neme.current.focus()
        // neme.current=neme.current+1  
     },) 
      
      
  return (
    <div>
      navya
      {/* <input type='text' value={data.name} ></input><br></br> */}
      {/* <input type="text" value={password}  > </input><br></br> */}
      <h1>name-{data.name}, num-{data.password}</h1>
      <button onClick={(changeHandler)}>submit</button>

      <form>
        <input type='text' ref={neme}></input>
       </form>
       {/* <h1>count={neme.current}</h1>   used to count the no of rendering*/} 
    </div>
  )
}
