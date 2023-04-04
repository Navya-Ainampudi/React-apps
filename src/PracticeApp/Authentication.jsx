import React, { useState } from 'react';
import {db} from './FirebaseAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Authentication() {
    const [input,setInput] = useState({email:'',password:''})
    const {email,password}= input;
    const changeHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    
    }
     const signIn=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password).then((res)=>{console.log(res.user)}).catch((err)=>{console.log(err)})
     }
     const signUp=(e)=>{
        e.preventDefault();
        const auth= getAuth()
        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{console.log(res.user)})
        .catch((err)=>console.log(err))
     }
  return (
    <div>
      <h1>Authentication</h1>
      <form>
        <input type='email' placeholder='email' name='email' value={email} onChange={changeHandler}></input><br/><br/>
        <input type='text' placeholder='password' name='password' value={password} onChange={changeHandler}></input><br/><br/>
        <button onClick={signIn}>SignIN</button>&nbsp;
        <button onClick={signUp}>SignUp</button>
      </form>
    </div>
  )
}
