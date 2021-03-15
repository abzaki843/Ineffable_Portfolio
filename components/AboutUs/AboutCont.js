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
      image: '/Assets/Ahsan.jfif',
      title: 'CEO',
      name: 'Ahsan Ansari',
    },
    {
      image: '/Assets/Ali.jfif',
      title: 'Technical Lead',
      name: 'Ali Ansari',
    },

    {
      image: '/Assets/hamza.jfif',
      title: 'Backend Lead',
      name: 'Hamza Rehman ',
    },
    {
      image: '/Assets/abk.jfif',
      title: 'Manager',
      name: 'Abdul Basit ',
    },
    {
      image: '/Assets/saada.jpg',
      title: 'Developer',
      name: 'Saad ul Hassan',
    },
    {
      image: '/Assets/saad.jfif',
      title: 'QA ENGENIER',
      name: 'Saad Arshad',
    },
    {
      image: '/Assets/awais.jpg',
      title: 'Designer',
      name: 'Awais Shah',
    },
    {
      image: '/Assets/tooba.jpg',
      title: 'Designer',
      name: 'Tooba Agha',
    },
  ]

  return (
    <div id='team'>
      <Box mt={5}>
        <Divider light='true' />

        <Grid container spacing={1} justify-content='center' align='center'>
          <Grid item xs={12}>
            <Typography variant='h3' gutterBottom color='textPrimary' justify-content='center'>
              Our Team
            </Typography>
            <img
              src='/Assets/divider.png'
              style={{ width: '13%', height: 'auto', padding: '5px' }}
            />
          </Grid>

          {AboutInfo.map(about => (
            <>
              <Grid item xs={12} sm={6} md={3} lg={3}>
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
