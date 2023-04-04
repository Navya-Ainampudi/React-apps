import React,{useContext,useState} from 'react'
import ContextPractice, { myContext } from './ContextPractice'
function ContextComp_b() {
  const[task,setTask]= useContext(myContext)
    const changeHandler=(e)=>{setTask(e.target.value)}
// const submitHandler=(e)=>{e.prventDefault();
// }
   
  return (
    <div>
      {/* {task} */}
      <form >
        <input type="text" placeholder="enter task "  onChange={changeHandler}></input>
        <button type="submit" onClick={()=>setTask} >add</button>
      </form>
      
    </div>
  )
}

export default ContextComp_b


