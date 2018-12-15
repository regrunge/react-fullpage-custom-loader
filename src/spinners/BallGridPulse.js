import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/css/ball-grid-pulse.min.css'

const BallGridPulse = (props) => {
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

  const classes = [ styles['la-ball-grid-pulse'], styles[size] ].join(' ')

  const color = props.color ? props.color : '#fff'

  return (
    <div className={classes} style={{ color }}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

BallGridPulse.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default BallGridPulse
