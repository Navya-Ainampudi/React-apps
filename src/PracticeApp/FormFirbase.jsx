import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PracPagination from './PracPagination';
import { getAuth, signOut } from 'firebase/auth';



export default function FormFirbase() {
    const [data,setData]=useState({name:'',email:'',password:'',confirmpassword:'',select:''});
    const {name,email,password,confirmpassword,select}=data;
     const changeHandler=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
     }
    

     const submitHandler=(e)=>{
        e.preventDefault();
        //console.log(data);
      axios.post('https://navya-1b961-default-rtdb.firebaseio.com/formdata.json',data)
      .then((res)=>{alert('submited')})
      
      setData({name:'',email:'',password:'',confirmpassword:''})
//     
     }
     const [input,setInput]=useState({})
     const [perpage,setPerpage]=useState([])
     useEffect(()=>{
      axios.get('https://navya-1b961-default-rtdb.firebaseio.com/formdata.json').then((res)=>{setInput(res.data)
       setPerpage(Object.values(res.data).slice(0,2))})
     },[])
      console.log(perpage)
      
     const pageclick=(page)=>{
      setPerpage(Object.values(input).slice(page*2-2,page*2))
     }
        
     const signoutclick=(e)=>{
      const auth= getAuth()
      signOut(auth)
     }
    
    
  return (
    <div>
      <button onClick={signoutclick}>signout</button>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='name' name='name' value={name} onChange={changeHandler}></input>
        <br></br>
        <input type='email' placeholder='email' name='email' value={email} onChange={changeHandler}></input>
        <br></br>
        <input type='password' placeholder='password' name='password' value={password} onChange={changeHandler}></input>
        <br></br>
        <input type='password' placeholder='confirm password' name='confirmpassword' value={confirmpassword} onChange={changeHandler}></input>
        <br></br>
        <label>select origin</label>
        <select value={select} name='select'  onChange={changeHandler}>
          <option >state</option>
          <option >telangana</option>
          <option >AP</option>
        </select>
       
        <br></br>
        <button>submit</button>
      </form>
      <br></br>
      {Object.keys(perpage).map((s,i)=>
      <div className='container-fluid' key={i}>
        <div className='row offset-3'>
          <div className='col-8'>
            <div className='card'>
                
              <ul key={i} style={{listStyle:'none'}} >
                  <li>{perpage[s].name}</li>
                  < li>{perpage[s].email}</li>
                  < li>{perpage[s].select}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}
      <br></br>
      <PracPagination data={(Object.keys(input))} pageHandler={pageclick}/>
      
    </div>
  )
}
