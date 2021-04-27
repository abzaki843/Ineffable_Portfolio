import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import 'fontsource-roboto'
import Box from '@material-ui/core/Box'
import ProfileCardDemo from './About'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const useStyles = makeStyles({
  divider: {
    width: '100%',
    maxWidth: '100%',
  },
  root: {
    flexGrow: 1,
  },
})
const theme = {
  spacing: 8,
}
export default function AboutCont () {
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

  const AboutInfo = [
    {
      image: '/Assets/Ahsan.jfif',
      title: 'CEO',
      name: 'Ahsan Ansari',
      linked: 'https://www.linkedin.com/in/ahsan-ansari-865466143/',
      facebook: 'https://www.facebook.com/ahsan.ansari.33',
    },
    {
      image: '/Assets/Ali.jfif',
      title: 'Technical Lead',
      name: 'Ali Ansari',
      linked: 'https://www.linkedin.com/in/ali-ansari-116b47a2/',
      facebook: 'https://www.facebook.com/aliwajdan.ansari',
    },

    {
      image: '/Assets/hamza.jfif',
      title: 'Backend Lead',
      name: 'Hamza Rehman ',
      linked: 'https://www.linkedin.com/in/hamza-rahman-01750787/',
      facebook: 'https://www.facebook.com/heman7',
    },
    {
      image: '/Assets/abdul.jfif',
      title: 'Manager',
      name: 'Abdul Basit ',
      linked: 'https://www.linkedin.com/in/abdul-basit-khan-70a893186/',
      facebook: 'https://www.facebook.com/abdul.basit.9212',
    },
    {
      image: '/Assets/saada.jpg',
      title: 'Developer',
      name: 'Saad ul Hassan',
      linked: 'https://www.linkedin.com/in/saad-ul-hassan-72a7b1190/',
      facebook: 'https://www.facebook.com/profile.php?id=100014828587193',
    },
    {
      image: '/Assets/saad.jfif',
      title: 'QA Engineer',
      name: 'Saad Arshad',
      linked: 'https://www.linkedin.com/in/saadarshadmehmood/',
      facebook: 'https://www.facebook.com/saadarshadmehmood',
    },
    {
      image: '/Assets/awais.jpg',
      title: 'Designer',
      name: 'Awais Shah',
      linked: 'https://www.linkedin.com/in/imawais/',
      facebook: 'https://www.facebook.com/Awais7o7',
    },
    {
      image: '/Assets/aliasad.jpg',
      title: 'Developer',
      name: 'Ali Asad',
      linked: '',
      facebook: '',
    },
  ]

  return (
    <motion.div ref={ref} initial='hidden' animate={animation}>
      <div id='team'>
        <Box mt={5}>
          <Grid container spacing={1} justify-content='center' align='center'>
            <Grid item xs={12}>
              <Box mt={6}>
                <motion.div
                  initial={{ x: '100vw' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <Typography
                    variant='h3'
                    gutterBottom
                    color='textPrimary'
                    justify-content='center'
                  >
                    Our Team
                  </Typography>
                </motion.div>
              </Box>
              <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <img
                  src='/Assets/divider.png'
                  style={{ width: '13%', height: '12px', padding: '5px' }}
                />
              </motion.div>
              <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <Typography
                  variant='body1'
                  gutterBottom
                  color='textSecondary'
                  justify-content='center'
                >
                  Achievements of an organization are result of combined efforts of every individual
                </Typography>
              </motion.div>
            </Grid>

            {AboutInfo.map(about => (
              <>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <ProfileCardDemo
                    aboutImage={about.image}
                    aboutTitle={about.title}
                    aboutName={about.name}
                    linked={about.linked}
                    facebook={about.facebook}
                  />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </div>
    </motion.div>
  )
}
