import React, { useEffect, useState } from 'react'

export default function EffectHook() {
    const[time,setTime]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{setTime(time+1)},1000)
    },[time])
    const [cal,setCal]=useState('')
    useEffect(()=>{let clear=setCal(time*2)
       clearTimeout(()=>clear)
    },[])
  return (
    <div>
      <h4>use effect timer:-{time}</h4>
      <h3>-{cal}</h3>
    </div>
  )
}
