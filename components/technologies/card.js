import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    width:220,

    justifyContent: 'center',
     alignContent: 'center',
  },
  divider: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: grey,
  },
  
  
});
const theme = {
    spacing: 2,
  }
export default function MediaCard() {
  const classes = useStyles();

  return (
      
    <div className={classes.root,classes.divider}>
         <Divider />
    <Grid
    container
    direction="row"
  
    
  >
  
        <Grid item xs={12} lg={12} >
        <Box m={1} >
          <Typography variant="h6" gutterBottom color="textPrimary">
          
      Technologies we use
        </Typography>
        
       
          <Typography variant="h4" component="h2" gutterBottom color="textSecondary" align="justify">
      We Are here to give Best Services
        </Typography>
          <Typography variant="subtitle1"  gutterBottom color="textSecondary" align="justify">
      We Are a Team of  software developers. Highly Dedicated to develop Products that Matter  
        </Typography>
      
      
      </Box>
      
          </Grid>
         
          </Grid>
          <Grid
    container
    direction="row"
  >
   
     <Grid item xs={6} lg={4}>
    <Card className={classes.root} raised="true"   direction="column"
  alignItems="center"
  justify="center" >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/Assets/webdevelopment.png"
          title="Contemplative Reptile"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Web App Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
   
    </Grid>
   
    </div>
  );
}