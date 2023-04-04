import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
  const[data,setData]= useState([{'name':'navya', 'domain':'ui'}]);
  const[name,setName]=useState('');
  const[domain,setDomain]=useState('');
  const[istoogle,setToogle]=useState(false);
  const navigate= useNavigate()

  const addHandler=(s)=>{
    const addData=data;
    addData.push({name:name,domain:domain});
    setData([...data]);
    s.preventDefault()
    // localStorage.setItem("data",JSON.stringify(data))
    setDomain('');
    setName('');
  };

  const delHandler=(i)=>{
    const delData=data;
    delData.splice(i,1)
    setData([...data])
  };
  const editHandler=(i)=>{
    const editData=data;
    let nam= editData[i].name;
    let domn=editData[i].domain;
    // setData([...data])
    setDomain(domn)
    setName(nam)

  };

  return (
    <div className='conainer'>
      <h1>contacts list</h1>
       
      {istoogle? <button className='btn btn-success' onClick={()=>{setToogle(!istoogle)}}>Add</button>:
        <form>
        <label>Name</label>
        <input type='text' placeholder='enter name' value={name} onChange={e=>{setName(e.target.value)}}></input>
        <label>Domain</label>
        <input type='text' placeholder='enter domain' value={domain} onChange={e=>{setDomain(e.target.value)}}></input>
        <button className='btn btn-success' onClick={addHandler}>add</button>
        
      </form>
        }


      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((e,i)=>{
      return(
      <>
      <tr>
      <td  >{e.name} </td>
      <td >{e.domain }</td>
      <td>
       
        
      <button className='btn btn-dark' onClick={()=>editHandler(i)}>Edit</button>
        <button className='btn btn-danger' onClick={()=>delHandler(i)}>delete</button>
      </td>
      </tr>
      </>)
    })}

        </tbody>
      </table>
      <br>
      </br>
      <div>
        <button className='btn btn-dark' onClick={()=>{navigate('/home')}}>back</button>

      </div>
    </div>
  )
}
