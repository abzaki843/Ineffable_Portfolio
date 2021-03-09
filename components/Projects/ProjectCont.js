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
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/jamcommerce.png',
      title: 'Jam Commerce',
      Text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/covid19.png',
      title: 'COVID 19',
      Text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: '/Assets/toursdenorth.png',
      title: 'TOURS De North',
      Text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]
  return (
    <div className={classes.divider}>
      <Grid container justify='center' alignItems='center'>
        <Grid item direction='column' xs={12} lg={12}>
          <Box m={10} display='grid' justifyContent='center' alignItems='center'>
            <Typography variant='h4' gutterBottom color='textPrimary'>
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
            />
          ) : (
            <ProjectsOdd
              projectImage={project.image}
              ProjectTitle={project.title}
              projectText={project.Text}
            />
          )}
          <ProjectsSm
            projectImage={project.image}
            ProjectTitle={project.title}
            projectText={project.Text}
          />
        </>
      ))}
    </div>
  )
}
