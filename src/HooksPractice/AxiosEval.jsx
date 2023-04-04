import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosEval() {
    const[value,setValue]= useState([])

    useEffect(()=>{
    axios.get(' http://localhost:8000/employee').then((res)=>{setValue(res.data)}, console.log(value))
    },[])

const[data,setData]=useState({id:"",name:"",email:""})

function AddData(){
  axios.post(' http://localhost:8000/employee',data).then((r)=>{ alert('data added to table',console.log(data))})
}

function delData(){
  axios.delete(' http://localhost:8000/employee').then(()=>{setValue(value.splice(1)); alert('delete data')})
  .catch((error)=>{console.log(error)})
}
// const submitHandler=(e)=>{
// e.preventDefault()
// const adddata=data
// adddata.push({name:name,dept:dept})
// setData([...data]);
// }
// useEffect(()=>{setName('')||setDept("")},[data])

// const delHandler=(id)=>{
//    const deldata=data
//    deldata.splice(id,1)
//    setData([...data])
// }
// const editHandler=(id)=>{
//  const editdata=data
// }

  return (
    <div>
      
       <table className='table table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
            {value.map((s,i)=>
            <tr key={s.id}>
             <td >{s.id}</td> 
             <td>{s.name}</td>
             <td>{s.email}</td>
             <td>
                <button onClick={delData}>del</button>
                {/* <button onClick={()=>editHandler(i)}>edit</button> */}
             </td>
             </tr>
             )}   
        </tbody>
       </table>      
       
       <form onSubmit={AddData}>
        <input type='num ' value={data.id} placeholder='id' onChange={(e)=>{setData({...data,id:(e.target.value)})}} ></input>
        <input type='text' value={data.name} placeholder='enter name'onChange={(e)=>{setData({...data,name:(e.target.value)})}}></input>
        <input type='text' value={data.email} placeholder='enter dept' onChange={(e)=>{setData({...data,email:(e.target.value)})}}></input>
        <button>submit</button>
       </form>

    </div>
  )
}
