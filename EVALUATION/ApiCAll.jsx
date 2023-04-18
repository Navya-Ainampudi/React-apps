import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiCAll() {
    const [ApiData,setApidata]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{setApidata(res.data)})
    },[])
    console.log(ApiData)
  return (
    <div>
      <h4>Api Data title</h4>{ApiData.map(data=><p>{data.title}</p>)}
    </div>
  )
}
