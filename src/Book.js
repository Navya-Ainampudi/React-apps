import React, { useReducer } from 'react'
const initialstate={count:0}
const reducer =(state, action)=>{
switch(action.type){
case 'add': return {count:state.count+1}
case 'decrease': return{count:state.count-1}
default : console.error();
}
}
function Book() {
  const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>number: {state.count}</h1>
      <button onClick={()=>{dispatch({type:'add'})}}>+</button><br></br>
      <button onClick={()=>{dispatch({type:'decrease'})}}>-</button>
    </div>
  )
}

export default Book
