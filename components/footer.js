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
import InstagramIcon from '@material-ui/icons/Instagram'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static ' style={{ background: '#000000' }}>
        <Hidden smDown>
          <Container>
            <Toolbar>
              <Grid container>
                <Grid container item xs={6} md={3} lg={3}>
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
                    <ListItem>
                      <Link href='https://www.facebook.com/ineffabledevs'>
                        <FacebookIcon style={{ color: '#FFFFFF' }} />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <LinkedInIcon style={{ color: '#FFFFFF' }} />
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <InstagramIcon style={{ color: '#FFFFFF' }} />
                      </Link>
                    </ListItem>
                  </ul>
                </Grid>
                <Grid container item xs={6} md={3} lg={3}>
                  <ul>
                    <ListItem>
                      <MailIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='OVERLINE TEXT'>info@ineffabledevs.com</Typography>
                    </ListItem>

                    <ListItem>
                      <LocationOnIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'> Comsats, Islamabad</Typography>
                    </ListItem>

                    <ListItem>
                      <CallIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>00923365551788</Typography>
                    </ListItem>
                  </ul>
                </Grid>
                <Grid container direction='column' justify='center' alignItems='center'>
                  <Grid item xs={12} sm={8} >
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
              <Grid container direction='row' justify='center' flexWrap='wrap'>
                <Box mt={15} />
                <Grid container item xs={8} sm={4}>
                  <Hidden>
                    <Link href='#hero'>
                      <img src='./Assets/logo.png' style={{ width: '90%', margin: 'auto' }} />
                    </Link>
                  </Hidden>
                </Grid>
                <Grid container direction='row' justify='center' item xs={10} sm={4} md={3} lg={3}>
                  <ul>
                    <ListItem>
                      <>
                        <Link href='https://www.facebook.com/ineffabledevs'>
                          <FacebookIcon style={{ color: '#FFFFFF' }} />
                        </Link>
                      </>
                      <Box m={2} />
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <LinkedInIcon style={{ color: '#FFFFFF' }} />
                      </Link>
                      <Box m={2} />
                      <Link href='https://www.linkedin.com/company/ineffable-devs'>
                        <InstagramIcon style={{ color: '#FFFFFF' }} />
                      </Link>
                    </ListItem>
                  </ul>
                </Grid>
                <Grid container direction='row' justify='center' item xs={10} sm={4} md={3} lg={3}>
                  <ul>
                    <ListItem>
                      <MailIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>info@ineffabledevs.com</Typography>
                    </ListItem>

                    <ListItem>
                      <LocationOnIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'> Comsats, Islamabad</Typography>
                    </ListItem>

                    <ListItem>
                      <CallIcon style={{ color: '#FFFFFF' }} />
                      <Box m={1} />
                      <Typography variant='subtitle'>00923365551788</Typography>
                    </ListItem>
                  </ul>
                </Grid>

                <Grid container direction='column' justify='center' alignItems="center" >
                   <Grid item xs={12} >  
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
