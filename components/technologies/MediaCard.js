import React from 'react'
import 'fontsource-roboto'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Zoom from '@material-ui/core/Zoom'
import FormControlLabel from '@material-ui/core/FormControlLabel'
const theme = {
  spacing: 8,
}
const useStyles = makeStyles(theme => ({
  margin: {
    [theme.breakpoints.only('xs')]: {},
    [theme.breakpoints.only('sm')]: {},
    [theme.breakpoints.only('lg')]: {},
    [theme.breakpoints.only('xl')]: {},
    [theme.breakpoints.only('md')]: {},
  },
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 350,
    minHeight: 331,
  },

  media: {
    height: 'auto',
  },
  divider: {
    width: '100%',
  },
  MuiCardActionArea: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
  },
}))

export default function MediaCard ({ cardInfo }) {
  const classes = useStyles()

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  return (
    <>
      <div className={classes.margin}>
        <Box mt={1}>
          <Grid container spacing={2}>
            {cardInfo.map(card => (
              <Grid item xs={12} sm={6} md={6} lg={3} style={{ padding: '20px' }}>
                <Zoom in>
                  <Card className={classes.card} style={{ margin: 'auto' }}>
                    <CardMedia className={classes.media} image={card.image} component='img' />
                    <CardActionArea className={classes.MuiCardActionArea}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant='h5'
                          direction='row'
                          justify='center'
                          align='center'
                          style={{ align: 'center' }}
                          color='textSecondary'
                        >
                          {card.title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' display='inline'>
                          {card.text}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}
