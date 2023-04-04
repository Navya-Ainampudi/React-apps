import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { FaSistrix} from "react-icons/fa";

export default function Sample() {
    const[search,setSearch]=useState([]);
    const[input,setInput]=useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setSearch(res.data)}, console.log(search))
    },[])
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder='search'>
        </input>
        
        <h1>{input}</h1>
      {/* {search.map((s,i)=><li>{s.name}</li>)} */}
      {search.filter((x)=>(x.name).includes(input)).map((s,i)=><li key={s.id}>{s.name}</li>)}
      
    </div>
    
  )
}

