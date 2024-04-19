import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from './userSlice';

const SignupForm = () => {
    const [formData,setformdata]=useState({
        username:'',
        Email:'',
        password:'',
        confirmPassword:''
    });
    const {loading}= useSelector(state=>state.user)
    const dispatch=useDispatch()
    const handleChange=(e)=>{setformdata({...formData,[e.target.name]:e.target.value})}
    // console.log(formData)
    const handleSubmit=(e)=>{
       e.preventDefault()
       dispatch(signupUser(formData))
       setformdata({ username:'',
       Email:'',
       password:'',
       confirmPassword:''
   })
    }
  return (
    <div>
      <form className='card form-group col-4' onSubmit={handleSubmit}>
      <div className='m-5'>
    
      <h2>Sign up</h2>
        <input className='col-4 form-control mt-3' type='text' name='username' placeholder='User Name' value={formData.username} onChange={handleChange} required></input>
        <input className='col-4 form-control mt-3' type='email' name='Email' placeholder='Email Id' value={formData.Email} onChange={handleChange} required></input>
        <input className='col-4 form-control mt-3' type='password' name='password' placeholder='password' value={formData.password} onChange={handleChange} required></input>
        <input className='col-4 form-control mt-3' type='password' name='confirmPassword' placeholder='confirm password' value={formData.confirmPassword} onChange={handleChange} required></input>
        {/* <button type='sumit'>signup</button> */}
        <button className='col-4 btn btn-info mt-3' type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
        </div>
        
      </form>
    </div>
  )
}

export default SignupForm
