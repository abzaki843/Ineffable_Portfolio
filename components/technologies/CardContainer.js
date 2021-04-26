import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MediaCard from './MediaCard'
import 'fontsource-roboto'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('hidden')
    }
  }, [animation, inView])

  const cardInfo = [
    {
      image: '/Assets/web.png',
      title: 'Web Development',
      text:
        ' Services for Website development with  technOLOGY stacks like  React JS, and Next JS   ',
    },
    {
      image: '/Assets/mobileapp.png',
      title: 'Mobile Apps',
      text:
        ' Services for Mobile application development for Android, and IOS using  React Native Platfoam.',
    },
    {
      image: '/Assets/pwa.png',
      title: 'PWA',
      text:
        '  Services of Progressive Web Apps  that can be installed on your android and ios mobile devices  and computers  ',
    },
    {
      image: '/Assets/wordpress.png',
      title: 'Wordpress',
      text:
        ' Services of wordpress Development  to create  ecommerce ,blogs  bussiness portfolio & POS websites  ',
    },
    {
      image: '/Assets/design.png',
      title: 'Designing',
      text:
        ' Services of UI/UX design to help create user-friendly interfaces that enable users to understand how to use software products ',
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'Social Media Marketing',
      text:
        ' Services of  Social media marketing using social media platfoamns to connect with you audience to build you brand & increase sales ',
    },
    {
      image: '/Assets/ecommerce.png',
      title: 'Ecommerce',
      text:
        ' Services of Ecommerce to digitally transform your bussiness into online stores using modern technology  platfoams',
    },
    {
      image: '/Assets/branding.png',
      title: 'Branding',
      text:
        ' Services of branding by helping you with unique brand names, modern logos  and innovative bussiness slogans',
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
                  <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Typography variant='h3' gutterBottom color='textPrimary'>
                      Technologies & Services
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <img
                      src='/Assets/divider.png'
                      style={{ width: '100%', height: '12px', padding: '5px' }}
                      nitial={{ x: '-100vw' }}
                      animate={{ x: 0 }}
                      transition={{ delay: 2 }}
                    />
                  </motion.div>
                </Box>
                <motion.div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Typography variant='h5' gutterBottom color='textSecondary'>
                    We believe in delivering premier services with cutting edge and forefront
                    technology
                  </Typography>
                </motion.div>
              </Hidden>
            </Box>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Box mt={5} display='grid' justifyContent='center' alignItems='center'>
              <Hidden lgUp>
                <Box display='grid' justifyContent='center' alignItems='center'>
                  <Typography variant='h4' gutterBottom color='textPrimary'>
                    Services We Offer
                  </Typography>

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
