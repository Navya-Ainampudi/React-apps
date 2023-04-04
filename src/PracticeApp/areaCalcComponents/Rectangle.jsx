import { Card, Typography } from '@material-ui/core'
import React, { useState } from 'react'

export default function Rectangle() {
  const [width,setWidth]= useState('');
  const [length,setLength]=useState('');
  const [area,setArea]=useState('');
  const [Diagnal,setDiagnal]= useState('');
  const [areaDiagnl,setAreadiagnl]=useState('');
  const [Perimeter,setPerimeter]=useState('');
  const [areaPerimeter,setAreaperi]=useState('');
   
  const submitHandlerPerimeter=(e)=>{
    e.preventDefault();
    setAreaperi(Perimeter*(length/2)-(length*length))
    if(Perimeter<=(2*length)){
      alert( `perimeter should be greater than 2 X Length`)
    }
    setPerimeter('');
    setLength('');
  }

  const submitHandlerD=(e)=>{
    e.preventDefault();
    setAreadiagnl(length*(Math.sqrt((Diagnal*Diagnal)-(length*length))))
    if (Diagnal<=length){
       alert('Diagnal should greater than length')
    }
    setLength('');
    setDiagnal('');
  }
  // console.log(areaDiagnl)
  const  submitHandler=(e)=>{
    e.preventDefault();
    setArea(width*length)
    setLength('');
    setWidth('');
  }
 
  return (
    <div style={{backgroundColor:'aquamarine', height:'100vh', display:''}}>
      <Typography variant='h5'>Rectangle</Typography>
      <Typography>Enter values for Rectangle Area calculation</Typography>

      <Card style={{backgroundColor:'lightsalmon'}}>
      <Typography>Area of Rectangle when Width & Length are known</Typography>
      <form onSubmit={submitHandler}>
      <input type='text' placeholder='enter width' value={width} onChange={e=>{setWidth(e.target.value)}} ></input>
      <input type='text' placeholder='enter length' value={length} onChange={e=>{setLength(e.target.value)}} ></input>
      <button>submit</button>
      </form>
      <Typography>area of Rectangle: {area}</Typography>
      </Card>
      
      <Card style={{backgroundColor:'lightcoral'}}>
      <Typography>Area of Rectangle when Diagonal & length/width are known</Typography>
      <form onSubmit={submitHandlerD}>
      <input type='text' placeholder='enter diagonal' value={Diagnal} onChange={e=>{setDiagnal(e.target.value)}} ></input>
      <input type='text' placeholder='enter value of side' value={length} onChange={e=>{setLength(e.target.value)}} ></input>
      <button>submit</button>
      </form>
      <Typography>area of Rectangle: {areaDiagnl}</Typography>
      </Card>

      <Card style={{backgroundColor:'lightsalmon'}}>
      <Typography>Area of Rectangle when Perimeter & length/width are known</Typography>
      <form onSubmit={submitHandlerPerimeter}>
      <input type='text' placeholder='enter Perimeter' value={Perimeter} onChange={e=>{setPerimeter(e.target.value)}} ></input>
      <input type='text' placeholder='enter value of side' value={length} onChange={e=>{setLength(e.target.value)}} ></input>
      <button>submit</button>
      </form>
      <Typography>area of Rectangle: {areaPerimeter}</Typography>
      </Card>
     
    </div>
  )
}
