import { Box, Button, Menu, MenuItem, MenuList, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Menubar from './Menubar';

export default function PortfolioHome() {
    const text='navya';
    
  return (
    <div style={ {
        backgroundImage: 'url("https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?w=826&t=st=1704266171~exp=1704266771~hmac=4a344cbefb0b2bf2abdd2e3e75d5fe9cc70a9b90602dbe0e93fbb372763a9cd9")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    height: '100vh',
    }}
    >
    
  <Menubar/>
    
      <div className='col-6' style={{color:"blanchedalmond",textAlign:'left', position :'fixed',top:'220px',left:'50px'}}>
    
    <Typography variant='h6'>  HI THERE !
<Typography  variant='h4' style={{animation: 'typewriter 2s steps(20) 1s 1 normal both'}}>I'M {text}</Typography>
I'm a UI/UX Designer and Developer. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
</Typography>
<Button>
<Link to="about">more about me</Link>
</Button>
</div>
    </div>
  )
}
