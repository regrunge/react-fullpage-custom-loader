import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Star trek quotes?
    '"Logic is the beginning of wisdom, not the end." - Spock',
    '"Improve a mechanical device and you may double productivity. But improve man, you gain a thousandfold." - Khan Noonien Singh',
    '"I canna\' change the laws of physics." - Montgomery "Scotty" Scott'
  ],
  loaderType: 'timer', // a clock!
  loaderSize: 'big', // small, medium or big?
  color: 'limegreen', // your default color for the loader, here terminal-ish
  textStyles: { // Any CSS style!
    fontFamily: 'monospace',
    fontSize: 18,
    height: '5em',
    color: 'limegreen'
  },
  wrapperBackgroundColor: 'black', // any valid CSS background string works
  counter: true, // We are going to show the counter below the text
  counterMax: 5, // Stop after 5 cycles
  counterDelay: 3000, // A cycle length in milliseconds
  counterChars: '■', // I believe this is appropriate for terminal stuff
  counterStyles: {}, // keeping the default counter styles
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const Terminal = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default Terminal
