import React from 'react'

const asyncComponent = (getComponent) => {
  class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
  return AsyncComponent
}

const Ball8Bits = asyncComponent(() =>
  import('../spinners/Ball8Bits').then(module => module.default)
)

const BallAtom = asyncComponent(() =>
  import('../spinners/BallAtom').then(module => module.default)
)

const BallBeat = asyncComponent(() =>
  import('../spinners/BallBeat').then(module => module.default)
)

const BallCircus = asyncComponent(() =>
  import('../spinners/BallCircus').then(module => module.default)
)

const BallClimbingDot = asyncComponent(() =>
  import('../spinners/BallClimbingDot').then(module => module.default)
)

const BallClipRotate = asyncComponent(() =>
  import('../spinners/BallClipRotate').then(module => module.default)
)

const BallClipRotateMultiple = asyncComponent(() =>
  import('../spinners/BallClipRotateMultiple').then(module => module.default)
)

const BallClipRotatePulse = asyncComponent(() =>
  import('../spinners/BallClipRotatePulse').then(module => module.default)
)

const BallElasticDots = asyncComponent(() =>
  import('../spinners/BallElasticDots').then(module => module.default)
)

const BallFall = asyncComponent(() =>
  import('../spinners/BallFall').then(module => module.default)
)

const BallFussion = asyncComponent(() =>
  import('../spinners/BallFussion').then(module => module.default)
)

const BallGridBeat = asyncComponent(() =>
  import('../spinners/BallGridBeat').then(module => module.default)
)

const BallGridPulse = asyncComponent(() =>
  import('../spinners/BallGridPulse').then(module => module.default)
)

const BallNewtonCradle = asyncComponent(() =>
  import('../spinners/BallNewtonCradle').then(module => module.default)
)

const BallPulse = asyncComponent(() =>
  import('../spinners/BallPulse').then(module => module.default)
)

const BallPulseRise = asyncComponent(() =>
  import('../spinners/BallPulseRise').then(module => module.default)
)

const BallPulseSync = asyncComponent(() =>
  import('../spinners/BallPulseSync').then(module => module.default)
)

const BallRotate = asyncComponent(() =>
  import('../spinners/BallRotate').then(module => module.default)
)

const BallRunningDots = asyncComponent(() =>
  import('../spinners/BallRunningDots').then(module => module.default)
)

const BallScale = asyncComponent(() =>
  import('../spinners/BallScale').then(module => module.default)
)

const BallScaleMultiple = asyncComponent(() =>
  import('../spinners/BallScaleMultiple').then(module => module.default)
)

const BallScalePulse = asyncComponent(() =>
  import('../spinners/BallScalePulse').then(module => module.default)
)

const BallScaleRipple = asyncComponent(() =>
  import('../spinners/BallScaleRipple').then(module => module.default)
)

const BallScaleRippleMultiple = asyncComponent(() =>
  import('../spinners/BallScaleRippleMultiple').then(module => module.default)
)

const BallSpin = asyncComponent(() =>
  import('../spinners/BallSpin').then(module => module.default)
)

const BallSpinClockwise = asyncComponent(() =>
  import('../spinners/BallSpinClockwise').then(module => module.default)
)

const BallSpinClockwiseFade = asyncComponent(() =>
  import('../spinners/BallSpinClockwiseFade').then(module => module.default)
)

const BallSpinClockwiseFadeRotating = asyncComponent(() =>
  import('../spinners/BallSpinClockwiseFadeRotating').then(module => module.default)
)

const BallSpinFade = asyncComponent(() =>
  import('../spinners/BallSpinFade').then(module => module.default)
)

const BallSpinFadeRotating = asyncComponent(() =>
  import('../spinners/BallSpinFadeRotating').then(module => module.default)
)

const BallSpinRotate = asyncComponent(() =>
  import('../spinners/BallSpinRotate').then(module => module.default)
)

const BallSquareClockwiseSpin = asyncComponent(() =>
  import('../spinners/BallSquareClockwiseSpin').then(module => module.default)
)

const BallSquareSpin = asyncComponent(() =>
  import('../spinners/BallSquareSpin').then(module => module.default)
)

const BallTrianglePath = asyncComponent(() =>
  import('../spinners/BallTrianglePath').then(module => module.default)
)

const BallZigZag = asyncComponent(() =>
  import('../spinners/BallZigZag').then(module => module.default)
)

const BallZigZagDeflect = asyncComponent(() =>
  import('../spinners/BallZigZagDeflect').then(module => module.default)
)

const CubeTransition = asyncComponent(() =>
  import('../spinners/CubeTransition').then(module => module.default)
)

const Fire = asyncComponent(() =>
  import('../spinners/Fire').then(module => module.default)
)

const LineScale = asyncComponent(() =>
  import('../spinners/LineScale').then(module => module.default)
)

const LineScaleParty = asyncComponent(() =>
  import('../spinners/LineScaleParty').then(module => module.default)
)

const LineScalePulseOut = asyncComponent(() =>
  import('../spinners/LineScalePulseOut').then(module => module.default)
)

const LineScalePulseOutRapid = asyncComponent(() =>
  import('../spinners/LineScalePulseOutRapid').then(module => module.default)
)

const LineSpinClockwiseFade = asyncComponent(() =>
  import('../spinners/LineSpinClockwiseFade').then(module => module.default)
)

const LineSpinClockwiseFadeRotating = asyncComponent(() =>
  import('../spinners/LineSpinClockwiseFadeRotating').then(module => module.default)
)

const LineSpinFade = asyncComponent(() =>
  import('../spinners/LineSpinFade').then(module => module.default)
)

const LineSpinFadeRotating = asyncComponent(() =>
  import('../spinners/LineSpinFadeRotating').then(module => module.default)
)

