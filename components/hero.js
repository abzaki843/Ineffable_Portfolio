import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
  }));


export default function Hero(){
    const classes = useStyles();
return(
<div className={classes.root}>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
   
      <Grid item xs={12} lg={5}>
        <Typography variant="h4" component="h2" gutterBottom>
    Innovative Software Company
      </Typography>
    
        </Grid>
       
        <Grid item xs={12} lg={7}>
  
        <img
              src="/Assets/hero-img.png" style={{width:"100%",height:"auto"}}
              />
        </Grid>
        </Grid>
      
    </div>
  );
}