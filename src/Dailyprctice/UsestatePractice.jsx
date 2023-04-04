// import React, { Component } from 'react'

// export class UsestatePractice extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//            count:0
//         }
//     }
//     increment=()=>{
       
//     this.setState({count:this.state.count+1})
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.increment}>click{this.state.count}</button>
//             </div>
//         )
//     }
// }

// export default UsestatePractice
import React from 'react'
import { useState } from 'react'

const UsestatePractice = () => {
    const[count,setCount]= useState(0)
    const[name,setName]=useState({fname:'',lname:''})
    // const increment=()=>{setCount((e=>e+1))}
    const fullname = (name.fname+name.lname)
    const{fname,lname}=name
    // const changeHandler=(e)=>{setName({...name,(e.target.name:e.target.value)})}



  return (
    <div>
        <form>
        <input type="text" value={name.fname} onChange={(e)=>setName({...name,fname:e.target.value})}></input> 
        <input type='text'value={name.lname} onChange={(e)=>setName({...name,lname:e.target.value})}></input>
        </form>
        <p>first name={name.fname}</p>
        <p>last name={name.lname}</p>
        <p>{fullname}</p>

      <button onClick={()=>{setCount(count+1)}} >click={count}</button>
      {/* <button onClick={increment}>click{count}</button> */}
    </div>
  )
}

export default UsestatePractice;
