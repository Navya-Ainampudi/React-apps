import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function SignUp() {
    const [userData, setUserData] = useState({  username: '', email: '', password: '', confirmPassword: '', gender: '', select: '' })
    const {  username, email, password, confirmPassword, gender, select } = userData
    const changeHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const{idS}=useParams();
    useEffect(()=>{
        axios.get('http://localhost:3033/userdata/'+idS)
        .then(res=>{setUserData({ ...userData,
            username: res.data.username,
            email:res.data.email,
            password: res.data.password,
            confirmPassword:res.data.confirmPassword,
             gender:res.data.gender,
            select:res.data.select})})
        .catch(err=>console.log(err))
    },[])
     const navigate=useNavigate()
    const Submithandler = (e) => {
        e.preventDefault();
        console.log(userData)
       axios.put('http://localhost:3033/userdata/'+idS,userData)
       .then(res=>{})
        .catch(err=>console.log(err))
        navigate('/contact')
    }
    
    return (
        <div className='container-fluid hero-bg-img'>

            <div className='row offset-3'>
                <div className='col-6'>
                    <div className='box signup'>
                        <form className='form' onSubmit={Submithandler} >
                            <h1>Update Form</h1>
                            <div className='form-group'>
                               
                                <label>Username</label>
                                <input type='text' placeholder='Enter username' className='form-control' name='username' value={username} onChange={changeHandler} />
                                <label>Email</label>
                                <input type='email' placeholder='Enter Email' className='form-control' name='email' value={email} onChange={changeHandler} />
                                <label>password</label>
                                <input type='password' placeholder='Enter password' className='form-control' name='password' value={password} onChange={changeHandler} />
                                <label> Confirm password</label>
                                <input type='password' placeholder='Enter password' className='form-control' name='confirmPassword' value={confirmPassword} onChange={changeHandler} />
                                <label> Gender</label><br></br>
                                <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={changeHandler} />Male

                                <input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={changeHandler} />Female

                                <input type='radio' name='gender' value='others' checked={gender === 'others'} onChange={changeHandler} />Others
                                <br></br>
                                <label>Select country</label>
                                <select name='select' onChange={changeHandler}>
                                    <option value='country' checked={select==='country'}>country</option>
                                    <option value='india' checked={select === 'country'}>India</option>
                                    <option value='usa' checked={select === 'country'}>USA</option>
                                    <option value='uk' checked={select === 'country'}>UK</option>
                                </select>
                                <br></br>
                                <button className='btn btn-primary' type='submit' onClick={Submithandler} >Update</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>


    )
}
