import React, {Component} from 'react'

import CandyFloss from './themes/CandyFloss'
import Lime from './themes/Lime'
import RetroAndWhite from './themes/RetroAndWhite'
import SimpleDark from './themes/SimpleDark'
import SimpleLight from './themes/SimpleLight'
import SoothingBeige from './themes/SoothingBeige'
import SugarRush from './themes/SugarRush'
import Terminal from './themes/Terminal'

import styles from './demoStyles'

const allThemes = [
  'CandyFloss',
  'Lime',
  'RetroAndWhite',
  'SimpleDark',
  'SimpleLight',
  'SoothingBeige',
  'SugarRush',
  'Terminal'
];

export default class App extends Component {
  state = {
    enableLoader: false,
    fadeIn: true,
    fadeOut: false,
    theme: 'CandyFloss'
  }

  toggleLoader = () => {
    this.setState(prevState => ({enableLoader: !prevState.enableLoader}))
    setTimeout(() => {
      if (this.state.fadeIn) {
        this.setState({fadeOut: true})
      }
    }, 6500)
    setTimeout(() => {
      this.setState({enableLoader: false, fadeOut: false})
    }, 7000)
  }

  toggleFadeIn = () => {
    this.setState(prevState => ({fadeIn: !prevState.fadeIn}))
  }

  getTheme = () => {
    const {theme} = this.state

    switch (theme) {
      case 'Lime':
        return (<Lime fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'RetroAndWhite':
        return (<RetroAndWhite fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'SimpleDark':
        return (<SimpleDark fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'SimpleLight':
        return (<SimpleLight fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'SoothingBeige':
        return (<SoothingBeige fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'SugarRush':
        return (<SugarRush fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      case 'Terminal':
        return (<Terminal fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
      default:
        return (<CandyFloss fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} />)
    }
  }

  renderThemeButtons = () => (
    allThemes.map(themeName => (
      <div style={styles.themeSelect} onClick={() => this.setState({theme: themeName})}>
        <img src={require(`./assets/${themeName}.png`)} style={{width: '100%'}} />
        {themeName}
      </div>
    ))
  )

  render() {
    return (
      <div style={styles.demoWrapper}>
        {this.state.enableLoader && this.getTheme()}

        <h1>React Fullpage Custom Loader</h1>
        <p>These are just examples of configuration, feel free to copy them and reuse them as you please, but notice
          that the greatest value of this component lies in its flexibility of style. Try to use your app color-schemes
          and apply your styling to it.</p>
        <p>
          This is here only for demo purposes and more explanation on how to configure and use this component are
          on <br />
          <a href='https://github.com/regrunge/react-fullpage-custom-loader' target='_blank'>github</a> and
          <a href='https://www.npmjs.com/package/react-fullpage-custom-loader' target='_blank'>npm</a>
        </p>
        <p>
          <b>Please note that the design of this page is not "ugly" but a tribute to the year 1997.</b>
          <blockquote>
            I missed <pre>background: antiquewhite;</pre> don't you?
          </blockquote>
        </p>
        <div style={styles.rowWrapper}>
          <button onClick={this.toggleLoader} style={styles.button}>Open Loader! (theme: {this.state.theme})</button>
          <button onClick={this.toggleFadeIn} style={styles.buttonInverted}>Toggle fade In ({this.state.fadeIn ? 'on' : 'off'})
          </button>
        </div>
        <div style={{...styles.rowWrapper, width: '100%'}}>
          {this.renderThemeButtons()}
        </div>
      </div>
    )
  }
}
