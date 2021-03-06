import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(({ palette, theme }) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  card: {
    borderRadius: 12,
    maxWidth: 256,
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

export const ProfileCardDemo = React.memo(function ProfileCard ({
  aboutTitle,
  aboutImage,
  aboutName,
}) {
  const styles = useStyles()
  const shadowStyles = useFadedShadowStyles()
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  })
  const classes = useStyles()

  function CardRow () {
    return (
      <React.Fragment>
        <Card className={cx(styles.card, shadowStyles.root)}>
          <CardContent>
            <Avatar className={styles.avatar} src={aboutImage} />
            <h3 className={styles.heading}>{aboutTitle}</h3>
            <span className={styles.subheader}>{aboutName}</span>
          </CardContent>
          <Divider light />
        </Card>
      </React.Fragment>
    )
  }
  return (
    <div>
      <CardRow />
    </div>
  )
})

export default ProfileCardDemo
