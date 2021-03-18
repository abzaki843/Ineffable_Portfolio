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

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static ' style={{ background: '#000000' }}>
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={6} lg={3}>
                <Hidden mdDown>
                  <Link href='#hero'>
                    <img src='./Assets/logo.png' style={{ width: '85%', margin: 'auto' }} />
                  </Link>
                </Hidden>
                <Hidden lgUp>
                  <Link href='#hero'>
                    <img src='./Assets/logo.png' style={{ width: '90%', margin: 'auto' }} />
                  </Link>
                </Hidden>
              </Grid>
              <Grid item xs={12} lg={3}>
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

              <Grid item xs={12} lg={3}>
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
                    <MailIcon style={{ color: '#3e65cf' }} />
                    <Typography variant='body1'>info@ineffabledevs.com</Typography>
                  </ol>
                </ul>
              </Grid>
              <Grid item xs={12} lg={3}>
                <ul>
                  <ol>
                    <LocationOnIcon style={{ color: '#960A0A' }} />
                    <Typography variant='body1'>Cubator 1ne Comsats Islamabad</Typography>
                  </ol>

                  <ol>
                    <CallIcon style={{ color: '#960A0A' }} />
                    <Typography variant='body1'>03365551788</Typography>
                  </ol>
                </ul>
              </Grid>
              <Grid item xs={12} lg={5}>
                <Typography variant='body1'>
                  Copyright © 2021 INEFFABLE DEVS. All rights reserved
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
