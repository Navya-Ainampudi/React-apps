import { Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Polygonal() {
  const [side,setSide]= useState('')
  const [area,setArea]= useState('');
  const [diagonal,setDiagonal]=useState('');
  const [areaDiagonal,setAreadiagonal]=useState('');
  const [perimeter,setPerimeter]=useState('');
  const [areaPerimeter,setAreaperi]=useState('');
  
  const submitHandlerperi=(e)=>{
    e.preventDefault();
    setAreaperi((perimeter*perimeter)/16);
    setPerimeter('')
  }

  const submitHandlerD=(e)=>{
    e.preventDefault();
    setAreadiagonal((diagonal*diagonal)/2);
    setDiagonal('')
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setArea((side*side));
    setSide('')
  }
  return (
    <div>
      <Typography variant='h4'>Square</Typography>
      <Typography>enter value of square side for Area calculation</Typography>
      <form onSubmit={submitHandler}>
      <input type='text' placeholder='enter side' value={side} onChange={(e)=>{setSide(e.target.value)}}></input>
      <button>submit</button>
      </form>
      <Typography>Area of the Square: {area}</Typography>


      <Typography>enter value of diagonal for Area calculation</Typography>
      <form onSubmit={submitHandlerD}>
      <input type='text' placeholder='enter Diagonal' value={diagonal} onChange={(e)=>{setDiagonal(e.target.value)}}></input>
      <button>submit</button>
      </form>
      <Typography>Area of the Square: {areaDiagonal}</Typography>

      <Typography>enter value of Perimeter for Area calculation</Typography>
      <form onSubmit={submitHandlerperi}>
      <input type='text' placeholder='enter Perimeter' value={perimeter} onChange={(e)=>{setPerimeter(e.target.value)}}></input>
      <button>submit</button>
      </form>
      <Typography>Area of the Square: {areaPerimeter}</Typography>
    </div>
  )
}
