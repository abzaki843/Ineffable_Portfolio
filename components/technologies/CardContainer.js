import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MediaCard from './MediaCard'
import 'fontsource-roboto'

const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%',
  },
})
const theme = {
  spacing: 8,
}
export default function CardContainer () {
  const classes = useStyles()
  const cardInfo = [
    {
      image: '/Assets/web.png',
      title: 'Web Development',
      text:
        'We provide services for Website development with  technlogog stacks like  React JS, and Next JS   ',
    },
    {
      image: '/Assets/mobileapp.png',
      title: 'Mobile Apps',
      text:
        'We Provide services for Mobile application development for Android, and IOS using  React Native Platfoam.',
    },
    {
      image: '/Assets/pwa.png',
      title: 'PWA',
      text:
        '   We provide services of Progressive Web Apps  that can be installed on your Mobile devices and Desktops  ',
    },
    {
      image: '/Assets/wordpress.png',
      title: 'Wordpress',
      text:
        'We provide services of wordpress Development  to create  ecommerce  and bussiness portfolio websites  ',
    },
    {
      image: '/Assets/design.png',
      title: 'Designing',
      text:
        ' Mobile Friendly, and Professional UI Designs are developed as well as UX Design for better Digital Experiences',
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'Social Media Marketing',
      text: 'We provide services of promoting your bussiness through social media platfoams   ',
    },
    {
      image: '/Assets/ecommerce.png',
      title: 'Ecommerce',
      text:
        'We provide services of Ecommerce to digitally transform your bussiness using modern technology stack platfoams',
    },
    {
      image: '/Assets/branding.png',
      title: 'Branding',
      text:
        ' We provide services of branding by helping you with unique brand name, modern logos  and bussiness slogans',
    },
  ]
  return (
    <div id='tech'>
      <Box ml={2}>
        <Grid container direction='row' justify='center'>
          <Grid item lg={10}>
            <Box m={1} display='grid' justifyContent='center' alignItems='center'>
              <Hidden mdDown>
                <Box mt={2} display='grid' justifyContent='center' alignItems='center'>
                  <Typography variant='h3' gutterBottom color='textPrimary'>
                    Technologies & Services
                  </Typography>

                  <img
                    src='/Assets/divider.png'
                    style={{ width: '100%', height: '12px', padding: '5px' }}
                  />
                </Box>
                <Typography variant='h5' gutterBottom color='textSecondary'>
                  We believe in delivering premier services with cutting edge and forefront
                  technology
                </Typography>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Box mt={5} display='grid' justifyContent='center' alignItems='center'>
              <Hidden lgUp>
                <Box display='grid' justifyContent='center' alignItems='center'>
                  <Hidden xsDown>
                    <Typography variant='h4' gutterBottom color='textPrimary'>
                      Services & Technologies
                    </Typography>
                  </Hidden>
                  <Hidden smUp>
                    <Typography variant='h4' gutterBottom color='textPrimary'>
                      Services We Offer
                    </Typography>
                  </Hidden>
                  <img
                    src='/Assets/divider.png'
                    style={{ width: '100%', height: '12px', padding: '5px' }}
                  />
                </Box>
                <Typography variant='body1' gutterBottom color='textSecondary'>
                  We believe in delivering premier services with cutting edge and forefront
                  technology
                </Typography>
              </Hidden>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <MediaCard cardInfo={cardInfo} />
    </div>
  )
}
// nothing has changed here as well
