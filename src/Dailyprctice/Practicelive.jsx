// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const baseUrl='https://jsonplaceholder.typicode.com/posts/'
// const Practicelive = () => {
//     // const list =[{name:"aaa",id:1},{name:"bbb",id:2},{name:"ccc",id:3}]
//     const [data,setData]=useState([])
//     useEffect(()=>{axios.get(baseUrl).then(Response=>setData(Response.data),console.log(data))},[])
//     function Createpost (){axios.post(baseUrl,{title:'hello navya'}).then(Response=>setData(Response.data))}
//     function updatepost(){axios.put(baseUrl,{title:'updated post'}).then(Response=>setData(Response.data))}
//     function Deletepost (){axios.delete(baseUrl).then(Response=>setData(''),console.log('data deleted'))}
//   return (
//     <div>
//       {data.map((i)=><li key={i.id}>{i.title}</li>)}
//       <button onClick={Createpost}>click create</button>
//       <button onClick={updatepost}>putPost</button>
//       <button onClick={Deletepost}>delete</button>
//     </div>
//   )
// }

// export default Practicelive
import React, { useState } from 'react'

const Practicelive = () => {
const [input,setInput]=useState([{name:'aaa',age:22,sal:11100},{name:'bbb',age:33,sal:33300},{name:'ccc',age:55,sal:55100}])
const[name,setName]=useState('')
const[age,setAge]=useState()
const[sal,setSal]=useState()
function addData(){
const add=input;
add.push({name:name,age:age,sal:sal})
setInput([...input])
function editdata(e){
    const edit= input;
    edit[e].name=name
    setInput([...input])
}
}
  return (
    <div>
        <form>
            <input type='text' value={name} placeholder='entername' onChange={(e)=>{setName(e.target.value)}}></input>
            <input type='number' value={age} placeholder='enterage' onChange={(e)=>{setAge(e.target.value)}}></input>
            <input type='number' value={sal} placeholder='entersal' onChange={(e)=>{setSal(e.target.value)}}></input>
            <button onSubmit={addData}>add</button>
        </form>
      <table>
        <thead>
            <tr>
                 <th>name</th>
                 <th>age</th>
                 <th>salary</th>
                 <th>options</th>
            </tr>
        </thead>
        <tbody>
            {input.map((s,i)=>{return( <tr>
                <td>{s.name}</td>
                <td >{s.age}</td>
                <td >{s.sal}</td>
                <td>
                <button >edit</button>
                <button>delete</button>
                </td>
            </tr>)})}
        </tbody>
      </table>
    </div>
  )
}

export default Practicelive;
