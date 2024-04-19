import React, { useState } from 'react';
import SignupForm from './signupForm';
import LoginForm from './loginForm';

const HomeCrud = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false); // Close login form if open
    // window.open('/signup')
  };

  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false); // Close signup form if open
  };

  return (
    <div className='' style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/toy-shopping-cart-with-boxes-credit-card-with-copy-space_339191-197.jpg')`, backgroundSize: 'cover',backgroundPosition:'center',minHeight:'100vh', overflow:'hidden' }}>
      <div>
        <button className='btn btn-secondary' onClick={handleToggleSignup}>
          Sign Up
        </button>
        <button className='btn btn-secondary m-5' onClick={handleToggleLogin}>
          Log In
        </button>
      </div>
      <div className='mt-5' style={{ position: 'relative', left: '420px' }}>
        <div className=''>
          {showSignup && <SignupForm />}
          {showLogin && <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default HomeCrud;
