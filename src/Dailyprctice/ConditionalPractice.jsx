import React, { useState } from 'react'
import Forms from '../practice/Forms'

function ConditionalPractice(props) {
    const[data,setData]=useState('true')
// const islogin= props.islogin;
// if(islogin){
// return <Forms/>
// }
//   return <p>plz login</p>
const logHandler=()=>{setData(false)}
// const date=(d)=>{d.toLocaleString()}
return(
    <div>
        <button onClick={logHandler} >plz login</button>
        {/* <Forms/> */}
        {/* <p>date={date}</p> */}
        
    </div>
)

}
  
  
  
  
    export default ConditionalPractice;
