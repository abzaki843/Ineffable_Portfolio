import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'
import InputAdornment from '@material-ui/core/InputAdornment'
import { Hidden } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static ' style={{ background: '#000000' }}>
        <Hidden smDown>
        <Container>
          <Toolbar>
            <Grid container>
              <Grid  container item xs={6 } md={3} lg={3}>
                <Hidden>
                  <Link href='#hero'>
                    <img src='./Assets/logo.png' style={{ width: '85%', margin: 'auto' }} />
                  </Link>
                </Hidden>
              
                
              </Grid>
          
              <Grid container item xs={6} md={3} lg={3}>
                <ul>
                  <ol>
                    <Link href='#hero'>Home</Link>
                  </ol>
                  <ol>
                    <Link href='#tech'>Technologies</Link>
                  </ol>
                  <ol>
                    <Link href='#projects'>Our Work</Link>
                  </ol>
                  <ol>
                    <Link href='#team'>Team</Link>
                  </ol>
                  <ol>
                    <Link href='#contact'>Contact</Link>
                  </ol>
                </ul>
              </Grid>

           
            
              <Grid container item xs={6} md={3} lg={3}>
                <ul>
                  <ol>
                    <Link href='https://www.facebook.com/ineffabledevs'>
                      <FacebookIcon style={{ color: '#4267B2' }} />
                    </Link>
                  </ol>
                  <ol>
                    <Link href='https://www.linkedin.com/company/ineffable-devs'>
                      <LinkedInIcon style={{ color: '#0072B1' }} />
                    </Link>
                  </ol>
                  <ol>
                    <Link href='https://www.linkedin.com/company/ineffable-devs'>
                      <InstagramIcon style={{ color: '#0072B1' }} />
                    </Link>
                  </ol>
              
                </ul>
              </Grid>
              <Grid container item xs={6} md={3} lg={3}>
                <ul>
                <ol>
                    <MailIcon style={{ color: '#0072B1' }} />
                  </ol>
                  <Typography variant='OVERLINE TEXT'>info@ineffabledevs.com</Typography>
                  <ol>
                    <LocationOnIcon style={{ color: '#0072B1' }} />
                  </ol>
                  <Typography variant='subtitle'> Comsats, Islamabad</Typography>
                  <ol>
                    <CallIcon style={{ color: '#0072B1' }} />
                  </ol>
                  <Typography variant='subtitle'>00923365551788</Typography>
                </ul>
              </Grid>
              <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item xs={12} lg={5}>
                  <Typography variant='caption text'>
                    Copyright © 2021 INEFFABLE DEVS. All rights reserved
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
        </Hidden>
        <Container>
        <Hidden mdUp>
          <Toolbar>
            <Grid container>
            <Grid  container item xs={10} >
                <Hidden>
                  <Link href='#hero'>
                    <img src='./Assets/logo.png' style={{ width: '85%', margin: 'auto' }} />
                  </Link>
                </Hidden>
              
                
              </Grid>
             
              <Grid container item xs={12} md={3} lg={3}>
                <ul>
                <ol>
                    <MailIcon style={{ color: '#0072B1' }} />
                 
                  </ol>
                  <Typography variant='subtitle' paragraph="true">info@ineffabledevs.com</Typography>
                  <ol>
                    <LocationOnIcon style={{ color: '#0072B1' }} />
                
                  
                  </ol>
                  <Typography variant='subtitle'paragraph="true"> Comsats, Islamabad</Typography>
                  <ol>
                    <CallIcon style={{ color: '#0072B1' }} />
                  
                  </ol>
                  <Typography variant='subtitle' paragraph="true">00923365551788</Typography>
                </ul>
              </Grid>
           
            
         <Grid container item xs={10} md={3} lg={3}>
                <ul>
                  <ol>
                    <Link href='https://www.facebook.com/ineffabledevs'>
                      <FacebookIcon style={{ color: '#4267B2' }}  />
                    </Link>
                 
                    <Link href='https://www.linkedin.com/company/ineffable-devs'>
                      <LinkedInIcon style={{ color: '#0072B1' }} />
                    </Link>
                 
                  
                    <Link href='https://www.linkedin.com/company/ineffable-devs'>
                      <InstagramIcon style={{ color: '#0072B1' }} />
                    </Link>
                  </ol>
              
                </ul>
              </Grid>
          
          
              <Grid container direction='row' justify='center' alignItems='center'>
                <Grid item xs={12} lg={5}>
                  <Typography variant='caption text'>
                    Copyright © 2021 INEFFABLE DEVS. All rights reserved
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          </Hidden>
        </Container>
      </AppBar>
    </>
  )
}
