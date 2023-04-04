import React, { useMemo, useState } from 'react'

function multiplication(n){
    
for(let i=0; i<100; i++){
    n=n+2
    console.log('memo')
}
return n
}

export default function MemoPractice() {
    const [name,setName]=useState('')
    const[num,setNum]=useState(0)
    // let calc=multiplication(num)
    let calc=useMemo(()=>multiplication(num),[num])


  return (
    <div>
        <h3>usememo</h3>
      <form>
        <input type='text' value={name} placeholder='name'onChange={(e)=>{setName(e.target.value)}}></input>
      </form>
      <button onClick={()=>{setNum(num+1)}}>click</button>
        <p>click count:{num}</p>
      <p>name:{name}</p>
      <p>calculation:{calc}</p>
      
      
    </div>
  )
}
