import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import { Hidden } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import ProjectsOdd from './ProjectsOdd'
import ProjectsEven from './ProjectsEven'
import ProjectsSm from './ProjectsSm'
const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%',
  },
})
const theme = {
  spacing: 2,
}
export default function ProjectContainer () {
  const classes = useStyles()
  const projectInfo = [
    {
      image: '/Assets/vango.png',
      title: 'VAN GO',
      Text:
        'A Web Application which is highly responsive and fast while being installation free for those in need of moving their precious goods securely and safely with help available at every stage via the Web Application. Some main features are:',
      feature1: 'Highly Responsive and Fast Web Application for both User and Driver.',
      feature2:
        ' User uses Live Tracking for tracking the Status of the Order along with location information.',
      feature3:
        ' Driver can Accept Order according to the Area Zip Code he has set and keep updating the Order till it has been completed.',
      feature4:
        ' Driver will do Document Verification so that he can gain the chance of using Van Go Driver App to make earning',
    },
    {
      image: '/Assets/jamcommerce.png',
      title: 'Jam Commerce',
      Text:
        'An E-Commerce Platform which is free of any 3rd Party Cart System and can be changed according to need with ease. There are many reasons to use JAM Commerce some of them are given below:',
      feature1:
        'It provides powerful framework so that no high customizability is needed everything is already done for you and only minor additions are needed.',
      feature2: 'It has E-Commerce Store which is blazing fast due to usage of Next JS ',
      feature3:
        'It has  sections and information blocks  display content and images on your store strategically so visitors can quickly find the information they need.',
      feature4:
        ' No need to use any 3rd Party Pre-made Cart technology we use snip cart as a backend for cart operation handling. ',
    },
    {
      image: '/Assets/covid19.png',
      title: 'COVID 19',
      Text:
        'A website developed to educate people about Covid 19 and keeps update about Covid19 live counts locally and Globally .Key features of website are as follows:game nai  ',
      feature1: '  Global COVID-19 Count',
      feature2: ' COVID-19 Symptoms',
      feature3: 'Precautionary Measures',
      feature4: 'Country Wise Cases Search',
    },
    {
      image: '/Assets/toursdenorth.png',
      title: 'TOURS De North',
      Text:
        'A Website for all people who want to visit Northern Areas of Pakistan. It provides many packages of ranging differences and provides all information needed for the trip. The Main features are:',
      feature1: '  Previous Tour Highlights',
      feature2: ' Multiple Packages to choose from',
      feature3: 'Detailed Stay and Activities Daily Brief  ',
      feature4: ' North American exclusive Booking Line',
    },
  ]
  return (
    <div className={classes.divider} id='projects'>
      <Grid container justify='center' alignItems='center'>
        <Grid item direction='column' xs={12} lg={12}>
          <Box m={3} display='grid' justifyContent='center' alignItems='center'>
            <Typography variant='h3' gutterBottom color='textPrimary'>
              Our Work
            </Typography>
            <img
              src='/Assets/divider.png'
              style={{ width: '20%', height: 'auto', padding: '5px' }}
            />
          </Box>
        </Grid>
      </Grid>
      {projectInfo.map((project, index) => (
        <>
          {index % 2 == 0 ? (
            <ProjectsEven
              projectImage={project.image}
              ProjectTitle={project.title}
              projectText={project.Text}
              projectFeature1={project.feature1}
              projectFeature2={project.feature2}
              projectFeature3={project.feature3}
              projectFeature4={project.feature4}
            />
          ) : (
            <ProjectsOdd
              projectImage={project.image}
              ProjectTitle={project.title}
              projectText={project.Text}
              projectFeature1={project.feature1}
              projectFeature2={project.feature2}
              projectFeature3={project.feature3}
              projectFeature4={project.feature4}
            />
          )}
          <ProjectsSm
            projectImage={project.image}
            ProjectTitle={project.title}
            projectText={project.Text}
            projectFeature1={project.feature1}
            projectFeature2={project.feature2}
            projectFeature3={project.feature3}
            projectFeature4={project.feature4}
          />
        </>
      ))}
    </div>
  )
}
