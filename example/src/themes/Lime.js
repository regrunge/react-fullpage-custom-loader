import React from 'react'
import ExampleComponent from 'react-fullpage-custom-loader'

const defaultProps = {
  sentences: [ // Bob marley!
    'As a man sow, shall he reap. and I know that talk is cheap. But the heat of the battle is as sweet as the victory.',
    'The people who were trying to make this world worse are not taking the day off. Why should I?',
    'I know that I’m not perfect and that I don’t claim to be, so before you point your fingers make sure your hands are clean.'
  ],
  loaderType: 'ball-clip-rotate-multiple',
  loaderSize: 'big', // small, medium or big?
  color: '#ffffff', // your default color for the loader
  textStyles: { // Any CSS style!
    fontSize: 32,
    height: '5em',
    color: 'white'
  },
  wrapperBackgroundColor: 'linear-gradient(to bottom, rgba(210,255,82,0.95) 0%,rgba(33,255,148,0.95) 50%,rgba(40,239,73,0.95) 51%,rgba(121,255,211,0.95) 100%)', // any valid CSS background string works (gradients here!)
  counter: true, // We are going to hide the counter below the text
  counterMax: 15, // Stop after 15 cycles
  counterDelay: 2000, // A cycle length in milliseconds
  counterChars: '🍋', // Any char! Even emojis
  counterStyles: {
    color: '#b6ffd8',
    fontSize: 20,
    fontWeight: 'bold',
    textShadow: 'rgb(60, 127, 80) 1px 1px 1px'
  }, // any text style to modify the counter
  fadeIn: true, // controlled on top level
  startFadeOut: false // controlled on top level
}

const Lime = (props) => {
  return (
    <ExampleComponent
      {...defaultProps}
      {...props}
    />
  )
}

export default Lime
