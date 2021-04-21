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
import {motion} from 'framer-motion'

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
  bg: {
    backgroundColor: '#F5F5F5',
  },
}))

const theme = {
  spacing: 8,
}
function ListItemLink (props) {
  return <ListItem button component='a' {...props} />
}

export default function ProjectsEven ({
  projectImage,

  projectText,
  ProjectTitle,
  projectFeature1,
  projectFeature2,
  projectFeature3,
  projectFeature4,
  projectRef,
}) {
  const classes = useStyles()

  return (
    <div className={(classes.root, classes.margin)}>
      <Box mr={8}>
        <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
          <Grid item lg={6}>
          <motion.div
initial={{x:'-100vw'}}
  animate={{x:0}}
  transition={{delay:5,duration:1}}>
              <img src={projectImage} style={{ width: '100%' }} />
            </motion.div>
          </Grid>

          <Grid item xs={12} lg={6} style={{ marginTop: '90px' }}>
          <motion.div
initial={{x:'100vw'}}
  animate={{x:0}}
  transition={{delay:5,duration:1}}>
              <div>
                <Typography variant='h4' gutterBottom color='textPrimary' align='justify'>
                  {ProjectTitle}
                </Typography>
                <Typography variant='subtitle' gutterBottom color='textSecondary' align='justify'>
                  {projectText}
                </Typography>

                <div className={classes.list}>
                  <motion.div  whileHover={{scale:1.1,originX:0,color:"green"}}>
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
                  </motion.div>
                </div>
                <Box ml={8}>
                <motion.div  whileHover={{scale:1.1,originX:0}}>
                    <Button variant='contained' color='primary' href={projectRef}>
                      LEARN MORE
                    </Button>
                    </motion.div>
                </Box>
              </div>
          </motion.div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
