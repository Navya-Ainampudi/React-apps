import React, { useState } from 'react'
import { addTodo } from './todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import TodoList from './todoList'

const TodoComp = () => {
    const [addtext,setAddtext]=useState('')
 
    const dispatch=useDispatch()
    const submitTodo=(e)=>{
        e.preventDefault()
     dispatch(addTodo(addtext))
     setAddtext('')
    }
    // console.log(todos)
  return (
    <div>
      <h1>todo</h1>
      <form onSubmit={submitTodo}>
      <input type='text' placeholder='enter todo' value={addtext} onChange={(e)=>{setAddtext(e.target.value)}}></input>
      <button type='submit' >Add Todo</button>
      </form>
      <TodoList/>
    </div>
  )
}

export default TodoComp
