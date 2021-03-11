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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/mobileapp.png',
      title: 'Mobile App Development',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/pwa.png',
      title: 'PWA',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/wordpress.png',
      title: 'Wordpress',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/design.png',
      title: 'Designing',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'Social Media Marketing',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/ecomerce.png',
      title: 'Ecommerce',
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
      <Box ml={8}>
        <Grid container direction='row'>
          <Grid item xs={12} lg={12}>
            <Box m={1} display='grid' justifyContent='center' alignItems='center'>
              <Hidden lgUp>
                <Typography variant='h4' gutterBottom color='textPrimary'>
                  Technologies we use
                </Typography>
                <img
                  src='/Assets/divider.png'
                  style={{ width: '20%', height: 'auto', padding: '5px' }}
                />
                <Typography variant='h5' gutterBottom color='textSecondary'>
                  What we do we do it perfect
                </Typography>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Hidden mdDown>
              <Typography variant='h4' gutterBottom color='textPrimary'>
                Technologies we use
              </Typography>
              <img
                src='/Assets/divider.png'
                style={{ width: '10%', height: 'auto', padding: '10px' }}
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
