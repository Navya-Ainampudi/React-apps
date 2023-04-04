import React,{useReducer} from 'react'


    const firstState={count:0}
    function reducer(state,action){
        switch(action.type){
            case'add': return{count:state.count+1};
            case 'decrease':return{count:state.count-1};
            default: Error()
        }
    }
    function Number (){
    const[state,dispatch]=useReducer(reducer,firstState)

      return (
    <div>
      number:{state.count}
      <button onClick={()=>dispatch({type:'add'})}>add</button>
      <button onClick={()=>dispatch({type:'decrease'})}>decrease</button>
    </div>
  )

  }
export default Number
