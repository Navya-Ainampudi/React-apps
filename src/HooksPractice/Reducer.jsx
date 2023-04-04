import React, { useReducer } from 'react'

const initialstate= {count:'number : '}
const reducer=(state,action)=>{
switch(action.type){
    case 'add': return{count:state.count+1};
    case 'decrease': return{count:state.count-1};
    default: Error()
}

}

export default function Reducer() {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>usereduce practice</h1>
      <h2>{state.count}</h2>
      <button onClick={()=>{dispatch({type:'add'})}}>increase</button>
      <button onClick={()=>{dispatch({type:'decrease'})}} >decrease</button>
    </div>
  )
}
