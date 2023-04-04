// import React, { useEffect, useRef, useState } from 'react'

// const PracticeRef = () => {
//     const[input,setInput]=useState('')
//     const name=useRef('')
//     useEffect(()=>{name.current=input})
//   return (
//     <div>
//     <form>
//         <input type="text" ref={name}></input>
//         <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
//     </form>
//     <p>current value={input}</p>
//     <p>previous value={name.current}</p>
//     </div>
//   )
// }

// export default PracticeRef
import React, { useRef } from 'react'

export default function PracticeRef() {
    const name= useRef('')
  return (
    <div>
      <input type='text' placeholder='enter name' ref={name}></input>
    </div>
  )
}
