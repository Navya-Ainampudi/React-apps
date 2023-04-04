import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Crud() {
    const[value,setValue]=useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:3010/employee").then((res)=>{setValue(res.data)},console.log(value))
    },[])

    const[input,setInput]=useState({id:'',name:'',technology:''})
    const {id,name,technology}=input
    const changeHandler=(e)=>{setInput({...input,[e.target.name]:e.target.value})}

    const addData=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3010/employee",input).then(()=>{alert('data added to table')})

    }
    const deleteData=(id)=>{
        axios.delete(`http://localhost:3010/employee/${id}`).then(()=>{alert('data deleted')})
        axios.get("http://localhost:3010/employee").then((res)=>{setValue(res.data)},console.log(value))
            }

     const editData =(id)=>{
        axios.put(`http://localhost:3010/employee/${id}`,input).then((e)=>{setValue({[e.target.name]:e.target.value})})
        // axios.get("http://localhost:3010/employee").then((res)=>{setValue(res.data)},console.log(value)) 
        
    }


  return (
      
    <div>
      <h1>crud</h1>
      <form onSubmit={addData}>
        <input type='text' name="id" value={id} placeholder='id' onChange={changeHandler}></input>
        <input type='text' name='name' value={name} placeholder='name' onChange={changeHandler}></input>
        <input type='text' name='technology' value={technology} placeholder='technology' onChange={changeHandler}></input>
        <button>submit</button>
      </form>

      <table className='table table-bordered'>
        <thead>
            <tr> 
            <th>id</th>
            <th>name</th>
            <th>technology</th>
            <th>action</th>
            </tr>
        </thead>
        <tbody>
            {value.map((s,i)=>
            <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.technology}</td>
                <td>
                    <button onClick={()=>editData(s.id)}>edit</button>
                    <button onClick={()=>deleteData(s.id)}>delete</button>
                </td>
            </tr>
            )}
            
        </tbody>
      </table>
    </div>
  )
}
