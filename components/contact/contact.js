import React from 'react'
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

  return (
    <Box mt={10} id='contact'>
      <div className={(classes.root, classes.bg)}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item lg={5} xl={5} className={classes.hide}>
            <img src='/Assets/contact-img.png' />
          </Grid>

          <Grid item xs={12} lg={7} xl={7}>
            <Container component='main' maxWidth='xs'>
              <CssBaseline />
              <div className={classes.paper}>
                <Hidden mdDown>
                  <Box mt={5}>
                    <Typography component='h1' variant='h3' color='textPrimary'>
                      Get In Touch
                    </Typography>
                    <img
                      src='/Assets/divider.png'
                      style={{ width: '50%', height: 'auto', padding: '10px' }}
                    />
                  </Box>
                </Hidden>
                <Hidden lgUp>
                  <Box align='center'>
                    <Typography component='h1' variant='h3' color='textPrimary'>
                      Get In Touch
                    </Typography>
                    <img
                      src='/Assets/divider.png'
                      style={{ width: '50%', height: 'auto', padding: '10px' }}
                    />
                  </Box>
                </Hidden>
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
                    autoFocus
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
                    name='password'
                    label='email'
                    type='password'
                    id='password'
                    autoComplete='current-password'
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
                    name='password'
                    label='message'
                    type='password'
                    id='password'
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
            </Container>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}
