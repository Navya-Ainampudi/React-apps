import React from 'react'

export default function PracPagination({data,pageHandler}) {
    const pageNum=[]

    for(let i=1; i < Math.ceil(data.length/2)+1; i++){
       pageNum.push(i)
    }
    console.log(pageNum)
  return (
    <div>
        {pageNum.map((s,i)=><React.Fragment key={i}> <button onClick={()=>(pageHandler(s))}>{s}</button>
        </React.Fragment>)}
      <h1>pagination</h1>
    </div>
  )
}
