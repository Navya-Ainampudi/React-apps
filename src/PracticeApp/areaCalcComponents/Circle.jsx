import { Card, CardActions, CardContent } from '@material-ui/core';
import { Typography ,Button} from '@mui/material';

import React, { useState } from 'react'

export default function Circle() {
  const [radius,setRadius] = useState('');
  const [area,setArea] =useState('');
  const [diameter,setDiameter]=useState('');
  const [areaD,setAreaD]= useState('');
  const [circum,setCircum]= useState('');
  const [areaCir,setAreaCircum]=useState('');

  const submitHandler1=(e)=>{
    e.preventDefault();
    setAreaCircum((circum*circum)/(4*Math.PI))
    setCircum('');
    setToggle(!istoogle)
  }

  const submitHandlerD=(e)=>{
    e.preventDefault();
    setAreaD((Math.PI*(diameter*diameter))/4);
    setDiameter('')
    console.log(area)
    setToggle(!istoogle)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setArea(Math.PI*(radius*radius));
    setRadius('')
    console.log(area)
    setToggle(!istoogle)
  }
  const [istoogle,setToggle]= useState(false);

  return (
    <div style={{backgroundColor:'powderblue', height:'100vh'}}>
      <Typography variant='h4'>Circle</Typography>
      <Typography>Enter values for Area calculation of Circle</Typography>

      <Card style={{backgroundColor:'lightpink'}}>
        <CardContent>
        <Typography>Area of circle when radius is known</Typography>
        </CardContent>
        <CardActions style={{justifyContent:'center'}}>
            {!istoogle?
             <Button variant='contained' onClick={()=>{setToggle(!istoogle)}} >click</Button>:null
            }

         { istoogle? <form onSubmit={submitHandler}>
          <input type='text' placeholder='enter radius' value={radius} onChange={(e)=>{setRadius(e.target.value)}} autoFocus></input>
          <button style={{backgroundColor:'powderblue'}} >submit</button>
        </form>:null
         }
        </CardActions>
        <Typography>Area of the circle is {area}</Typography>
      </Card>
     
     <Card style={{backgroundColor:'aquamarine'}}>
      <CardContent>
      <Typography>Area of circle when Diameter is known</Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        {!istoogle?<Button variant='contained' onClick={()=>{setToggle(!istoogle)}}>click</Button>:null}
        {istoogle?
        <form onSubmit={submitHandlerD}>
        <input type='text' placeholder='enter Diameter' value={diameter} onChange={(e)=>{setDiameter(e.target.value)}} autoFocus></input>
        <button style={{backgroundColor:'salmon'}}>submit</button>
      </form>:null}
      </CardActions>
      <Typography>Area of the circle is {areaD}</Typography>
     </Card>
     
     <Card style={{backgroundColor:'lightpink'}}>
      <CardContent>
      <Typography>Area of circle when Circumference is known</Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        {!istoogle?<Button variant='contained'onClick={()=>{setToggle(!istoogle)}}>click</Button>:null}
       {istoogle?<form onSubmit={submitHandler1}>
        <input type='text' placeholder='enter Circumference' value={circum} onChange={(e)=>{setCircum(e.target.value)}}autoFocus></input>
        <button style={{backgroundColor:'aquamarine'}}>submit</button>
      </form>:null}
      </CardActions>
      <Typography>Area of the circle is {areaCir}</Typography>
     </Card>
      
    </div>
  )
}
