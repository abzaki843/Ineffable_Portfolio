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
      title: 'Web App Development',
      text:
        'We provide services for Website and Web Application Development of all kinds. The technologies that you can chose from are Custom, WordPress, React JS, and Next JS based Websites and Web Applications.  ',
    },
    {
      image: '/Assets/mobileapp.png',
      title: 'Mobile App Development',
      text:
        'We create High Performing, Digitally Transformative, Responsive, Mobile Friendly, and Feature-Packed Native Mobile Applications for Android, and IOS using React Native.',
    },
    {
      image: '/Assets/pwa.png',
      title: 'PWA',
      text:
        '  Progressive Web Apps (PWA) web applications  are regular web pages or websites, but can appear to the user like traditional applications or native mobile applications  ',
    },
    {
      image: '/Assets/wordpress.png',
      title: 'Wordpress',
      text:
        'We provide WordPress services for Website Development of your choice. The Theme Builder of our choice is DIVI using which we can create a Simple Static Site or a Fully Fledged Blogs site  ',
    },
    {
      image: '/Assets/design.png',
      title: 'Designing',
      text:
        'Beautiful, Responsive, Mobile Friendly, and Professional UI Designs are developed as well as UX Design for better Digital Experiences',
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'Social Media Marketing',
      text:
        'We provide Brand Promotion Services using Social Media Marketing for Brand Awareness on Social Media Platforms ',
    },
    {
      image: '/Assets/ecomerce.png',
      title: 'Ecommerce',
      text:
        'E Commerce Solutions are designed so that digital transformation of the business is done using Next JS and WordPress. .',
    },
    {
      image: '/Assets/branding.png',
      title: 'Branding',
      text:
        'Modern, Unique, and Professionally made Custom Logo Designs and Concepts are made so that your business stands ',
    },
  ]
  return (
    <div id='tech'>
      <Box ml={2}>
        <Grid container direction='row' justify='center'>
          <Grid item xs={12} lg={10}>
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
            <Box mt={5} display='grid' justifyItems='center'>
              <Hidden lgUp>
                <Typography variant='h4' gutterBottom color='textPrimary'>
                  Services & Technologies
                </Typography>
                <img
                  src='/Assets/divider.png'
                  style={{ width: '50%', height: '12px', padding: '5px' }}
                />
                <Typography variant='body1' gutterBottom color='textSecondary'>
                  We believe in delivering premier services with cutting edge and forefront
                  technology
                </Typography>
              </Hidden>
            </Box>
            <Hidden mdDown lgUp>
              <img
                src='/Assets/divider.png'
                style={{ width: '15%', height: 'auto', padding: '10px' }}
              />
              <Typography variant='h6' gutterBottom color='textSecondary'>
                We believe in delivering premier services with cutting edge and forefront technology
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
      <MediaCard cardInfo={cardInfo} />
    </div>
  )
}
