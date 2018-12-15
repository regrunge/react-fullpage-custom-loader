import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Soothing random quotes and yes, with line breaks :)
    'Each person deserves a day away in which no problems are confronted, no solutions searched for\n - Maya Angelou - ',
    'A daily dose of daydreaming heals the heart, soothes the soul, and strengthens the imagination\n - Richelle E. Goodrich - ',
    'Anyone who thinks heaven is not hot water behind a locked door has forgotten what it means to live\n - Lucy Frank - '
  ],
  loaderType: 'line-spin-fade', // a classic
  loaderSize: 'big', // small, medium or big?
  color: '#d9d9f3', // your default color for the loader
  textStyles: { // Any CSS style!
    fontFamily: 'serif',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    height: '4em',
    color: '#524d5b'
  },
  wrapperBackgroundColor: 'rgb(244, 240, 230, 0.95)', // any valid CSS background string works
  counter: true, // We are going to show the counter below the text
  counterMax: 5, // Stop after 5 cycles
  counterDelay: 3000, // A cycle length in milliseconds
  counterChars: '.', // Any characters, here a single dot
  counterStyles: {
    color: '#9dd3a8'
  }, // any text style to modify the counter
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const SoothingBeige = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default SoothingBeige
