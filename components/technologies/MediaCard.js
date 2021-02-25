import React from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
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
import { Hidden } from '@material-ui/core';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width:"2000px"
  },
  navitems: {
    overflow:'auto',
  
  },
  media: {
    height: 'auto',
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
export default function MediaCard({cardInfo}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
    <div className={classes.root,classes.divider,classes.navitems}>
          <Grid
    container
    direction="row"
    alignItems="center"
    spacing={1}
    style={{overflow:"auto"}}
  >
       
    {cardInfo.map(card => 
     <Grid item xs={12} lg={4} justify="center" direction="column" align="center" >
      
    <Card className={classes.root} raised="true"   direction="column"
  alignItems="center"
  justify="center" >
    
      <CardMedia
      className={classes.media}
      image={card.image}
      component="img"
    />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5"  direction="row" justify="center"  align="center" style={{ align: "center" }} color="textSecondary" >
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary"  >
         {card.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    
    </Grid>
      )}
   
    </Grid>
    </div>
    </>
  );
}