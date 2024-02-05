import axios from 'axios';
import React, { useState } from 'react'

export default function NodeCrud() {
    const [id,setid]=useState('')
    const [name,setname]=useState('');

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/",{id,name})
       setid('')
       setname('')
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
    <label>ID</label>
        <input type='text' value={id} onChange={(e)=>{setid(e.target.value)}}></input>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}}></input>
        <button >submit</button>
    </form>
      
    </div>
  )
}
