import React, { useState } from 'react'

export default function FormTable() {
    const [input,setInput]=useState({name:'',tech:""})
    const{name,tech}=input
    const changeHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const [output,setOutput]=useState([]);
    

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(input)
        
       let list=[...output,input]
        setOutput(list)
        console.log(output)
    }
  return (
    <div>
      <h1>form table</h1>
      <form onSubmit={submitHandler}>
        <input type='text' value={name} placeholder='name' name='name' onChange={changeHandler}></input>
        <input type='text'value={tech} placeholder='tech' name='tech' onChange={changeHandler}></input>
        <input type='submit' ></input>
      </form>

      {output.map((s)=> <li>name:{s.name} , technology:{s.tech}</li>)}
    </div>
  )
}
