import {  Close,  ContactPhoneRounded,  Home,  MenuSharp,  Person, WorkOutline,  } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, MenuList, Slide, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Menubar() {
    const [isOpen,setOpen]=useState(false)
    const containerRef = React.useRef(null);

    const handleClick=()=>{
      setOpen(true)
    }
    const handleCloseMenu=()=>{
      setOpen(false)
    }
  return (
    <div>
      <Button onClick={isOpen? handleCloseMenu:handleClick} style={{display:'flex',color:'whitesmoke',backgroundColor:'grey',width:'60px'}}> {isOpen?<Close/>:<MenuSharp/>}</Button>
    <Slide in={isOpen} container={containerRef.current}>

   {
   
      <MenuList style={{color:'whitesmoke',backgroundColor:'grey',width:'65px',borderRadius:'10px'}}>
      <MenuItem><Link to="/"><Home/></Link></MenuItem>
      <MenuItem><Link to="/about"><Person/></Link></MenuItem>
      <MenuItem>
        <Link to='/portfolio'><WorkOutline/></Link>
      </MenuItem>
      <MenuItem> <Link to="/contact"><ContactPhoneRounded/></Link></MenuItem>
    </MenuList>
    }
    </Slide>
    </div>
  )
}
