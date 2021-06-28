import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5,
    },
  },
}

const childVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5,
    },
  },
}
const buttonVariants = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],
  //   transition: { delay: 2 }
  // },
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1],
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
    },
  },
}
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

    backgroundColor: theme.palette.background.paper,
  },
  bg: {
    backgroundColor: '#F5F5F5',
  },
}))

const theme = {
  spacing: 8,
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
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('')
    }
  }, [animation, inView])

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <div className={(classes.root, classes.margin)}>
        <Box mr={8}>
          <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
            <Grid item lg={6}>
              <motion.div variants={containerVariants}>
                <img src={projectImage} style={{ width: '100%' }} />
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={6} style={{ marginTop: '50px' }}>
              <motion.div variants={childVariants}>
                <div>
                  <Typography variant='h4' gutterBottom color='textPrimary' align='justify'>
                    {ProjectTitle}
                  </Typography>
                  <Typography variant='subtitle' gutterBottom color='textPrimary' align='justify'>
                    {projectText}
                  </Typography>

                  <div className={classes.list}>
                    <List component='nav' aria-label='main mailbox folders'>
                      <ListItem button>
                        <ListItemIcon>
                          <CheckCircleOutlineRoundedIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={projectFeature1} />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <CheckCircleOutlineRoundedIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={projectFeature2} />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <CheckCircleOutlineRoundedIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={projectFeature3} />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <CheckCircleOutlineRoundedIcon color='secondary' />
                        </ListItemIcon>
                        <ListItemText primary={projectFeature4} />
                      </ListItem>
                    </List>
                  </div>
                  <Box ml={8}>
                    <motion.div
                      variants={buttonVariants}
                      whileHover={{ scale: 1.1, originX: 0 }}
                      ref={ref}
                      style={{ opacity: inView ? 1 : 0 }}
                    >
                      <Button variant='contained' color='secondary' href={projectRef}>
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
    </motion.div>
  )
}
