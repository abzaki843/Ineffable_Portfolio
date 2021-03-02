import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
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
import { grey } from '@material-ui/core/colors'
import { Hidden } from '@material-ui/core'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import NavBar from './NavBar'
import List from '@material-ui/core/List'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
  },

  media: {
    height: 'auto',
  },
  divider: {
    width: '100%',

    backgroundColor: grey,
  },
})
const theme = {
  spacing: 2,
}
export default function MediaCard ({ cardInfo }) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <div className={(classes.root, classes.divider)}>
        <Grid direction='row' justify='center' alignItems='center' display='flex'>
          {cardInfo.map(card => (
            <>
              <Grid item md={4}>
                <Card
                  className={classes.root}
                  raised='true'
                  direction='column'
                  alignItems='center'
                  justify='center'
                >
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
            </>
          ))}
        </Grid>
      </div>
    </>
  )
}
