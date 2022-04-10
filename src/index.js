import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import SpinnerLoader from './spinnerLoader/SpinnerLoader'
import TextLoader from './textLoader'

const fadeOutWrapperStyles = [styles.WrapperUi, styles.hidden].join(' ')

export default class ExampleComponent extends React.PureComponent {
  static propTypes = {
    sentences: PropTypes.array,
    loaderType: PropTypes.string,
    loaderSize: PropTypes.string,
    color: PropTypes.string,
    textStyles: PropTypes.object,
    wrapperStyles: PropTypes.object,
    wrapperClassName: PropTypes.string,
    wrapperBackgroundColor: PropTypes.string,
    customLoader: PropTypes.object,
    counter: PropTypes.bool,
    counterMax: PropTypes.number,
    counterDelay: PropTypes.number,
    counterChars: PropTypes.string,
    counterStyles: PropTypes.object,
    fadeIn: PropTypes.bool,
    startFadeOut: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string
  }

  state = {
    intervalId: null,
    timeoutId: null,
    sentence: null,
    counter: 0,
    wrapperStyles: fadeOutWrapperStyles
  }

  componentDidMount () {
    this.changeSentence()
    const intervalId = setInterval(this.changeSentence, (this.props.counterDelay || 3000))

    let timeoutId = null
    this.setState({intervalId})
    const { fadeIn } = this.props
    if (!fadeIn) {
      this.showWrapper()
    } else {
      timeoutId = setTimeout(this.showWrapper, 100)
    }

    this.setState({timeoutId})
  }

  componentWillUnmount () {
    if (this.state.intervalId) clearInterval(this.state.intervalId)
    if (this.state.timeoutId) clearTimeout(this.state.timeoutId)
  }

  changeSentence = () => {
    const counterMax = this.props.counterMax || 15
    if (this.state.counter >= counterMax) {
      if (this.state.intervalId) clearInterval(this.state.intervalId)
    }

    this.setState(prevState => {
      const sentence = this.sentences[this.getRandomInt(0, this.sentences.length - 1)]
      if (prevState.sentence !== sentence) {
        return { sentence, counter: prevState.counter + 1 }
      } else {
        return { counter: prevState.counter + 1 }
      }
    })
  }

  defaultSentences = [
    '"A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools." \nDouglas Adams',
    '"HUMAN BEINGS MAKE LIFE SO INTERESTING. DO YOU KNOW, THAT IN A UNIVERSE SO FULL OF WONDERS, THEY HAVE MANAGED TO INVENT BOREDOM." \nTerry Pratchett',
    '"The easiest way to solve a problem is to deny it exists." \nIsaac Asimov',
    '"Any sufficiently advanced technology is indistinguishable from magic." \nArthur C. Clarke',
    '"Don’t Panic." \nDouglas Adams',
    '"Esk, of course, had not been trained, and it is well known that a vital ingredient of success is not knowing that what you\'re attempting can\'t be done." \nTerry Pratchett',
    '"If a conclusion is not poetically balanced, it cannot be scientifically true." \nIsaac Asimov',
    '"Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying." \nArthur C. Clarke',
    '"It is a mistake to think you can solve any major problems just with potatoes." \nDouglas Adams',
    '"Real stupidity beats artificial intelligence every time" \nTerry Pratchett',
    '"The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom." \nIsaac Asimov',
    '"It has yet to be proven that intelligence has any survival value." \nArthur C. Clarke'
  ]

  sentences = this.props.sentences || this.defaultSentences

  getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min))

  showWrapper = () => {
    this.setState({wrapperStyles: [styles.WrapperUi, styles.visible].join(' ')})
  }

  render() {
    const {
      loaderType,
      loaderSize,
      color,
      textStyles,
      wrapperClassName,
      wrapperStyles,
      wrapperBackgroundColor,
      counter,
      counterChars,
      startFadeOut,
      counterStyles,
      customLoader,
      width,
      height
    } = this.props

    const customWrapperStyle = {background: wrapperBackgroundColor, ...wrapperStyles}
    
    if (!!width) {
      customWrapperStyle.width = width
    }

    if (!!height) {
      customWrapperStyle.height = height
    }

    return (
      <div
        className={`${!startFadeOut ? this.state.wrapperStyles : fadeOutWrapperStyles} ${!!wrapperClassName ? wrapperClassName : ""}`}
        style={customWrapperStyle}
      >
        <div className={styles.LoaderContainer}>
          {customLoader || <SpinnerLoader color={color} size={loaderSize} loader={loaderType} />}
          <TextLoader
            styles={textStyles}
            sentence={this.state.sentence}
            counter={counter ? this.state.counter : null}
            counterChars={counterChars}
            counterStyles={counterStyles}
          />
        </div>
      </div>
    )
  }
}
