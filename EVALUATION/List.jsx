import React from 'react'

export default function List() {
    const list=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <h1>{list.map((s,i)=><li key={i}>{s}</li>)}</h1>
      <h1>list</h1>
    </div>
  )
}
