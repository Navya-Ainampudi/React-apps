import React, { useState } from 'react'

export default function UserList() {
    const [input,setinput]=useState('')
    const [list,setList]= useState([])
    let list1=[]
    const submitHandler=(e)=>{
        e.preventDefault()
       list1=[...list,input]
       setList(list1)
       setinput('')
    }
    const position={
      textAlign:'right',
      color: 'green'
    }
    const[clickPosition,setPosition]=useState({textAlign:'left',
    color:' red'})
    const clickHandler=()=>{
        setPosition(position)

    }
      
   const [istoogle,setToogle]=useState() 
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='input' placeholder='input' value={input} onChange={(e)=>{setinput(e.target.value)}}></input>
            <input type='submit'></input>
        </form>
        {istoogle?<h3>list:</h3>:
        <ul style={clickPosition}>
        {list.map((s,i)=><li className='clickPosition'  style={{position}}  key={i}>{s}
        <span><button  onClick={clickHandler}>click</button></span>
      </li> )}
       </ul>        
        }    
      
    </div>
  )
}
