import React, { useEffect, useRef, useState } from 'react'
import ChildButton from './ChildButton'

export default function Parent() {
    const [count,setCount]= useState(0)
    const clickHandler=()=>{
        setCount(count+1)
    }
    const [name1,setName1]=useState('')
    const [name2,setName2]=useState('')
    const nameref=useRef('')
    const list=[]
    useEffect(()=>{
        
        
    })
    nameref.current=name1+name2
    const list2=[]
    const submitHandler=(e)=>{
      e.preventDefault()
      console.log(nameref.current)
      setName1('')
      setName2('')
     list.push(nameref.current)
    //  console.log(list)
     list2.push(...list,nameref.current)
     console.log(list2)
    }
  return (
    <div>
      <ChildButton click={clickHandler}/>
      <p>no of clicks:{count}</p>
      
      
      <form onSubmit={submitHandler}>
      <input type='text' value={name1} placeholder='name' onChange={(e)=>{setName1(e.target.value)}}></input>
      <input type='text' value={name2} placeholder='name' onChange={(e)=>{setName2(e.target.value)}}></input>
      <button>submit</button>

      </form>
      <p>ref:{nameref.current}{list.map((s)=><li>{s}</li>)}</p>

      
    </div>
  )
}
