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

const useStyles = makeStyles(theme => ({
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
const theme = {
  spacing: 8,
}
export default function MediaCard ({ cardInfo }) {
  const classes = useStyles()

  return (
    <>
      <div className={classes.divider}>
        <Box ml={20}>
          <Grid container spacing={3}>
            {cardInfo.map(card => (
              <Grid item xs={12} lg={4}>
                <Card className={classes.card} raised='true'>
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
