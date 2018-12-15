import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Soothing random quotes and yes, with line breaks :)
    'To err is human, but to really foul things up you need a computer...',
    'Never trust a computer you can\'t throw out a window...',
    'Never trust a computer you can\'t throw out a window...'
  ],
  loaderType: 'fire', // a nice one
  loaderSize: 'big', // small, medium or big?
  color: '#a0aaae', // your default color for the loader
  textStyles: { // Any CSS style!
    fontSize: 16,
    fontWeight: 'bold',
    height: '3em',
    color: '#a0aaae'
  },
  wrapperBackgroundColor: 'linear-gradient(to bottom, #373e40 0%, #111111 100%)', // any valid CSS background string works (gradients here!)
  counter: false, // We are going to show the counter below the text
  counterMax: 5, // Stop after 5 cycles
  counterDelay: 3000, // A cycle length in milliseconds
  counterChars: null, // if no chars are passed you get to see the counter number
  counterStyles: {
    color: 'white'
  }, // any text style to modify the counter
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const SimpleDark = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default SimpleDark
