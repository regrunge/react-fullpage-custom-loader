import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Soothing random quotes and yes, with line breaks :)
    'Each person deserves a day away in which no problems are confronted, no solutions searched for\n - Maya Angelou - ',
    'A daily dose of daydreaming heals the heart, soothes the soul, and strengthens the imagination\n - Richelle E. Goodrich - ',
    'Anyone who thinks heaven is not hot water behind a locked door has forgotten what it means to live\n - Lucy Frank - '
  ],
  loaderType: 'ball-circus', // a nice one
  loaderSize: 'whatever-resets-to-default', // small, medium or big?
  color: '#add0ff', // your default color for the loader
  textStyles: { // Any CSS style!
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: 'bold',
    height: '6em',
    color: 'rgb(127, 150, 230)',
    textShadow: '1px -1px 0px white'
  },
  wrapperBackgroundColor: 'linear-gradient(to bottom, rgba(248,242,255,0.95) 0%,rgba(239,221,255,0.95) 50%,rgba(220,206,255,0.95) 100%)', // any valid CSS background string works (gradients here!)
  counter: true, // We are going to show the counter below the text
  counterMax: 10, // Stop after 10 cycles
  counterDelay: 2000, // A cycle length in milliseconds (in this case 2 seconds for every cycle)
  counterChars: null, // if no chars are passed you get to see the counter number
  counterStyles: {
    color: 'white',
    textShadow: 'none'
  }, // any text style to modify the counter
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const CandyFloss = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default CandyFloss
