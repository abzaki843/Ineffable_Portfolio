import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import ProfileCardDemo from './About'
import Card from './Card'

const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%',
  },
})
const theme = {
  spacing: 2,
}
export default function AboutCont () {
  const classes = useStyles()
  const AboutInfo = [
    {
      image: '/Assets/saad.jpg',
      title: 'CEO',
      name: 'Ahsan Ansari',
    },
    {
      image: '/Assets/mobileapp.png',
      title: 'Technical Lead',
      name: 'Ali Ansari',
    },
    {
      image: '/Assets/pwa.png',
      title: 'Backend Lead',
      name: 'Hamza Rehman ',
    },
    {
      image: '/Assets/wordpress.png',
      title: 'Manager',
      name: 'Abdul ',
    },
    {
      image: '/Assets/design.png',
      title: 'Developer',
      name: 'Ahsan Ansari',
    },
    {
      image: '/Assets/socialmedia.png',
      title: 'QA ENGENIER',
      name: 'Ahsan Ansari',
    },
  ]

  return (
    <div>
      <Divider />

      <Grid container spacing={1}>
        <Grid item xs={12} lg={12}>
          <Box m={1} display='grid' justifyContent='center' alignItems='center'>
            <Typography variant='h4' gutterBottom color='textPrimary'>
              Our Team
            </Typography>
            <img
              src='/Assets/divider.png'
              style={{ width: '20%', height: 'auto', padding: '5px' }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        {AboutInfo.map(about => (
          <>
            <Grid item xs={12} lg={4}>
              <ProfileCardDemo
                aboutImage={about.image}
                aboutTitle={about.title}
                aboutName={about.name}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  )
}
