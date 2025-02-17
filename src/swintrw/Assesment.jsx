import React, { useState } from 'react'

const Assesment = () => {
    const [input,setInput]=useState('');
    const[todos,setTodos]=useState([])
    const submitHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos,input])
        setInput("")
    }
  return (
    <div>
    <h4>task:
    {todos.map((todo,i)=><li key={i}>{todo}</li>)}

    </h4>
      <form onSubmit={submitHandler}>
        <input type='text' value={input} placeholder='enter todo...' onChange={(e)=>{setInput(e.target.value)}}></input>
        <button>Add Task</button>
      </form>
     
    </div>
  )
}

export default Assesment
