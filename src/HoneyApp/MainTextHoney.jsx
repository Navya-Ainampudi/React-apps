import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function MainTextHoney() {
  return (
    <Grid container >
     <Grid item xs={8} md={10} lg={6} textAlign='left'>
     <Grid item xs={12} md={12} sx={{position:'relative'}}>
     <Typography variant='h1'>Essence Of Nature. Delivered.</Typography>
     </Grid>
     <Grid container spacing={1}>
    
      <Grid item xs={12} md={2} lg={1.5}>
        <img src='https://eatsy.bold-themes.com/cupcakes/wp-content/uploads/sites/3/2021/02/home_02_image_01.png' alt='' height='80px'></img>
        </Grid>
        <Grid item xs={12} md={10} lg={9} >
        <Typography >Pure, pesticide-free, Non-GMO, Organic Award-Winning Honey. We will always sell only verified pure, raw, unfiltered, unpasteurized naturally-occurring honey.</Typography>
        </Grid>
     </Grid>
     <br></br>
     <Button  variant="outlined" sx={{color:'#42061e'}}>testimonials</Button>
        <Button variant="contained" sx={{ backgroundColor: '#42061e', color: '#ffffff' }}>order delivery here</Button>
     </Grid>
      
    </Grid>
  )
}
