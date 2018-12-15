import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/css/line-spin-clockwise-fade.min.css'

const LineSpinClockwiseFade = (props) => {
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

  const classes = [ styles['la-line-spin-clockwise-fade'], styles[size] ].join(' ')

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
    </div>
  )
}

LineSpinClockwiseFade.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

export default LineSpinClockwiseFade