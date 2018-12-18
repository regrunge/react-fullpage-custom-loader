# react-fullpage-custom-loader

> A full page loading modal with spinners and random custom text for React

[![NPM](https://img.shields.io/npm/v/react-fullpage-custom-loader.svg)](https://www.npmjs.com/package/react-fullpage-custom-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![JavaScript Style Guide](	https://img.shields.io/npm/l/react-fullpage-custom-loader.svg)](https://opensource.org/licenses/MIT) [![JavaScript Style Guide](https://img.shields.io/github/commit-activity/y/regrunge/react-fullpage-custom-loader.svg)](https://github.com/regrunge/react-fullpage-custom-loader)

## Install

```bash
npm install --save react-fullpage-custom-loader
```

## Example 
For a small React templating example: `cd` to react-fullpage-custom-loader/example and `npm start` or check it out [on its Github page](https://regrunge.github.io/react-fullpage-custom-loader/)

## Usage

#### Basic

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-fullpage-custom-loader'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```
##### Pass your custom loader instead of one of the default
```jsx
import React, { Component } from 'react'

import MyComponent from 'react-fullpage-custom-loader'

class Example extends Component {
  render () {
    return (
      <MyComponent customLoader={<CustomSpinnerComponent />}/>
    )
  }
}
```

#### Advanced

These are all the props you could pass to the component *MyComponent*
```jsx
const props: {
    sentences: PropTypes.array,
    loaderType: PropTypes.string,
    loaderSize: PropTypes.string,
    color: PropTypes.string,
    textStyles: PropTypes.object,
    wrapperBackgroundColor: PropTypes.string,
    counter: PropTypes.bool,
    counterMax: PropTypes.number,
    counterDelay: PropTypes.number,
    counterChars: PropTypes.string,
    counterStyles: PropTypes.object,
    fadeIn: PropTypes.bool,
    startFadeOut: PropTypes.bool,
    customLoader: PropTypes.object
}
```

| prop | type | default | description | example |
|---|---|---|---|---|
| *sentences*  | Array of strings  | Random quotes form authors I like (Adams, Pratchett, Asimov, Clarke)  | You can set as many sentences you like and thanks to CSS display: preline you could insert line breaks with `\n` | `['One sentence', 'One with a \n linebreak', '"Quoting an " - author']`|
| *loaderType* | string / enum | `ball-spin-clockwise` | A string representing one of the 52 possible animations (see list below) | `timer` |
| *loaderSize* | string | `null` | There are 3 possible sizes: `small`, `big` and `null` for normal | `big` |
| *color* | string | `white` | Any valid CSS color string | `rgba(0, 0, 0, 0.75)` |
| *textStyles* | object | { ...css.stuff } | Use it to override the main text properties. Accepts any React CSS style object | `{ color: 'red', fontSize: '3em' }`|
| *wrapperBackgroundColor* | string | `rgba(0,0,0,0.75)` | Any valid CSS for property `background` will work, even gradients and RGBA | `black` |
| *counter* | boolean | `false` | You can show a counter that is either a number representing the cycles or a series of characters | `true` |
| *counterMax* | integer | `15` | The maximum number of cycles to stop randomizing sentences | `15` |
| *counterDelay* | integer | `3000` | The number of milliseconds before a new cycle will throw a random to show a new sentence | `1000` |
| *counterChars* | string | `.` | A series of characters to be shown in the counter zone adding one every cycle | 😅 |
| *counterStyles* | object | {...this.props.textStyles} | Use it to override the counter text properties. Accepts any React CSS style object and default to the above textStyles | `{ color: 'red', fontSize: '3em' }` |
| *fadeIn* | boolean | `false` | If set to `true`, the loader is shown with a fade in effect on opacity (300ms ease-out) | `true` |
| *startFadeOut* | boolean | `false` | When this is set to `true` the entire loader will start to fade out on opacity (300ms ease-in), but even if faded you must destroy the component yourself | `true` |
| *customLoader* | `Object` / React component | `null` |  You could pass a component to be shown INSTEAD of one the loaders | `customLoader={<CustomLoader />}` |

#### Notes:

When you choose a Spinner we lazy-load only that component (a functional React component importing a small css file) and we pass your styles to it. You could use this components stand alone, you will only need the right CSS file and the right amount of `<DIV />` elements to include (I know, a bit confusing, make sense if you look at the original spinners demo HTML) 

#### Fading out the component before unmount
For performance issues you should create and destroy this component (for instance at `render()` time) such as:
```jsx 
render () {
    return (
        {this.state.showLoader && <MyComponent {...options} />}
    )
}
```

In React terms this means that you take the element away from the DOM and you won't have time to start our nice fade out animation.
If you want to fade out your component you will need a bit of a workaround, something on the lines of:
```jsx
    fadeAndCloseLoader = () => {
        this.setState({startFadeOut: true}))
        setTimeout(() => {
          this.setState({showLoader: false, startFadeOut: false})
        }, 300)
    }
    
    render () {
        return (
            {this.state.showLoader && <MyComponent 
                {...options} 
                startFadeOut={this.state.startFadeOut}/>
            }
        )
    }
```

In this example the method `fadeAndCloseLoader()` sends the startFadeOut prop first, the 300 milliseconds later destroys the Component. Note that in the same timeout call we reset startFadeOut to false to hide the CSS `.hidden` class in case you wanted to reopen the loader.

All animations are 100% CSS.

#### All the spinners in the world
A demo of all (100% CSS) spinners can be found at [Load Awesome](http://github.danielcardoso.net/load-awesome/animations.html), just note that I couldn't make `Cog` to work and it is therefore not included.

Here is a useful copy/paste list (note the typo `fussion` has been kept for too many reasons I do not have the time to explain here, my most sincere apologies):
- ball-8bits
- ball-atom
- ball-beat
- ball-circus
- ball-climbing-dot
- ball-clip-rotate
- ball-clip-rotate-multiple
- ball-clip-rotate-pulse
- ball-elastic-dots
- ball-fall
- ball-fussion
- ball-grid-beat
- ball-grid-pulse
- ball-newton-cradle
- ball-pulse
- ball-pulse-rise
- ball-pulse-sync
- ball-rotate
- ball-running-dots
- ball-scale
- ball-scale-multiple
- ball-scale-pulse
- ball-scale-ripple
- ball-scale-ripple-multiple
- ball-spin
- ball-spin-clockwise
- ball-spin-clockwise-fade
- ball-spin-clockwise-fade-rotating
- ball-spin-fade
- ball-spin-fade-rotating
- ball-spin-rotate
- ball-square-clockwise-spin
- ball-square-spin
- ball-triangle-path
- ball-zig-zag
- ball-zig-zag-deflect
- [- cog -] `This doesn't work, don't use it. You have been warned.`
- cube-transition
- fire
- line-scale
- line-scale-party
- line-scale-pulse-out
- line-scale-pulse-out-rapid
- line-spin-clockwise-fade
- line-spin-clockwise-fade-rotating
- line-spin-fade
- line-spin-fade-rotating
- pacman
- square-jelly-box
- square-loader
- square-spin
- timer
- triangle-skew-spin

## License

MIT © [regrunge](https://github.com/regrunge)

## Acknowledgements

All Loaders CSS files are coming from [load-awesome](https://github.com/danielcardoso/load-awesome) MIT © [danielcardoso](https://github.com/danielcardoso) (I have used 52 of his 53 awesome loaders, missing only Cog that didn't display as it should)
