import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import { Hidden } from '@material-ui/core'

import { motion } from 'framer-motion'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: '#F5F5F5',
  },
}))
const theme = {
  spacing: 2,
}

export default function Hero () {
  const classes = useStyles()
  const container = useRef(null)
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     render: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('./animations/hero.json'),
  //   })
  // }, [])

  return (
    <div className={classes.root} id='hero'>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item lg={5}>
            <Box m={3}>
              <Hidden mdDown>
                <Typography variant='h4' gutterBottom color='textPrimary'>
                  Deliver <span style={{ color: '#2BA054' }}> Innovative IT Solutions</span> for
                  Technology insights
                </Typography>

                <motion.img
                  src='/Assets/divider.png'
                  style={{ width: '80%', height: '12px', padding: '5px' }}
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </Hidden>
              <Hidden lgUp>
                <Box align='center'>
                  <Typography variant='h4' gutterBottom color='textPrimary'>
                    Innovative Software Company
                  </Typography>{' '}
                  <motion.img
                    src='/Assets/herolayer.png'
                    style={{ width: '50%', height: 'auto' }}
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </Box>
              </Hidden>

              <Hidden mdDown>
                <motion.div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  <Typography
                    variant='h5'
                    component='h2'
                    gutterBottom
                    color='textSecondary'
                    align='justify'
                  >
                    Inventing better Future
                  </Typography>
                </motion.div>

                <Typography variant='subtitle1' gutterBottom color='textPrimary' align='justify'>
                  We Are a Team of software developers, Highly Dedicated to develop Products that
                  Matter
                </Typography>

                {/*   <Button variant='contained' color='primary'>
                Explore More
              </Button>
         
              */}
                <Box mt={2}>
                  <Grid item lg={12}>
                    <motion.img
                      src='/Assets/herolayer.png'
                      style={{ width: '100%' }}
                      initial={{ x: '-100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 1, duration: 1.5 }}
                    />
                  </Grid>
                </Box>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} md={10} lg={6}>
            <motion.img
              src='/Assets/hero-img.png'
              style={{ width: '100%', marginTop: '50px' }}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </Grid>
          <Hidden lgUp>
            <Grid item xs={11} md={10}>
              <Typography variant='h5' gutterBottom color='textSecondary' align='center'>
                We Are here to give Best Services
              </Typography>
              <Typography variant='subtitle1' gutter color='textPrimary' align='justify' paragraph>
                We Are a Team of software developers. Highly Dedicated to develop Products that
                Matter
              </Typography>
              <Grid container justify='center'>
                {/* <Button variant='contained' color='primary' paragraph justify='center'>
                  Explore More
                </Button> */}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </motion.div>
    </div>
  )
}
