import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

const theme = {
  spacing: 2,
}
export default function Projects ({ projectInfo }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='row' justify='center' alignItems='center'>
        {projectInfo.map(project => (
          <>
            <Grid item lg={6}>
              <img src={project.image} width={'100%'} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography variant='h4' gutterBottom color='textPrimary' align='justify'>
                {project.title}
              </Typography>
              <Typography variant='subtitle' gutterBottom color='textSecondary' align='justify'>
                {project.Text}
              </Typography>
              <Button variant='contained' color='primary'>
                LEARN MORE
              </Button>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  )
}
