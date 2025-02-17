import { ArrowBackSharp, CircleOutlined, CircleRounded, Download } from '@mui/icons-material'
import { Box, Typography, Card, Paper, Grid, Button, Divider, Stepper, Step, StepLabel, StepIcon, StepContent, Slider, FormControl, InputLabel, Input, InputAdornment } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Menubar from './Menubar'

export default function AboutPage() {
  const steps = [ {label:'2022-2024',desc:'Mouritech'},{label:'2016-2022',desc:'NATCO Pharma ltd'}];
  const Education = [{label:'2014-2016',desc:'M.pharmacy - Bapatla college of pharmacy'}, {label:'2010-2014',desc:'B.pharmacy- Hindu college of Pharmacy'}];
  const downloadresume=()=>{
    const fileUrl = process.env.PUBLIC_URL + '/MT_Navya krishna_React Developer.pdf';

    // Create a download link
    const link = document.createElement('a');
    link.href = fileUrl;

    // Set the download attribute to specify the filename
    link.download = '/MT_Navya krishna_React Developer.pdf';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  }
  return (
    <div className="" style={{    overflowX:'hidden',}}>
    {/* <div style={{display:'flex'}}><Link to="/"><ArrowBackSharp/></Link></div> */}
    <Typography variant='h4' style={{fontWeight:'900',fontSize:'55px',color:'#555'}}>ABOUT ME <br/></Typography>
     <Divider style={{opacity:'0.9'}}>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</Divider>
     <Box style={{position:'absolute', top:'1px'}}><Menubar/> </Box>
     <br/>
     <Grid container spacing={2} margin='20px'>
     <Grid item xs={5}>
      <Paper style={{height:"400px" , border:'6px solid #daa520',marginLeft:'50px', backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizPVODquL9YnaosfI-jL8A8atNiky00_Maw&usqp=CAU)", backgroundSize:'cover'}}>
      {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizPVODquL9YnaosfI-jL8A8atNiky00_Maw&usqp=CAU'></img> */}
      </Paper>
     </Grid>
     <Grid item xs={6}>
     <Grid container spacing={2}>
      <Grid item xs={6}>
      <Typography variant='h6'> First Name <p>Navya</p></Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='h6'> Last Name <p>Ainumpudi</p></Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='h6'> Nationality <p>India</p></Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='h6'> Experience <p>2</p></Typography>
      </Grid>
      <Grid item xs={6}>
      <Typography variant='h6'> Phone <p>1234567890</p></Typography>    
      </Grid>
      <Grid item xs={6}>
     <Typography variant='h6'> Mail <p>Navya@gmail.com</p></Typography>  
     </Grid>
     <Grid item xs={6}>
     <Typography variant='h6'> Address <p>Hyderabad</p></Typography>
     </Grid>
     <Grid item xs={6}>
     <Typography variant='h6'> Language <p>English</p></Typography>    
     </Grid>
     <Grid item xs={12}>
     <Button variant='contained' onClick={downloadresume} style={{backgroundColor:'#daa520'}}><Download/> Download CV</Button>
     </Grid>
     </Grid>
     </Grid>
     </Grid>
     <br/>
     <Divider variant='middle'/>
     <br></br>
<Grid container spacing={2} margin='20px'>
<Grid item xs={6}>
<Paper>
<Typography variant='h5' align='left'>Experience</Typography>
<Stepper orientation='vertical' >
      {steps.map((label,i)=>(
        <Step key={i} >
        <StepLabel 
        StepIconComponent={()=>{}}
        >
            <CircleOutlined style={{color:'#daa520'}}/> {label.label}
           
           <Grid marginLeft='30px'>{label.desc}</Grid> 
          
          </StepLabel>
          
        </Step>
      ))}
     </Stepper>
</Paper>
</Grid>
<Grid item xs={5.5}>
<Paper>
<Typography variant='h5' align='left'>Education</Typography>
<Stepper orientation='vertical' >
      {Education.map((label,i)=>(
        <Step key={i} >
        <StepLabel 
        StepIconComponent={()=>{}}
        >
            <CircleOutlined style={{color:'#daa520'}}/> {label.label}
           
           <Grid marginLeft='30px'>{label.desc}</Grid> 
          
          </StepLabel>
          
        </Step>
      ))}
     </Stepper>
</Paper>
</Grid>

</Grid>

<Grid container spacing={2} rowSpacing={12} margin='20px' alignItems='left' justifyContent='left' >
<Grid item xs={11}>
<Typography variant='h4' >Skills</Typography>
</Grid>
   
  <Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='HTML'
    endAdornment={<InputAdornment>80%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
</Grid>
<Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='CSS'
    endAdornment={<InputAdornment>70%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
</Grid>
<Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='JAVASCRIPT'
    endAdornment={<InputAdornment>60%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
   
</Grid>
<Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='React'
    endAdornment={<InputAdornment>70%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
   
</Grid>
<Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='JQUERY'
    endAdornment={<InputAdornment>50%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
   
</Grid>
<Grid item xs={4} >
   <FormControl>
    {/* <InputLabel>React</InputLabel> */}
    <Input
    defaultValue='Bootstrap'
    endAdornment={<InputAdornment>70%</InputAdornment>}
    >
    </Input>
   </FormControl> 
   <br/>
   
</Grid>


</Grid>

    
    </div>
  )
}
