// http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/

import React from 'react'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import plLocale from 'date-fns/locale/pl'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { left: '' }
  }

  componentWillMount() {
    this.tick()
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    if (this.props.lang === 'pl') {
      this.setState({
        left: distanceInWordsToNow(this.props.until, { includeSeconds: true, locale: plLocale })
      })
    } else {
      this.setState({
        left: distanceInWordsToNow(this.props.until, { includeSeconds: true })
      })
    }
  }

  render() {
    return (
      <h4 className="subtitle is-size-5">
        👰🏻🤵🏻 {this.props.lang === 'pl' ? 'za' : 'in'} {this.state.left}!
      </h4>
    )
  }
}
