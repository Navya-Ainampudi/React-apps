import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const{id}=useParams();
    const [empdata,setEmpdata]=useState({})
    useEffect(()=>{
    fetch("http://localhost:8000/employee/",{id}).then((res)=>{
        return res.json();
    }).then ((resp)=>{
    setEmpdata(resp)
    })
    }).catch((err)=>{
        console.log(err.message)
    },[])

  return (
    <div>
        {empdata &&
        <h1>Employee name: <b>{empdata.name}</b></h1>
        }
        
    
    </div>
  )
}
