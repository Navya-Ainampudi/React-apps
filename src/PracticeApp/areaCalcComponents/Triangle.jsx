import { Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Triangle() {
  const styletriangle={backgroundColor:'powderblue', height:'100vh'};
  const [height,setHight]=useState('');
  const [basevalue,setBasevalue]=useState('');
  const [area,setArea]=useState()
  const [sideA,setSideA]= useState();
  const [sideB,setSideB]=useState();
  const [sideC,setSideC]= useState();
  const [areaValue,setAreaValue]=useState('');
  
  const submitHandler1=(e)=>{
    e.preventDefault();
    alert(`side A ${sideA} , side B ${sideB}, side C ${sideC} submited`);
    const s= (sideA+sideB+sideC)/2;
    if (sideA+sideC>sideB){
      setAreaValue(Math.sqrt(
        s * (s - sideA) * (s - sideB) * (s - sideC)
      ))
      setSideA('');
      setSideB('');
      setSideC('');
    }
   
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    alert(`height ${height} , Base value ${basevalue} submited`)
    setArea(height*basevalue/2)
    setBasevalue('');
    setHight('');
  }
  
  return (
    <div style={styletriangle}>
      <Typography variant='h4' >Triangle</Typography>
      <Typography variant='h5'>Enter values for Triangl Area when you know height & base value</Typography>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter height'  value={height} onChange={(e)=>{setHight(e.target.value)}}></input>
        <input type='text' placeholder='enter base' value={basevalue} onChange={(e)=>{setBasevalue(e.target.value)}} ></input>
        <button>submit</button>
      </form>
      <Typography>Area of triangle is {area}</Typography>


      <Typography variant='h5'>Enter values for Triangl Area when you know All side values</Typography>
      <form onSubmit={submitHandler1}>
        <input type='number' placeholder='enter side A'  value={sideA} onChange={(e)=>{setSideA(Number(e.target.value))}}></input>
        <input type='number' placeholder='enter  Base' value={sideB} onChange={(e)=>{setSideB(Number(e.target.value))}} ></input>
        <input type='number' placeholder='enter side c' value={sideC} onChange={(e)=>{setSideC(Number(e.target.value))}} ></input>
        <button>submit</button>
      </form>
      <Typography>Area of triangle is {areaValue}</Typography>
    </div>
  )
}
