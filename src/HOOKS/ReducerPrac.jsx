import React, { useReducer } from 'react'

const initialstate= {count:0}
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {count:state.count+1}
         case 'dicrement':
            return{count: state.count-1}   
    
        default:
            throw new Error
    }

}

export default function ReducerPrac() {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h3>reducer</h3>
      <h4>count:{state.count}</h4>
      <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
      <button onClick={()=>{dispatch({type:'dicrement'})}} >decrement</button>
    </div>
  )
}
