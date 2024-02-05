import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Bday.css"
export default function AddBday() {
    const[name,setname]=useState('')
    const [bday,setBday]=useState('')
    const [mail,setMail]=useState('')
    const homepage=useNavigate()
    const submitHanddler=(e)=>{
        e.preventDefault()
        setBday('')
        setname('')
        setMail('')
        console.log('submitted')
        axios.post( ' http://localhost:3011/data',{Name:name,Email:mail,DOB:bday})
        homepage('/')
      }
  return (
    <div className='home'>
      
      <div className='col-4 offset-1 p-3 border border-white shadow  rounded-3 mt-5 Bday' style={{position:'relative',top:'110px'}}>
     <h2 className='shadow'>Add Birthday Details</h2>
      <form onSubmit={submitHanddler}>
        <h5 className='form-label' style={{textAlign:'left'}}>Name</h5>
        <input required type='input'placeholder='Enter Name' className='form-control 'value={name} onChange={e=>setname(e.target.value)}></input>
        <h5 className='form-label' style={{textAlign:'left'}}>Email Id</h5>
        <input required type='email' placeholder='Enter Email Id' className='form-control 'value={mail} onChange={e=>setMail(e.target.value)}></input>
        <h5 className='form-label mt-2' style={{textAlign:'left'}}>Date of birthday</h5>
        <input required type='date' className='form-control' value={bday} onChange={e=>setBday(e.target.value)}></input>
        <br/>
        <button className='btn btn-primary'>submit</button>
      </form>
      </div>
    </div>
  )
}
