import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function SignUp() {
    const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmPassword: '', gender: '', select: '' })
    const { username, email, password, confirmPassword, gender, select } = userData
    const changeHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    
    
    const navigate= useNavigate()
    const Submithandler = (e) => {
        e.preventDefault();
       axios.post('http://localhost:3033/userdata',userData)
       .then(res=>alert('data submitted sucessfully'))
        .catch(err=>console.log(err))
        navigate('/login')
    }
     const emailPatren="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
    
    return (
        <div className='container-fluid hero-bg-img'>

            <div className='row offset-3'>
                <div className='col-6'>
                    <div className='box signup'>
                        <form className='form' onSubmit={Submithandler} >
                            <h1>Signup Form</h1>
                            <div className='form-group'>

                                <label>Username</label>
                                <input type='text'placeholder='Enter username' className='form-control' name='username' value={username} required onChange={changeHandler} />
                                {username&&username.length<=3?<p style={{color:'red'}}>username contain atleast 3 charectors</p>:null}
                                <label>Email</label>
                                <input type='email'  placeholder='Enter Email' className='form-control' name='email' value={email} required onChange={changeHandler} />
                                {email&&!email.match(emailPatren)?<p>email required</p>:null}
                                <label>password</label>
                                <input type='password' required placeholder='Enter password' className='form-control' name='password' value={password} onChange={changeHandler} />
                                {password&&!password.includes("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")?<p>Minimum eight characters, at least one letter, one number and one special character</p>:null}
                                <label> Confirm password</label>
                                <input type='password' required placeholder='Enter password' className='form-control' name='confirmPassword' value={confirmPassword} onChange={changeHandler} />
                                {password!==confirmPassword?<p style={{color:'red'}}>password not matched</p>:null}
                                <label> Gender</label><br></br>
                                <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={changeHandler} />Male

                                <input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={changeHandler} />Female

                                <input type='radio' name='gender' value='others' checked={gender === 'others'} onChange={changeHandler} />Others
                                <br></br>
                                <label>Select country</label>
                                <select name='select' onChange={changeHandler} required>
                                    <option value='country' checked={select==='country'}>country</option>
                                    <option value='india' checked={select === 'country'}>India</option>
                                    <option value='usa' checked={select === 'country'}>USA</option>
                                    <option value='uk' checked={select === 'country'}>UK</option>
                                </select>
                                <br></br>
                                <button className='btn btn-primary' type='submit' onClick={Submithandler} >SignUp</button>

                                
                                <Link to='/login'>
                                    <button className='btn btn-group-justified'>Login instead</button>
                                </Link>
                            </div>
                        </form>

                    </div>

                </div>

            </div>

        </div>


    )
}
