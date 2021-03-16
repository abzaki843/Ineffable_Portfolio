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

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(0, 1),
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
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar justifyContent='flex-end'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Hidden lgUp>
              <MenuIcon />
            </Hidden>
          </IconButton>
          <Box display='flex' flexGrow={1}>
            <Hidden mdDown>
              <img
                src='./Assets/logo.png'
                alt='Kitty Katty!'
                style={{ maxWidth: 250, marginRight: '10px', flex: 1 }}
              />
            </Hidden>
            <Hidden lgUp>
              <img
                src='./Assets/logo.png'
                alt='Kitty Katty!'
                style={{
                  maxWidth: 200,
                  margin: 'auto',
                }}
              />
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
              <li>
                <Link href='#hero'>
                  <Typography variant='button' display='block' gutterBottom>
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href='#tech'>
                  <Typography variant='button' display='block' gutterBottom>
                    Technologies
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href='#projects'>
                  <Typography variant='button' display='block' gutterBottom>
                    Our Work
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href='#team'>
                  <Typography variant='button' display='block' gutterBottom>
                    Team
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href='#contact'>
                  <Typography variant='button' display='block' gutterBottom>
                    Contact
                  </Typography>
                </Link>
              </li>
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
    </div>
  )
}
