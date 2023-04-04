import React, {useRef, useState} from 'react'

function Todolists() {
    const[todo,setTodo]=useState('');
    const[task,setTask]=useState([])
    const date= useRef()
    const changeHandler=(e)=>{setTodo(e.target.value)}
    const submitHandler=(e)=>{
        e.preventDefault();
        // alert(todo)
        const newTodo=[...task,todo];
        setTask(newTodo);
        setTodo("");
    }
    const deleteHandler=(e)=>{
    const newtodo= task.filter((todo,index)=>index!==e);
    setTask(newtodo)
    }

  return (
    <div>
      <h1>Todo List</h1>
      {task.map((td,index)=><div>
        <p key={index}>{td} <button onClick={()=>deleteHandler(index)}>delete</button></p>
      </div>)}
      <form onSubmit={submitHandler}>
        <input type="text" value={todo} onChange={changeHandler} ref={date}></input> 
        <button>add</button>
      </form>
    </div>
  )
}

export default Todolists
