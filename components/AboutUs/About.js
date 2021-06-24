import React, { useEffect } from 'react'
import cx from 'clsx'
import NextLink from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
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

const useStyles = makeStyles(({ palette, theme }) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  card: {
    borderRadius: 12,
    maxWidth: 350,
    minHeight: 331,
    textAlign: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}))

export const ProfileCardDemo = React.memo(function CardRow ({
  aboutTitle,
  aboutImage,
  aboutName,
  linked,
  facebook,
}) {
  const styles = useStyles()
  const animation = useAnimation()
  const [ref, inView, entry] = useInView({ threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    } else {
      animation.start('')
    }
  }, [animation, inView])

  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  })
  const classes = useStyles()

  function CardRow () {
    return (
      <>
        <motion.div variants={containerVariants}>
          <Card className={cx(styles.card)} style={{ margin: 'auto', backgroundColor: '#F3FEEF' }}>
            <CardContent>
              <Avatar className={styles.avatar} src={aboutImage} />
              <h3 className={styles.heading}>{aboutTitle}</h3>
              <span className={styles.subheader}>{aboutName}</span>
            </CardContent>
            {/* <Divider light /> */}
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>
                  <NextLink href={linked}>
                    <img src='./Assets/linked.png' />
                  </NextLink>
                </p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>
                  <NextLink href={facebook}>
                    {/* <FacebookIcon style={{ color: '#67c974' }} /> */}
                    <img src='./Assets/face.png' />
                  </NextLink>
                </p>
              </Box>
            </Box>
          </Card>
        </motion.div>
      </>
    )
  }
  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <CardRow />
    </motion.div>
  )
})

export default ProfileCardDemo
