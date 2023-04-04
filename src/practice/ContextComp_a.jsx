import React,{useContext} from 'react';
import ContextPractice, { myContext } from './ContextPractice';
function ContextComp_a() {
    const[task,setTask]=useContext(myContext)
  return (
    <div>
      Todo Task : {task}
    </div>
  )
}

export default ContextComp_a
