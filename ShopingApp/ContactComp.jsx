import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactComp() {
  const [userdata,setUserdata]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3033/userdata').then((res)=>{setUserdata(res.data)})
    .catch(err=>alert(err))
    
  },[])

  const deleteData=(id)=>{
    axios.delete(`http://localhost:3033/userdata/${id}`).then(res=>{alert('data deleted')})
    axios.get('http://localhost:3033/userdata').then((res)=>{setUserdata(res.data)})
  }

  
  return (
    <div>
      <h1>ContactComp</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>user name</th>
            <th>email</th>
            <th>gender</th>
            <th>country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map(info=>
          <tr key={info.id}>
            <td>{info.id}</td>
            <td>{info.username}</td>
            <td>{info.email}</td>
            <td>{info.gender}</td>
            <td>{info.select}</td>
            <td>
              <Link to={`/update/${info.id}`}>
              <button className='btn btn-success'>update</button>
              </Link>
              
              <button className='btn btn-danger'onClick={()=>deleteData(info.id)} >delete</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
