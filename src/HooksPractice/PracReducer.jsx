import React, { useReducer } from 'react'

const firststate={count:0}
function reducer(state,action){
switch(action.type){
    case "add": return ({count:state.count+1});
    case 'decrease':return({count:state.count-1});
    default: Error()

}
}

export default function PracReducer() {
    const[state,dispatch]=useReducer(reducer,firststate)

  return (
    
    <div>
       <h3>useReducer</h3>
        {state.count}
      <button onClick={()=>{dispatch({type:"add"})}}>++</button>
      <button onClick={()=>{dispatch({type:"decrease"})}}>--</button>
    </div>
  )
}
