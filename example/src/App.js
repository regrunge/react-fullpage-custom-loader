import React, { Component } from 'react'

import ExampleComponent from 'react-fullpage-custom-loader'

export default class App extends Component {
  state={
    enableLoader: true,
    fadeIn: false,
    fadeOut: false
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

  render () {
    return (
      <div>
        <button onClick={this.toggleLoader}>Open Loader!</button>
        <button onClick={this.toggleFadeIn}>Toggle fadeIn ({this.state.fadeIn ? 'on' : 'off'})</button>
        { this.state.enableLoader && <ExampleComponent counterDelay={1000} counter counterChars='😃' fadeIn={this.state.fadeIn} startFadeOut={this.state.fadeOut} /> }
      </div>
    )
  }
}
