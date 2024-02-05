import React from 'react';
import HoneyNavbar from './HoneyNavbar';
import { Grid, Divider, Typography } from '@mui/material';
import MainTextHoney from './MainTextHoney';
import HoneyFeatures from './HoneyFeatures';

export default function HoneyHome() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid item xs={12} sx={{ backgroundImage: 'url("https://eatsy.bold-themes.com/cupcakes/wp-content/uploads/sites/3/2021/02/hero_home_02.jpg")', backgroundSize: 'cover', width: '100%' }}>
        <HoneyNavbar />
        <MainTextHoney/>      
      </Grid>
      <HoneyFeatures/>
    </Grid>
  );
}
