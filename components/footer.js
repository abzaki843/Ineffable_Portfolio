import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import InputAdornment from '@material-ui/core/InputAdornment'

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static' className='footer'>
        <Container maxWidth='md'>
          <Toolbar>
            <Grid container direction='row' justify='center' alignItems='center'>
              
              <Grid item xs={12} lg={6} direction="column" justify="flex-start" alignItems="flex-start">
                <img src="./Assets/logo.png" style={{width:"100%"}}/>
                </Grid>
                <Grid item xs={12} lg={6}>
                <ul>
                  <li>
                    <Link href='#hero'>Home</Link>
                  </li>
                  <li>
                    <Link href='#tech'>Technologies</Link>
                  </li>
                  <li>
                    <Link href='#projects'>Our Work</Link>
                  </li>
                  <li>
                    <Link href='#team'>Team</Link>
                  </li>
                  <li>
                    <Link href='#contact'>Contact</Link>
                  </li>
                </ul>
              </Grid>

            </Grid>
              <Grid item xs={10} lg={6}>
              <InputAdornment >
               <ul>  
                 <li>     
              <FacebookIcon />
              </li> 
              <li>
              <LinkedInIcon />
              </li> 
              <li>
              <MailIcon/>
              </li> 
              </ul>   
                        </InputAdornment>
            
              </Grid>
              <Grid item xs={10} lg={6}>
              <InputAdornment >
             < ul>  
                
              <li>
              <LocationOnIcon />
              </li> 
              <li>
              <CallIcon/>
              </li>
           
            
              </ul>   
             
                        </InputAdornment>
            
              </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
