import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate' // eslint-disable-line
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }

  handleClick = buttonName => {
    const { total, next } = this.state
    const operations = ['*', '/', '+', '-', '=']
    const modifiers = ['AC', '+/-', '%']

    if (total === 'NaN') {
      this.setState({ total: null, next: null, operation: null })
      return
    }

    if (modifiers.includes(buttonName)) {
      this.setState(state => calculate(buttonName, state))
      return
    }

    if (operations.includes(buttonName)) {
      if (!next && !total) {
        return
      }
      if (!next && total) {
        this.setState({
          operation: buttonName,
        })
        return
      }
      if (next && total) {
        this.setState(state => calculate(buttonName, state))
        return
      }
      this.setState(state => ({
        operation: buttonName,
        total: state.next,
        next: null,
      }))
      return
    }
    this.setState({ next: next === null ? buttonName : next + buttonName })
  }

  allClear() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    })
  }

  render() {
    const { total, next } = this.state
    return (
      <div className="app">
        <Display result={next || total || 0} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
