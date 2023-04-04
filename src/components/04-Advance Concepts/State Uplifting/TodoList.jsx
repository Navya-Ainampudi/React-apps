import React from 'react'

const TodoList = (props) => {
  return (
    <ul className='list-group w-50 mx-auto'>
      {props.todos.map((todo) => (
        <li className='list-group-item' key={todo}>{todo}</li>
      ))}
    </ul>
  )
}

export default TodoList