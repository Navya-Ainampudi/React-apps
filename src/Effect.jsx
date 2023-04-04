import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Effect() {
const[Data,setData]= useState([])


useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{setData(res.data)}, console.log(Data))
},[])

  return (
    <div>
      <h1>use effect</h1>
      {Data.map((s)=> <h4 key={s.id}>{s.name}</h4>)}
      
    </div>
  )
}
