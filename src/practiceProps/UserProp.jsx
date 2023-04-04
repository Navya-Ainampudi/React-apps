import React,{useState} from 'react'
import User from './User'


export default function UserProp() {
    const[name,setName]=useState([])

    const [list,setList]=useState([{id:'1',namee:'navya',tech:'react'},{id:'2',namee:'divya',tech:'ui'}])
    const submitHandler=(e)=>{
        e.preventDefault()
        setName([...list])  
    
    }
    
  return (
    <div>
      <User name={name}/>
      <input type='text' placeholder='user' onChange={(e)=>{setName(e.target.value)}}></input>
      <h2>user:{name}</h2>

      <User> <p>props practice</p> </User>
      <User>
        <button>click on User</button>
      </User>


    
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='id' value={list.id} onChange={(e)=>{setList({...list,id:e.target.value})}}></input>
        <input type='text' placeholder='name' value={list.namee} onChange={(e)=>{setList({...list,namee:e.target.value})}}></input>
        <input type='text' placeholder='tech' value={list.tech} onChange={(e)=>{setList({...list,tech:e.target.value})}}></input>
      <input type='submit'></input>
      </form>
    </div>
  )
}
