import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Menubar from './Menubar'

export default function Portfolio() {
  return (
    <div>
    <Grid container spacing={2}>

    <Grid item xs={1}>
      <Menubar/>
    </Grid>
    <Grid item xs={10}>
    <Typography variant='h2' fontWeight='700'>MY <span style={{color:'#daa520'}}>PORTFOLIO</span></Typography>
    <Typography>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? <span>EMAIL ME.</span></Typography><br/>
    <Grid container spacing={6}>
    <Grid item xs={12} sm={6}>
      <Paper elevation={3}>
      <Card>
      <CardContent>
      <Typography color='secondary' variant='h6' fontWeight="900">Timesheets Validation</Typography>
      </CardContent>
      <CardMedia
       component="img"
       image='https://www.mouritech.com/wp-content/uploads/2021/10/Logo-Edit-Final-Oct-12.png'
       alt='mouritech logo'
      ></CardMedia>
      <CardActions>
      <Button  variant='contained' color='secondary'>Know MORE</Button>
      </CardActions>
      </Card>
        
      </Paper>
    </Grid>
    
    <Grid item xs={12} sm={6}>
      <Paper elevation={3} >
      <Card>
      <CardContent>
      <Typography color='secondary' variant='h6' fontWeight="900"> SBD Application Retirement </Typography>
      </CardContent>
      <CardMedia component='img'
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stanley_Black_%26_Decker_Logo.svg/2560px-Stanley_Black_%26_Decker_Logo.svg.png'
      alt='SBD LOGO'
      > 
      </CardMedia><br/>
      <CardActions>
      <Button variant='contained' color='secondary'>Know more</Button>
      </CardActions>
      </Card>
      
      </Paper>
    </Grid>

    </Grid><br/><br/><br/><br/><br/>
    </Grid>
   <Grid item xs={12}>
       <Typography variant='h3' fontWeight='900'>MY <span style={{color:'#daa520'}}>BLOGS</span></Typography><br/>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
    <Grid item xs={12} sm={5}>
      <Paper elevation={3} sx={{height:'200px', backgroundImage:'url("https://i.ytimg.com/vi/-UpyigJQ_F4/maxresdefault.jpg")', backgroundSize:'cover'}} >
        <Typography variant='h6' fontWeight="600">Reasearch Journal of Pharmaceutcal Science </Typography>
      </Paper>
    </Grid>
    
    <Grid item xs={12} sm={5}>
      <Paper elevation={3} style={{height:'200px', backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1bjU_cb-GuAYkzYMHO7-E7i6qU7Qs8kYRe3BykfYZIDWkj8_IUTHee4xaGG38bzeudY&usqp=CAU")',backgroundSize:'cover'}}>
      <Typography variant='h6' fontWeight="600"> Design Development and Evaluation of Tenofovir Disoproxil Fumarate Self Emulsifying Drud Delivery System </Typography>
      </Paper>
    </Grid>

    </Grid><br/>

   </Grid><br/>
   <Grid item xs={12} justifyContent='center' alignItems='center'>
       <Typography variant='h3' fontWeight='900'>MY <span style={{color:'#daa520'}}>CERTIFICATIONS</span></Typography><br/>
        <Grid container item spacing={6} justifyContent='center' alignItems='center'>
    <Grid item xs={12} sm={5}>
      <Paper elevation={3}>
        <Typography>AWS</Typography>
      </Paper>
    </Grid>
    
    <Grid item xs={12} sm={5}>
      <Paper elevation={3}>
      <Typography> AWS</Typography>
      </Paper>
    </Grid>

    </Grid>
   </Grid>

    </Grid>
      
    </div>
  )
}
