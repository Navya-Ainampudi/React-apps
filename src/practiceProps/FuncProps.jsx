import React, { useState} from 'react'

function Butn({handleClick,name}){
    
    return(
        <>
         <button onClick={handleClick}>{name='click'}</button>
         
        </>
    )

}

export default function FuncProps() {
    const [data,setData]=useState('navya')
        const clickHandler=()=>{setData(data+"1")}
    
  return (
    <div>
        <Butn handleClick={clickHandler}>name
        </Butn>
    <h1>{data}</h1>
    </div>
  )
}
