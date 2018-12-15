import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const defaultStyles = {
  fontSize: 18,
  color: 'white',
  textAlign: 'center',
  height: '5em',
  whiteSpace: 'pre-line',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'
}

const TextLoader = (props) => {
  const styles = {...defaultStyles, ...props.styles}
  return (
    <div style={styles}>
      {props.sentence} <br />
      {props.counter && <Counter
        counter={props.counter}
        counterChars={props.counterChars}
        styles={{color: styles.color, ...props.counterStyles}}
      />}
    </div>
  )
}

TextLoader.propTypes = {
  styles: PropTypes.object,
  counterStyles: PropTypes.object,
  sentence: PropTypes.string,
  counterChars: PropTypes.string,
  counter: PropTypes.number
}

export default TextLoader
