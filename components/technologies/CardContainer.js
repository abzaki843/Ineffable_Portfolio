import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MediaCard from './MediaCard'

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
        'We help you by designing Progressive Web Apps (PWA) that facilitate profitable communication pathways for brands and their consumers with their smart and connecting features using standards and Technologies. ',
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
        'We provide our customers with Beautiful, Responsive, Mobile Friendly, and Professional UI Designs using Adobe Suite. ',
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'Social Media Marketing',
      text:
        'We provide Brand Promotion Services using Social Media Marketing for Brand Awareness on Social Media Platforms Facebook, Instagram, Twitter, & LinkedIn.',
    },
    {
      image: '/Assets/ecomerce.png',
      title: 'Ecommerce',
      text:
        'We provide our customers with E Commerce solutions that are Beautiful, Responsive, and Mobile Friendly so that they may digitally transform their businesses .',
    },
    {
      image: '/Assets/branding.png',
      title: 'Branding',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]
  return (
    <div id='tech'>
      <Divider light='true' />
      <Box ml={2}>
        <Grid container direction='row'>
          <Grid item xs={12} lg={12}>
            <Box m={1} display='grid' justifyContent='center' alignItems='center'>
              <Hidden lgUp>
                <Box mt={2} display='grid' justifyContent='center' alignItems='center'>
                  <Typography variant='h3' gutterBottom color='textPrimary'>
                    Technologies
                  </Typography>
                </Box>
                <img
                  src='/Assets/divider.png'
                  style={{ width: '70%', height: 'auto', padding: '5px' }}
                />
                <Typography variant='h5' gutterBottom color='textSecondary'>
                  What we do we do it perfect
                </Typography>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Hidden mdDown>
              <Typography variant='h3' gutterBottom color='textPrimary'>
                Technologies we use
              </Typography>

              <img
                src='/Assets/divider.png'
                style={{ width: '15%', height: 'auto', padding: '10px' }}
              />
              <Typography variant='h5' gutterBottom color='textSecondary'>
                What we do we do it perfect
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      </Box>
      <MediaCard cardInfo={cardInfo} />
    </div>
  )
}
