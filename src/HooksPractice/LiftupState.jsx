import React, { useState } from 'react'


function CountIncrement ({incrememntClick}){
    return <button onClick={incrememntClick}>increment</button>

}


function Display(props){
   return <h2>display count- {props.name}</h2>
}

function Double({multi}){
  return <>
  <button onClick={multi}>output</button>
  </>
}

export default function LiftupState() {
    const [count,setcount]=useState(0)
    const clickHandler=()=>{setcount(count+1)}
    const CountHandler=()=>{setcount(count*2)}
  return (
    <div>
      <h3>LiftupState </h3>
      <CountIncrement incrememntClick={clickHandler} />
      <Display name={count}/>
      <Double multi={CountHandler}/>
    </div>
  )
}
