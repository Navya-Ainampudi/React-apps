import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Edit from './Edit';

export default function About() {
  
  const[col,SetCol]= useState([]);
const[record,setRecord]= useState([]);


useEffect(()=>{axios.get('http://localhost:8000/employee')
.then((res)=>{
 SetCol(Object.keys(res.data[0]))
 setRecord(res.data)
})
},[]);

const deleteHandler=(id)=>{
  axios.delete('http://localhost:8000/employee'+id).then((res)=>{
          alert('sucesfully deleted')
  })
}
  
  const navigate= useNavigate()
  const clickHandler=()=> {
    alert('moving to registration  page')
    navigate("/register")
  }
  const editHandler=()=>{
    alert("move to edit page to update")
    navigate("/edit")
  }
  return (
    <div>
            <h1>read more about page in link</h1>
      <button onClick={clickHandler} className='btn btn-primary'>Add data</button>
     <div className='container'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            {col.map((s,i)=>(
                <th key={i}>{s}</th>
            ))}
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          
            {record.map((r,i)=>(
              <tr key={r.id}>
              <td >{r.id}</td>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>
                <Link to='/edit' element={<Edit/>} className='btn btn-dark' onClick={editHandler}>edit</Link>
                <button className='btn btn-danger'onClick={e=>deleteHandler(r.id)}>delete</button>
              </td>
              </tr>
            ))

            }
        </tbody>
      </table>
      </div>

    </div>
  )
}
