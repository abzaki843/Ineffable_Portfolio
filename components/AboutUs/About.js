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
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Link from 'next/link'
import Collapse from '@material-ui/core/Collapse'

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
  linked,
  facebook,
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
        <Collapse in>
          <Card className={cx(styles.card)}>
            <CardContent>
              <Avatar className={styles.avatar} src={aboutImage} />
              <h3 className={styles.heading}>{aboutTitle}</h3>
              <span className={styles.subheader}>{aboutName}</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>
                  {' '}
                  <Link href={linked}>
                    <LinkedInIcon style={{ color: '#67c974' }} />
                  </Link>
                </p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={styles.statLabel}>
                  {' '}
                  <Link href={facebook}>
                    <FacebookIcon style={{ color: '#67c974' }} />
                  </Link>{' '}
                </p>
              </Box>
            </Box>
          </Card>
        </Collapse>
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
