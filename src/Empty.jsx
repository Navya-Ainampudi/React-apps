import React from 'react'

const Empty = () => {
    const sidebarlist=['opt1','opt2','opt3']
  return (
    <div style={{backgroundColor:'black',height:'100vh',width:'100px'}}>
    {
        sidebarlist.map(e=><li style={{color:'white'}}>{e}</li>)
    }
    </div>
  )
}

export default Empty
