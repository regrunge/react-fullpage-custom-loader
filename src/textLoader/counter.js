import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  fontSize: 16,
  color: 'white',
  textAlign: 'center'
}

const counterShow = (counter, char) => {
  if (!char) {
    return counter
  }

  return new Array(counter).fill(char)
}

const Counter = (props) => {
  const styles = {...defaultStyles, ...props.styles}
  const counter = counterShow(props.counter, props.counterChars)
  return (
    <div style={styles}>
      {counter}
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number,
  counterChars: PropTypes.string,
  styles: PropTypes.object
}

export default Counter
