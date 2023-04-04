import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const [data,setData]=useState([])
 
    // useEffect(()=>{
    //     axios.get('http://localhost:8000/employee').then((res)=>{setData(res.data)

    //     })
    // },[]);
      
    function AddData(e){
        e.preventDefault()
        axios.post('https://console.firebase.google.com/project/navya-4df3f/database/navya-4df3f-default-rtdb/data/~2F/register',input).then(()=>{alert("sucessfully added")})
    }
    
    // function delData(){
    //     axios.delete(`http://localhost:8000/employee`).then((res)=>{setData(null)})
    // }


 const [input,setInput]=useState({})

  return (
    <div>
        {data.map((s,i)=>
    <h1 key={s.id}>{s.name}</h1>
        )}
        <form onSubmit={AddData}>
        <input type='text' placeholder='name' onChange={(e)=>(setInput({...input,name:(e.target.value)}))}></input>
        <button>submit</button>
        </form>
         {/* <button onClick={delData}>delete</button> */}
    </div>
    
  )
}
