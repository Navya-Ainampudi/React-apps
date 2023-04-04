import React, { useRef, useState, useEffect } from 'react'

const PracticeUseEffect = () => {
    const [name,setName]=useState('')
    const num= useRef(0)
    const nameadd=()=>{setName(name+num)}
    //  useEffect(()=>{setName(name+num)})
  return (
    <div>
      <p>{name}={nameadd}</p>
    </div>
  )
}

export default PracticeUseEffect
