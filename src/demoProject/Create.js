import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Create() {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        const empdata={id,name,email,phone}
        fetch('http://localhost:8000/employee',{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)

        }).then((res)=>{
            alert("sucessfully updated");
            navigate("/")

        }).catch((err)=>{console.log(err.message)})
    }
  return (
    <form className='container' onSubmit={submitHandler}>
        <div className='card'>
            <div className='card-title'>
            <h1> Create employee list</h1>
            </div>
            <div className='card-body' style={{"textAlign":'left'}}>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <div className='form-group'>
                            <label>id</label>
                            <input value={id} onChange={(e)=>{setId(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    
                    <div className='col-8 offset-2'>
                        <div className='form-group'>
                            <label>name</label>
                            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-8 offset-2'>
                        <div className='form-group'>
                            <label>email</label>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-8 offset-2'>
                        <div className='form-group'>
                            <label>phone</label>
                            <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-8 offset-2'>
                        <div className='form-group'>
                            <button className='btn btn-success' type="submit">save</button>
                            <Link to="/" className='btn btn-danger'>back</Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>
      

    </form>
  )
}
