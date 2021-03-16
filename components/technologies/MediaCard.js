import React from 'react'
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
  },

  media: {
    height: 'auto',
  },
  divider: {
    width: '100%',
  },
}))

export default function MediaCard ({ cardInfo }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.margin}>
        <Box mt={5}>
          <Grid container spacing={2}>
            {cardInfo.map(card => (
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Card className={classes.card} raised='true' style={{ margin: 'auto' }}>
                  <CardMedia className={classes.media} image={card.image} component='img' />
                  <CardActionArea>
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
                      <Typography variant='body2' color='textSecondary'>
                        {card.text}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  )
}
