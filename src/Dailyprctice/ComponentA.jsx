import React,{useContext, useRef, useState} from 'react';
import { newContext, userContext } from './Usecontext';
import{contextName}from './PracticeContext';


function ComponentA() {
    const user = useContext(userContext);
    const newName= useContext(newContext);
    const name= useContext(contextName);
    const enterName= useRef('')
    const [data,setData]=useState("")
   const changeHandler=(e)=>{setData(e.target.value)}
   const submitHandler=(e)=>{
    e.preventDefault()
    alert(data+newName)
   }
  return (
    <div>
     <p>{user}</p> 
      {newName}
      <form onSubmit={submitHandler}>
        <input type="text" value={data+newName} onChange={changeHandler} ></input>
        <button> submit</button>
      </form>
      <input type='text' value={name} ref={enterName}></input>
    </div>
  )
}

export default ComponentA
