import axios from 'axios';
import React, { useState } from 'react'

export default function Regestration() {
  const[data,setData]=useState({id:"",name:"",email:'',phone:""});
  const submitHandler=(e)=>{
       e.preventDefault()
       axios.post('http://localhost:8000/employee',data).then((res)=>{
        alert("successfully added")
         })
  }
  
 return (
    <div>
      <h1>register here        </h1>
      <form onSubmit={submitHandler}>
      <label>id</label>
        <input type='text' placeholder='id' onChange={(e)=>{setData({...data,id:(e.target.value)})}}></input>
        <label>Name</label>
        <input type='text' placeholder='name'  onChange={(e)=>{setData({...data,name:(e.target.value)})}}></input>
        <label>email</label>
        <input type='email' placeholder='email'  onChange={(e)=>{setData({...data,email:(e.target.value)})}}></input>
        <label>phone</label>
        <input type='phone' placeholder='phone'  onChange={(e)=>{setData({...data,phone:(e.target.value)})}}></input>
        <button className='btn btn-primary'>submit</button>
      </form>
    </div>
  )
}
