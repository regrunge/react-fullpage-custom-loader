import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Wreck it, Ralph!
    '"Turns out I don’t need a medal to tell me I’m a good guy."\nRalph',
    '"I’m not a glitch, Taffyta. I’ve just got pixlexia, okay?"\nVanellope',
    '"Look at that high definition. Your face … it’s amazing!"\nFelix'
  ],
  loaderType: 'pacman', // of course!
  loaderSize: 'big', // small, medium or big?
  color: '#ff3366', // your default color for the loader
  textStyles: { // Any CSS style!
    fontSize: 24,
    height: '5em',
    color: 'black'
  },
  wrapperBackgroundColor: 'linear-gradient(rgba(0, 255, 153, 0.75) 0%, rgba(51, 204, 204, 0.75) 100%)', // any valid CSS background string works (gradients here!)
  counter: false, // We are going to hide the counter below the text
  counterMax: 10, // Stop after 10 cycles
  counterDelay: 2000, // A cycle length in milliseconds
  counterChars: null, // if no chars are passed you get to se the counter number
  counterStyles: {
    color: 'white',
    textShadow: 'none'
  }, // any text style to modify the counter
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const SugarRush = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default SugarRush
