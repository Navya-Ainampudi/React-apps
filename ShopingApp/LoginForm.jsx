import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [loginData,setloginData]=useState({name:'',password:''})
  const {name,password}=loginData;
  const changeHandler=(e)=>{
    setloginData({...loginData,[e.target.name]:e.target.value})
  } 
 const[userdetails,setuserDetails]=useState([])
 useEffect(()=>{
   axios.get('http://localhost:3033/userdata')
   .then(res=>{setuserDetails(res.data)})
   .catch(err=> console.log(err))
 },[])
 
 const[isToogle,setToogle]=useState(true)
   const navigate=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault();
    userdetails.map((user)=>{
      if(name.length===0 && password.length===0){
        alert("enter valid credentials")
      }
      else if(user.username !== name && user.password !== password){
        console('invalid credentials')
      }
      else if(user.username===name&&user.password===password){
        navigate('/home')
      }
      setToogle(!isToogle)
      localStorage.setItem('name',JSON.stringify(name))
      localStorage.setItem('password',JSON.stringify(password))
    })
   
  
   
  }
return (
    <div className='container-fluid hero-bg-img'>
      <div className="row offset-3">
        
        <div className='col-6'>
            <div className='box'>
                <form className='form'>
                    <h1>Login Form</h1>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' placeholder='Enter username'name='name' value={name} onChange={changeHandler} required className='form-control'/>
                        <label>password</label>
                        <input type='password' placeholder='Enter password'name='password' value={password} required onChange={changeHandler} className='form-control'/><br></br>
                        {isToogle? <button className='btn btn-primary' onClick={submitHandler}>Login</button>
                      : <>
                      <button className='btn btn-primary' onClick={submitHandler}>Login</button><br/>
                       <label style={{color:'red'}}> Not a member ?</label>
                        <Link to='/Signup'>
                          <button className='btn btn-primary'> SignUp</button>
                        </Link>
                        </>}
                    </div>
                </form>
            </div>
        </div>
        
      </div>
    </div>
  )
}
