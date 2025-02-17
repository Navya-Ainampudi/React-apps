import { ShoppingCart } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'
import { Button, Divider, Grid } from '@mui/material'
import React from 'react'

export default function HoneyNavbar() {
  return (
    <div>
    <Grid container spacing={2} sx={{height:'100px', alignItems:'center',textAlign:'left'}}>
      <Grid item xs={1}>
        <img src='https://eatsy.bold-themes.com/cupcakes/wp-content/uploads/sites/3/2021/02/logo_home_02.png' height='50px'></img>
      </Grid>
      <Grid item xs={1} >Home</Grid>
      <Grid item xs={1} >About</Grid>
      <Grid item xs={1} >Shop</Grid>
      <Grid item xs={1} >Blog</Grid>
      <Grid item xs={1} >Recipies</Grid>
      <Grid item xs={6} >
        <Grid container spacing={2} alignItems='center' textAlign='right'>
        <Grid item xs={6} > <Search/> </Grid>
        <Grid item xs={2} textAlign='center'><ShoppingCart/></Grid>
        <Grid item xs={4} >
        <Button variant='contained' color='secondary'>Order delivery here</Button> 
        </Grid>
        </Grid>
      </Grid>
      
    </Grid>
    <Divider variant='middle'></Divider>
    </div>
  )
}
