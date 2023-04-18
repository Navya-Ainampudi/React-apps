import { blue } from '@mui/material/colors'
import React, { useState } from 'react'

export default function Boxcolors() {
    const [color,setColor]=useState('')
   const styleObj= {margin :'5px',
border:'10px solid black',
height:'400px',
width:'400px',
backgroundColor:color
}

// const ar= ['blue','green','yellow','RED','PINK','DARKGREEN','SALMON'];
const getRGB=()=>{
  const v=  Math.floor(Math.random()*255)
  return v
}
  
const colorChangeHandler=()=>{
    const R= getRGB()
    const G= getRGB()
    const B= getRGB()
    const rgb= `rgb(${R},${G},${B})`
    console.log(rgb)
    
setColor( rgb)

}
console.log(color)
  return (
    <button style={styleObj} onClick={colorChangeHandler}> 
      Boxcolors
    </button>
  )
}
