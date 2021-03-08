import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import ProfileCardDemo from './About'

const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%',
  },
  root: {
    flexGrow: 1,
  },
})
const theme = {
  spacing: 8,
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
      <Box ml={25}>
        <Grid container spacing={1} justify-content='center'>
          <Grid item xs={10}>
            <Typography variant='h4' gutterBottom color='textPrimary' justify-content='center'>
              Our Team
            </Typography>
            <img
              src='/Assets/divider.png'
              style={{ width: '20%', height: 'auto', padding: '5px' }}
            />
          </Grid>

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
      </Box>
    </div>
  )
}
