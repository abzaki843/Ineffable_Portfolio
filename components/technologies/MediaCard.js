import React, { useEffect } from 'react'
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
      type: 'spring',
      mass: 0.4,

      damping: 8,
    },
  },
}

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

export default function MediaCard ({ cardInfo }, props) {
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
    <>
      <motion.div ref={ref} initial='hidden' animate={animation}>
        <div className={classes.margin} {...props}>
          <Box mt={1}>
            <Grid container spacing={2}>
              {cardInfo.map(card => (
                <Grid item xs={12} sm={6} md={6} lg={3} style={{ padding: '20px' }}>
                  <motion.div
                    variants={containerVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
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
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </motion.div>
    </>
  )
}
