import axios from 'axios'
import React, { useEffect, useState } from 'react'


const PageNum=({data,PageHandler})=>{
    const pgNum=[]

    for(let i=1;i<Math.ceil(data.length/10);i++){
        pgNum.push(i)
    }
    return(
        <div>
            {pgNum.map((s)=><button style={{display:'inline', padding:'10px'}}onClick={()=>{PageHandler(s)}} >{s}</button>)}
        </div>
    )
}

export default function Pagination() {
    const[page,setPage]=useState([])
    const[pageNo,setPageno]=useState([])
    

    useEffect((e)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{setPage(res.data); setPageno(res.data.slice(0,10))}, console.log(page))
    },[])

   const PageHandler=(pgNum)=>{
    setPageno(page.slice((pgNum*10)-10,pgNum*10))
   }

  return (
    <div>
      <h1>page</h1>
      {pageNo.map((s)=><li key={s.id}>{s.title}</li>)}<br>
      </br>
      <PageNum data={page} PageHandler={PageHandler}/>
    </div>
  )
}
