
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const[empdata, setEmpdata]=useState(null);
  const navigate=useNavigate()
  useEffect(()=>{
    fetch("http://localhost:8000/employee").then((res)=>{return res.json();
  }).then((resp)=>{
    setEmpdata(resp)
  }).catch((err)=>{
    console.log("err.message")
  })
  },[]);

  const editHandler=(id)=>{
    navigate("/employee/edit/"+id)
  };

  const removeHandler=(id)=>{
    fetch('http://localhost:8000/employee'+id,{
      method:"DELETE"
        }).then((res)=>{
      alert("sucessfully deleted");
      window.location.reload()

  })

  };

  const detailsHandler=(id)=>{
    navigate("/employee/details/"+id)
  }
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'> <h1>emplyee listing</h1></div>
        <div className='card-body'>
          <div>
            <Link to="employee/create" className='btn btn-success'> add new</Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>phone</td>
                <td>action</td>
              </tr>
            </thead>
            <tbody>
              {empdata && empdata.map((i)=>(
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>
                  <button onClick={()=>{editHandler(i.id)}} className='btn btn-success'>edit</button>
                  <button onClick={()=>{removeHandler(i.id)}} className='btn btn-danger'>remove</button>
                  <button onClick={()=>{detailsHandler(i.id)}} className='btn btn-success'>details</button>
                  </td>

              </tr>))}
            </tbody>
          </table>
        </div>

      </div>
      
    </div>
  )
}
