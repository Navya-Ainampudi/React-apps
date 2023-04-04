import React, { useState } from 'react'

const TrialuseCallback = () => {
const[age,setAge]=useState(22)
const[salory,setSalory]=useState(20000)

function count({t,c}){
    console.log(t,c)
}

const ageHandler=()=>{console.log(setAge(age+1))}
const saloryHandler=()=>{console.log(setSalory(salory+10000))}
  return (
    <div>
        <count t='age' c={age}></count>
     <p>age= {age}</p> 
     <button onClick={ageHandler}>ageincrement</button>
      <p>salary={salory}</p>
      <button onClick={saloryHandler}>salincrment</button>
    </div>
  )
}

export default TrialuseCallback
