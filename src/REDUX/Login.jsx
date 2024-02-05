import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, selectUser } from '../store/UserSlice';


const Login = () => {
    const [name,setname]=useState('');
    const [mail,setMail] =useState('');
    const [password,setpassword]=useState('');
   
    const navigate= useNavigate()
    const dispatch= useDispatch()
    
const submitHanddler=(e)=>{
 e.preventDefault()
 navigate('/home')
 dispatch(
    login(
    {
        name:name,
        email:mail,
        password:password,

    }
    )
 )
}


  return (
    <div className='col-4 offset-4  p-3 border border-dark rounded' style={{backgroundColor:'lightblue'}}>
     <h1>Login</h1>
      <form onSubmit={submitHanddler}>
        <h5 className='form-label' style={{textAlign:'left'}}>Name</h5>
        <input required type='input'placeholder='Name' className='form-control 'value={name} onChange={e=>setname(e.target.value)}></input>
        <h5 className='form-label' style={{textAlign:'left'}}>Email Id</h5>
        <input required type='email' placeholder='Email Id' className='form-control 'value={mail} onChange={e=>setMail(e.target.value)}></input>
        <h5 className='form-label mt-2' style={{textAlign:'left'}}>Password</h5>
        <input required type='password' placeholder='Password' className='form-control' value={password} onChange={e=>setpassword(e.target.value)}></input>
        <br/>
        <button className='btn btn-primary'>submit</button>
      </form>
      
    </div>
  )
}

export default Login
