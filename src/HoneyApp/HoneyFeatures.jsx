import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const HoneyFeatures = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} lg={4} sx={{borderRight:'1px solid black', marginTop:'80px'}}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNJuxdFXvWqLHKKFs9NI48K-hriHsX6-jQA&usqp=CAU' alt='bee' height=''></img>
     <Typography>Our honey is unpasteurized and totally raw. It has no sugars added.</Typography>
    </Grid>


    <Grid item xs={12} lg={4}sx={{borderRight:'1px solid black', marginTop:'80px'}}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ETUVU-Nh7HFWGfZLugYJeA2h4GZuzawAeQ&usqp=CAU' alt='adultration'></img>
    <Typography>It is never mixed with cheap offshore honey.</Typography>
    </Grid>

    <Grid item xs={12} lg={3} sx={{marginTop:'80px'}}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiJIFWySqmWwa5oiNoXqiziiQVzqGCd0zhg&usqp=CAU' alt='comb'></img>
<Typography>It still has naturally-occurring pollen from the bees.</Typography>
    </Grid>
      
    </Grid>
  )
}

export default HoneyFeatures
