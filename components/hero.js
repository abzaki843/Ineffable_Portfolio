import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
    
  }));
  const theme = {
    spacing: 2,
  }
  
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
      <Box m={3} >
        <Typography variant="h6" component="h2" gutterBottom color="textPrimary" align="justify">
        
    Innovative Software Company 
    
    <img
              src="/Assets/divider.png" style={{width:"20%",height:"auto",padding:"5px"}}
              />
   
      </Typography>
      
     
        <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="justify">
    We Are here to give Best Services
      </Typography>
        <Typography variant="subtitle1"  gutterBottom color="textSecondary" align="justify">
    We Are a Team of  software developers. Highly Dedicated to develop Products that Matter  
      </Typography>
      <Button variant="contained" color="primary"  >
     
        Explore More
       
      </Button>
    
    </Box>
    
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