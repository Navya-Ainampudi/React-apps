import { Button, ButtonGroup, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SearchIcon from '@mui/icons-material/Search';
import { FormatBold, FormatItalic, Group, MoreVert, Password, RemoveRedEye, Visibility } from '@mui/icons-material';


const WHome = () => {
const [format,setFormat]=useState([])
const handlfomatChange=(e, v)=>{
  setFormat(v)
}
console.log(format)
  return (
    <div style={{height:'100px',width:'100vw',backgroundColor:''}}>
      <Stack spacing={3} display='block' direction='row'>
       <Typography variant='h4' align='left'>WebApp</Typography>
       <CameraAltIcon/>
       <SearchIcon/>
       <MoreVert/>
     </Stack>
      
     <Stack spacing={2} direction='row'>
     
      <Button variant='contained' color='secondary' startIcon={<Group/>} disableRipple>groups</Button>
      <Button>chats</Button>
      <Button>updates</Button>
      <Button>calls</Button>
      <TextField label='Password' type='password' autoFocus variant='filled' color='secondary' required
       InputProps={{endAdornment: <InputAdornment position='end' variant='outlined'><Visibility/></InputAdornment>}}/>
     </Stack>

     {/* <Stack>
      <ToggleButtonGroup value={format} onChange={handlfomatChange}>
        <ToggleButton value='bold'><FormatBold/></ToggleButton>
        <ToggleButton value='italic'><FormatItalic/></ToggleButton>
      </ToggleButtonGroup>
     </Stack> */}
    </div>
  )
}

export default WHome
