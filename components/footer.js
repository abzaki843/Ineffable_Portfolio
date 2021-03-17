import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

export default function Footer () {
  return (
    <>
      <AppBar position='static' className='footer'>
        <Container maxWidth='md'>
          <Toolbar>
            <Grid container direction='row' justify='center' alignItems='center'>
              <Grid item xs={10} lg={6}>
                <ul>
                  <li>
                    <Link href='#hero'>Home</Link>
                  </li>
                  <li>
                    <Link href='#tech'>Technologies</Link>
                  </li>
                  <li>
                    <Link href='#projects'>Our Work</Link>
                  </li>
                  <li>
                    <Link href='#team'>Team</Link>
                  </li>
                  <li>
                    <Link href='#contact'>Contact</Link>
                  </li>
                </ul>
              </Grid>

              <Grid item xs={10} lg={6}></Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
