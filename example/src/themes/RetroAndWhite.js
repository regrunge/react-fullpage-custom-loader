import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // TRON quotes, anyone?
    'Greetings, programs!',
    'Tron! What have you become?',
    'You can\'t steal something that\'s designed to be given away free.'
  ],
  loaderType: 'ball-8bits', // Retro loading!
  loaderSize: 'big', // small, medium or big?
  color: 'white', // your default color for the loader
  textStyles: { // Any CSS style!
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 'bold',
    height: '4em',
    color: '#ffff00' // Yes, yellow text
  },
  wrapperBackgroundColor: 'rgba(0,0,0,0.85)', // any valid CSS background string works
  counter: true, // We are going to show the counter below the text
  counterMax: 15, // Stop after 15 cycles
  counterDelay: 3000, // A cycle length in milliseconds
  counterChars: '░', // I believe this is an appropriate ascii char
  counterStyles: {}, // keeping the default counter styles
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const RetroAndWhite = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default RetroAndWhite
