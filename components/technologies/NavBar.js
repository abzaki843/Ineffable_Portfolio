import React, { Component } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MediaCard from './MediaCard'
const useStyles = makeStyles({
  navitems: {
    overflow: 'auto',
    whitespace: 'nowrap',
  },

  menucontainer: {
    display: 'flex',
    flexdirection: 'row',
  },
  button: {
    color: 'blue',
    border: 'none',
    backgroundcolor: 'black',
    textalign: 'center',
    padding: '14px',
    /* text-decoration: none; */
    cursor: 'pointer',
  },
})
const NavBar = ({ cardInfo }) => {
  const classes = useStyles()
  const navRef = React.createRef()
  const handleNav = direction => {
    if (direction === 'left') {
      navRef ? (navRef.current.scrollLeft -= 200) : null
    } else {
      navRef ? (navRef.current.scrollLeft += 200) : null
    }
  }

  return (
    <div className={classes.menucontainer}>
      <div>
        <button onClick={() => handleNav('left')}>
          <i className='fa fa-lg fa-chevron-left'></i>
        </button>
      </div>
      <div className={classes.navitems} ref={navRef}>
        <MediaCard cardInfo={cardInfo} />
      </div>
      <div>
        <button onClick={() => handleNav('right')}>
          <i className='fa fa-lg fa-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}

/* This func handles the scrolling by incrementing or decrementing
   the scrollLeft property */

/*In the render, we access nav-items via its ref attribute and controls
  it with the 'Prev' and 'Next' buttons using the func defined above */

export default NavBar
