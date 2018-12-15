import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/css/ball-running-dots.min.css'

const BallRunningDots = (props) => {
  let size = 'la-2x'
  switch (props.size) {
    case 'small':
      size = 'la-1x'
      break
    case 'big':
      size = 'la-3x'
      break
    default:
      size = 'la-2x'
      break
  }

  const classes = [ styles['la-ball-running-dots'], styles[size] ].join(' ')

  const color = props.color ? props.color : '#fff'

  return (
    <div className={classes} style={{ color }}>
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

BallRunningDots.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default BallRunningDots
