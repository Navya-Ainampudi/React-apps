import React, { useState } from 'react'

const HomeCards = () => {
  const [content,setContent]=useState('');
  const [tasks,setTasks]=useState([])
  const handleTasklist=()=>{
    setTasks([...tasks,content])
    setContent('')
  } 
const deleteHandler=(i)=>{
  setTasks(tasks.filter((t,ind)=>ind!==i))
}

  return (
    <div className='container'>
    {/* {content} */}
    {tasks.map((task,i)=><li key={i}>
    {task}
    <button onClick={()=> deleteHandler(i)}>X</button>
    </li>)}
    <input type='text' placeholder='write here ....' value={content} onChange={(e)=>{setContent(e.target.value)}}></input>
    <button onClick={handleTasklist}>save task</button>
    </div>
  )
}

export default HomeCards
