import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Link from '@material-ui/core/Link'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import TextFieldIcon from 'material-ui-textfield-icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import EmailIcon from '@material-ui/icons/Email'
import MessageIcon from '@material-ui/icons/Message'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}))
const theme = {
  spacing: 2,
}

export default function Contact () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Divider />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} lg={6}>
          <img src='/Assets/contact-img.png' style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component='h1' variant='h5'>
                Contact us
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MessageIcon />
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                >
                  Send
                </Button>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}
