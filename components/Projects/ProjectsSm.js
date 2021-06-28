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
import 'fontsource-roboto'
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
      type: 'spring',
      stiffness: 120,
      mass: 0.4,
      damping: 10,
    },
  },
}

const useStyles = makeStyles(theme => ({
  hide: {
    [theme.breakpoints.up('lg')]: {
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
function ListItemLink (props) {
  return <ListItem button component='a' {...props} />
}

export default function ProjectsSm ({
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
      <div className={(classes.root, classes.hide)}>
        <Grid container spacing={3} direction='row' justify='center' alignItems='flex-start'>
          <>
            <motion.div variants={containerVariants}>
              <Grid item xs={11} sm={10} lg={5}>
                <Grid container justify='center'>
                  <Typography
                    variant='h4'
                    gutterBottom
                    color='textPrimary'
                    align='justify'
                    style={{ marginTop: '30px' }}
                  >
                    {ProjectTitle}
                  </Typography>
                  <Grid item xs={11} lg={5} align='justify'>
                    <Typography variant='subtitle' gutterBottom color='textPrimary' align='justify'>
                      {projectText}
                    </Typography>
                  </Grid>
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
                      <Box ml={15}>
                        <Button
                          variant='contained'
                          color='secondary'
                          justify='center'
                          href={projectRef}
                        >
                          Visit Web
                        </Button>
                      </Box>
                    </List>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={6}>
                <img src={projectImage} width={'100%'} />
              </Grid>
            </motion.div>
          </>
        </Grid>
      </div>
    </motion.div>
  )
}
