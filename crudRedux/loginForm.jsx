import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './loginSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async e => {
    e.preventDefault();
    try {
      const response = await dispatch(loginUser(loginData));

      console.log(response)
      if (response.meta.arg.email)
      navigate('/home');
    } catch (error) {
      console.error('login failed');
    }
  };

  return (
    <div>
      <form className='card form-group col-4' onSubmit={handleLoginSubmit}>
        <div className='m-5'>
          <h2>Login Form</h2>
          <input className='col-4 form-control mt-3' type='email' name='email' placeholder='Email' value={loginData.email} onChange={handleLogin}></input>
          <input className='col-4 form-control mt-3' type='password' name='password' placeholder='Password' value={loginData.password} onChange={handleLogin}></input>
          <button className='col-4 btn btn-primary mt-3' type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
