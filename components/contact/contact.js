import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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
      animation.start('hidden')
    }
  }, [animation, inView])

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <Box mt={10} id='contact'>
        <div className={(classes.root, classes.bg)}>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item md={6} lg={7} xl={6} className={classes.hide}>
              <motion.div variants={containerVariants}>
                <img src='/Assets/contact-img.png' style={{ width: '100%' }} />
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
                          >
                            <Typography component='h1' variant='h3' color='textPrimary'>
                              Get In Touch
                            </Typography>
                          </motion.div>
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
                              Get In Touch
                            </Typography>
                          </motion.div>
                          <motion.div
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 1, duration: 2 }}
                          >
                            <img
                              src='/Assets/divider.png'
                              style={{ width: '50%', height: 'auto', padding: '10px' }}
                            />
                          </motion.div>
                        </Box>
                      </Hidden>
                      <Box my={2} />
                      <Typography variant='body1' color='textSecondary'>
                        Lets Start Something New ! Just ask and get Answers
                      </Typography>
                      <form className={classes.form} noValidate>
                        <TextField
                          variant='outlined'
                          margin='normal'
                          required
                          fullWidth
                          id='email'
                          label='Name'
                          name='email'
                          autoComplete='email'
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
                          InputProps={{
                            className: classes.input,
                            startAdornment: (
                              <InputAdornment position='start'>
                                <MessageIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Box align='center' mb={2}>
                          <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                          >
                            Send
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