const Pacman = asyncComponent(() =>
  import('../spinners/Pacman').then(module => module.default)
)

const SquareJellyBox = asyncComponent(() =>
  import('../spinners/SquareJellyBox').then(module => module.default)
)

const SquareLoader = asyncComponent(() =>
  import('../spinners/SquareLoader').then(module => module.default)
)

const SquareSpin = asyncComponent(() =>
  import('../spinners/SquareSpin').then(module => module.default)
)

const Timer = asyncComponent(() =>
  import('../spinners/Timer').then(module => module.default)
)

const TriangleSkewSpin = asyncComponent(() =>
  import('../spinners/TriangleSkewSpin').then(module => module.default)
)

const SpinnerLoader = (props) => {
  let component = null
  switch (props.loader) {
    case 'ball-8bits':
      component = (<Ball8Bits {...props} />)
      break
    case 'ball-atom':
      component = (<BallAtom {...props} />)
      break
    case 'ball-beat':
      component = (<BallBeat {...props} />)
      break
    case 'ball-circus':
      component = (<BallCircus {...props} />)
      break
    case 'ball-climbing-dot':
      component = (<BallClimbingDot {...props} />)
      break
    case 'ball-clip-rotate':
      component = (<BallClipRotate {...props} />)
      break
    case 'ball-clip-rotate-multiple':
      component = (<BallClipRotateMultiple {...props} />)
      break
    case 'ball-clip-rotate-pulse':
      component = (<BallClipRotatePulse {...props} />)
      break
    case 'ball-elastic-dots':
      component = (<BallElasticDots {...props} />)
      break
    case 'ball-fall':
      component = (<BallFall {...props} />)
      break
    case 'ball-fussion':
      component = (<BallFussion {...props} />)
      break
    case 'ball-grid-beat':
      component = (<BallGridBeat {...props} />)
      break
    case 'ball-grid-pulse':
      component = (<BallGridPulse {...props} />)
      break
    case 'ball-newton-cradle':
      component = (<BallNewtonCradle {...props} />)
      break
    case 'ball-pulse':
      component = (<BallPulse {...props} />)
      break
    case 'ball-pulse-rise':
      component = (<BallPulseRise {...props} />)
      break
    case 'ball-pulse-sync':
      component = (<BallPulseSync {...props} />)
      break
    case 'ball-rotate':
      component = (<BallRotate {...props} />)
      break
    case 'ball-running-dots':
      component = (<BallRunningDots {...props} />)
      break
    case 'ball-scale':
      component = (<BallScale {...props} />)
      break
    case 'ball-scale-multiple':
      component = (<BallScaleMultiple {...props} />)
      break
    case 'ball-scale-pulse':
      component = (<BallScalePulse {...props} />)
      break
    case 'ball-scale-ripple':
      component = (<BallScaleRipple {...props} />)
      break
    case 'ball-scale-ripple-multiple':
      component = (<BallScaleRippleMultiple {...props} />)
      break
    case 'ball-spin':
      component = (<BallSpin {...props} />)
      break
    case 'ball-spin-clockwise':
      component = (<BallSpinClockwise {...props} />)
      break
    case 'ball-spin-clockwise-fade':
      component = (<BallSpinClockwiseFade {...props} />)
      break
    case 'ball-spin-clockwise-fade-rotating':
      component = (<BallSpinClockwiseFadeRotating {...props} />)
      break
    case 'ball-spin-fade':
      component = (<BallSpinFade {...props} />)
      break
    case 'ball-spin-fade-rotating':
      component = (<BallSpinFadeRotating {...props} />)
      break
    case 'ball-spin-rotate':
      component = (<BallSpinRotate {...props} />)
      break
    case 'ball-square-clockwise-spin':
      component = (<BallSquareClockwiseSpin {...props} />)
      break
    case 'ball-square-spin':
      component = (<BallSquareSpin {...props} />)
      break
    case 'ball-triangle-path':
      component = (<BallTrianglePath {...props} />)
      break
    case 'ball-zig-zag':
      component = (<BallZigZag {...props} />)
      break
    case 'ball-zig-zag-deflect':
      component = (<BallZigZagDeflect {...props} />)
      break
    case 'cube-transition':
      component = (<CubeTransition {...props} />)
      break
    case 'fire':
      component = (<Fire {...props} />)
      break
    case 'line-scale':
      component = (<LineScale {...props} />)
      break
    case 'line-scale-party':
      component = (<LineScaleParty {...props} />)
      break
    case 'line-scale-pulse-out':
      component = (<LineScalePulseOut {...props} />)
      break
    case 'line-scale-pulse-out-rapid':
      component = (<LineScalePulseOutRapid {...props} />)
      break
    case 'line-spin-clockwise-fade':
      component = (<LineSpinClockwiseFade {...props} />)
      break
    case 'line-spin-clockwise-fade-rotating':
      component = (<LineSpinClockwiseFadeRotating {...props} />)
      break
    case 'line-spin-fade':
      component = (<LineSpinFade {...props} />)
      break
    case 'line-spin-fade-rotating':
      component = (<LineSpinFadeRotating {...props} />)
      break
    case 'pacman':
      component = (<Pacman {...props} />)
      break
    case 'square-jelly-box':
      component = (<SquareJellyBox {...props} />)
      break
    case 'square-loader':
      component = (<SquareLoader {...props} />)
      break
    case 'square-spin':
      component = (<SquareSpin {...props} />)
      break
    case 'timer':
      component = (<Timer {...props} />)
      break
    case 'triangle-skew-spin':
      component = (<TriangleSkewSpin {...props} />)
      break
    default:
      component = (<BallSpinClockwise {...props} />)
      break
  }

  return (
    <React.Fragment>
      {component}
    </React.Fragment>
  )
}

export default SpinnerLoader
