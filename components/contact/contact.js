import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import lottie from 'lottie-web'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import '@fontsource/poppins'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'
import { Hidden } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    height: 150,
  },
  bg: {
    backgroundColor: '#F5F5F5',
  },
}))
const theme = {
  spacing: 2,
}

export default function Contact () {
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
  const container = useRef(null)
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: container.current,
  //     render: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData: require('../animations/contact.json'),
  //   })
  // }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    let data = {
      name,
      email,
      message,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setBody('')
      }
    })
  }

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <Box mt={10} id='contact'>
        <div className={classes.root}>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Hidden mdDown>
              <Grid item xl={12} container direction='row' justify='center' alignItems='center'>
                <Typography component='h1' variant='h3' color='textPrimary'>
                  Get <span style={{ color: '#2BA054' }}> In Touch</span> with Us
                </Typography>
              </Grid>
              <Grid item xl={12} container direction='row' justify='center' alignItems='center'>
                <Typography variant='body1' color='textPrimary'>
                  Lets Start Something New ! Just ask and get Answers
                </Typography>
              </Grid>
            </Hidden>
            <Grid item md={6} lg={5} xl={5} className={classes.hide}>
              <motion.div variants={containerVariants}>
                {/* <div className='container' ref={container}></div> */}
                <motion.img
                  src='/Assets/contact-img.png'
                  style={{ width: '100%', height: 'auto' }}
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} lg={5} xl={6}>
              <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                  <motion.div variants={childVariants}>
                    <div>
                      <Hidden mdDown>
                        <Box mt={5}>
                          <motion.div
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1 }}
                          ></motion.div>
                          <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1, duration: 1.5 }}
                          >
                            <img
                              src='/Assets/divider.png'
                              style={{ width: '70%', height: '2px' }}
                            />
                          </motion.div>
                        </Box>
                      </Hidden>
                      <Hidden lgUp>
                        <Box align='center'>
                          <Box mt={2} />
                          <motion.div
                            initial={{ x: '100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1 }}
                          >
                            <Typography component='h1' variant='h3' color='textPrimary'>
                              Get <span style={{ color: '#2BA054' }}> In Touch</span>
                            </Typography>
                            <Typography variant='body1' color='textPrimary'>
                              Lets Start Something New ! Just ask and get Answers
                            </Typography>
                          </motion.div>
                          <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1, duration: 2 }}
                          >
                            <img
                              src='/Assets/contact-img.png'
                              style={{ width: '100%', height: 'auto', padding: '10px' }}
                            />
                          </motion.div>
                        </Box>
                      </Hidden>
                      <Box my={2} />
                      {/* <Typography variant='body1' color='textPrimary'>
                        Lets Start Something New ! Just ask and get Answers
                      </Typography> */}
                      <form className={classes.form} noValidate>
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          id='email'
                          label='Name'
                          name='name'
                          autoComplete='name'
                          onChange={e => {
                            setName(e.target.value)
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          label='email'
                          onChange={e => {
                            setEmail(e.target.value)
                          }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <EmailIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          label='message'
                          onChange={e => {
                            setMessage(e.target.value)
                          }}
                          InputProps={{
                            className: classes.input,
                            startAdornment: (
                              <InputAdornment position='start'>
                                <MessageIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Box align='left' mb={2}>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.submit}
                            onClick={e => {
                              handleSubmit(e)
                            }}
                          >
                            Send us Message
                          </Button>
                        </Box>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </Grid>
          </Grid>
        </div>
      </Box>
    </motion.div>
  )
}
