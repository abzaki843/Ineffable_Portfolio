import Head from 'next/head'
import React from 'react'
import clsx from 'clsx'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hero from '../components/hero'
import Box from '@material-ui/core/Box'
import CardContainer from '../components/technologies/CardContainer'
import ProjectContainer from '../components/Projects/ProjectCont'
import AboutCont from '../components/AboutUs/AboutCont'
import Contact from '../components/contact/contact'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from 'next/link'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import List from '@material-ui/core/List'
import Footer from '../components/footer'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import PropTypes from 'prop-types'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  margin: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '-10px',
    },
  },

  root: {
    flexGrow: 1,
    display: 'flex',
  },
  drawer: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))
function HideOnScroll (props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}
export default function ButtonAppBar (props) {
  const classes = useStyles()
  const theme = useTheme()
  const { width } = props
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.roots}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar justifyContent='flex-end'>
            <Hidden lgUp>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
              style={{marginRight:"-54px"}}
            >
              <Hidden lgUp>
                <MenuIcon />
              </Hidden>
            </IconButton>
            </Hidden>
            <Box display='flex' flexGrow={1} >
           
              <Hidden mdDown>
                <Link href='#hero'>
                  <img
                    src='./Assets/logo.png'
                    alt='Kitty Katty!'
                    style={{ maxWidth: 250, flex: 1 }}
                  />
                </Link>
              </Hidden>
            
              <Hidden lgUp >
              
                <Link href='#hero'>
                  <img
                    src='./Assets/logo.png'
                    alt='Kitty Katty!'
                    style={{
                      maxWidth: 200,
                      margin: 'auto',
                    }}
                  />
                </Link>
               
              </Hidden>
            </Box>

            <Hidden mdDown>
              <nav>
                <ul>
                  <Link href='#hero'>
                    <Button variant='contained' size='small' color='primary' disableElevation>
                      Home
                    </Button>
                  </Link>
                  <Link href='#tech'>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      href='#contained-buttons'
                      disableElevation
                    >
                      Technologies
                    </Button>
                  </Link>
                  <Link href='#projects'>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      href='#contained-buttons '
                      disableElevation
                    >
                      Our Work
                    </Button>
                  </Link>
                  <Link href='#team'>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      href='#contained-buttons'
                      disableElevation
                    >
                      Team
                    </Button>
                  </Link>
                  <Link href='#contact'>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      href='#contained-buttons'
                      disableElevation
                    >
                      Contact
                    </Button>
                  </Link>
                </ul>
              </nav>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden lgUp>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />

          <List>
            <ul>
              <Link href='#hero'>
                <Typography variant='button' display='block' gutterBottom>
                  Home
                </Typography>
              </Link>

              <Link href='#tech'>
                <Typography variant='button' display='block' gutterBottom>
                  Technologies
                </Typography>
              </Link>

              <Link href='#projects'>
                <Typography variant='button' display='block' gutterBottom>
                  Our Work
                </Typography>
              </Link>

              <Link href='#team'>
                <Typography variant='button' display='block' gutterBottom>
                  Team
                </Typography>
              </Link>

              <Link href='#contact'>
                <Typography variant='button' display='block' gutterBottom>
                  Contact
                </Typography>
              </Link>
            </ul>
          </List>
        </Drawer>
      </Hidden>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
      <Hero />
      <CardContainer />
      <ProjectContainer />
      <AboutCont />
      <Contact />
      <Footer />
    </div>
  )
}
