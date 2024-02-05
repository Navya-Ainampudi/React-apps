import { Email, Facebook, Instagram, LinkedIn, LocationOn, Mail, Message, Person, Phone,  Send,  Twitter } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export default function Contact() {
  const position = {lat: 53.54992, lng: 10.00678};
  const [open,setOpen]=useState(false)
  const locationPopup=()=>{
    setOpen(true)
  }
  const handleClose=()=>{setOpen(false)}
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting current position:', error);
      }
    );
  }, []); 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
   
    
  };
  return (
    <div>
     <Grid container spacing={2} >
     <Grid item xs={12}>
     <Typography variant='h2' fontWeight='700'>GET <span style={{color:'#daa520'}}>IN TOUCH</span></Typography>
     </Grid>
     
     <Grid item xs={4}>
     <Grid container spacing={2}>
     <Grid item xs={12} sm={3}>
     <Menubar/>
     </Grid>
     <Grid item xs={12} sm={6}  >
     <Typography align='start'>Phone <p><Phone style={{color:'#daa520'}}/> 9876543210</p></Typography>
      <Typography align='start'>Email <p><Email style={{color:'#daa520'}}/> navya@gmail.com</p></Typography>
      <Typography align='start'>Location 
      <div onClick={locationPopup}> <LocationOn style={{color:'#daa520'}}/> Hyderabad </div>
      <Modal 
      open={open}
      onClose={handleClose}
      >
     <Box sx={style}> 
     <Button onClick={handleClose} variant='contained' color='secondary'>X</Button>
      <Paper style={{height:'400px',width:'400px',border: '2px solid black' }}>
      <APIProvider apiKey={'AIzaSyAzhOCi-wQdV_ku1EEfVDBEPa_Y2PtjQ2I'}>
      <Map center={currentPosition} zoom={10}>
        <Marker position={currentPosition} />
        
      </Map>
      </APIProvider>
     </Paper>
     
     </Box>
      </Modal>
      </Typography><br/>
      <Typography align='start'>Social Profiles<p style={{color:'#daa520'}}><Twitter /><Facebook/><LinkedIn/><Instagram/></p></Typography>
     </Grid>

     </Grid>
     </Grid>
     <Grid item xs={8}>
     
      <form>
      <Grid container spacing={2} rowSpacing={6}>
      <Grid item xs={12}>
      <Typography>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</Typography> 
       </Grid>
     
     
      <Grid item xs={12} sm={6}>
      <TextField
       InputProps={{
        startAdornment:(<InputAdornment><Person/></InputAdornment>)
       }}
        placeholder='Your Name'
        variant='outlined'
        fullWidth
        sx={{padding:'15px'}}
        >
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}> 
      <TextField
        placeholder=' Your Email'
        variant='outlined'
        InputProps={{
          startAdornment:(<InputAdornment><Mail/></InputAdornment>)
        }}
        sx={{padding:'15px'}}
        fullWidth
        >
        </TextField></Grid>
      <Grid item xs={12} >
      <TextField
      InputProps={{startAdornment:(<InputAdornment position='start'><Message/></InputAdornment>)}}
        placeholder='Your Message'
        multiline
        rows={3}
        fullWidth
        variant='outlined'
        sx={{padding:'15px'}}
        >
        </TextField>
      </Grid>
         <Grid item xs={12}>
        <Button variant='contained' sx={{backgroundColor:' #daa520'}}> <Send/> Send Message</Button>
         </Grid>
         <div style={{height:'1px',width:'1px', border:'5px solid black', backgroundColor:'black', borderRadius:'50px'}}>
          <h1 style={{fontSize:'50px'}}>.</h1>
         </div>
      </Grid>

       
       
      </form>
     </Grid>
     
     </Grid>
    
    </div>
  )
}
