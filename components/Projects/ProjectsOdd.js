import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'

const useStyles = makeStyles(theme => ({
  margin: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const theme = {
  spacing: 8,
}

export default function ProjectsOdd ({
  projectImage,
  projectText,
  ProjectTitle,
  projectFeature1,
  projectFeature2,
  projectFeature3,
  projectFeature4,
}) {
  const classes = useStyles()

  return (
    <div className={(classes.root, classes.margin)}>
      <Box ml={10}>
        <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
          <>
            <Grid item xs={12} lg={5}>
              <Typography variant='h4' gutterBottom color='textPrimary' align='justify'>
                {ProjectTitle}
              </Typography>
              <Typography variant='subtitle' gutterBottom color='textSecondary' align='justify'>
                {projectText}
              </Typography>

              <div className={classes.list}>
                <List component='nav' aria-label='main mailbox folders'>
                  <ListItem button>
                    <ListItemIcon>
                      <CheckCircleOutlineRoundedIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText secondary={projectFeature1} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CheckCircleOutlineRoundedIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText secondary={projectFeature2} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CheckCircleOutlineRoundedIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText secondary={projectFeature3} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CheckCircleOutlineRoundedIcon color='primary' />
                    </ListItemIcon>
                    <ListItemText secondary={projectFeature4} />
                  </ListItem>
                </List>
              </div>
              <Box ml={8}>
                <Button variant='contained' color='primary'>
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
            <Grid item lg={7}>
              <img src={projectImage} style={{ width: '100%' }} />
            </Grid>
          </>
        </Grid>
      </Box>
    </div>
  )
}
