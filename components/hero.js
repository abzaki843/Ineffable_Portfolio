import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { Hidden } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))
const theme = {
  spacing: 2,
}

export default function Hero () {
  const classes = useStyles()

  return (
    <div className={(classes.root, classes.bg)} id='hero'>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item lg={5}>
          <Box m={3}>
            <Hidden mdDown>
              <Slide direction='left' in mountOnEnter unmountOnExit>
                <Typography variant='h3' gutterBottom color='textPrimary'>
                  Innovative Software Company
                </Typography>
              </Slide>
              <Slide direction='right' in mountOnEnter unmountOnExit>
                <img
                  src='/Assets/divider.png'
                  style={{ width: '80%', height: '12px', padding: '5px' }}
                />
              </Slide>
            </Hidden>
            <Hidden lgUp>
              <Box align='center'>
                <Typography variant='h4' gutterBottom color='textPrimary'>
                  Innovative Software Company
                </Typography>

                <img
                  src='/Assets/divider.png'
                  style={{ width: '20%', height: 'auto', padding: '5px' }}
                />
              </Box>
            </Hidden>

            <Hidden mdDown>
              <Slide direction='left' in mountOnEnter unmountOnExit>
                <Typography
                  variant='h5'
                  component='h2'
                  gutterBottom
                  color='textSecondary'
                  align='justify'
                >
                  Inventing better Future
                </Typography>
              </Slide>
              <Slide direction='left' in mountOnEnter unmountOnExit>
                <Typography variant='body1' gutterBottom color='textSecondary' align='justify'>
                  We Are a Team of software developers, Highly Dedicated to develop Products that
                  Matter
                </Typography>
              </Slide>
              {/*   <Button variant='contained' color='primary'>
                Explore More
              </Button>
         
              */}
            </Hidden>
          </Box>
        </Grid>

        <Grid item xs={12} md={10} lg={7}>
          <Slide direction='right' in mountOnEnter unmountOnExit>
            <img src='/Assets/hero-img.png' style={{ width: '100%', height: 'auto' }} />
          </Slide>
        </Grid>
        <Hidden lgUp>
          <Grid item xs={11} md={10}>
            <Typography variant='h5' gutterBottom color='textSecondary' align='center'>
              We Are here to give Best Services
            </Typography>
            <Typography variant='subtitle1' gutter color='textSecondary' align='justify' paragraph>
              We Are a Team of software developers. Highly Dedicated to develop Products that Matter
            </Typography>
            <Grid container justify='center'>
              <Button variant='contained' color='primary' paragraph justify='center'>
                Explore More
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}
