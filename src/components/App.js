/* eslint-disable react/no-unused-state */
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
    const { total, next, operation } = this.state
    const operations = ['*', '/', '+', '-', '=']
    const modifiers = {
      '+/-': {
        total: total * -1,
        next: next * -1,
        operation,
      },
      '%': {
        total,
        next: next ? next / 100 : next,
        operation,
      },
    }

    if (total === 'NaN' || buttonName === 'AC') {
      this.allClear()
      return
    }

    if (modifiers[buttonName]) {
      this.setState(modifiers[buttonName])
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
      if (next && total && operation) {
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
        <Display result={next || total || '0'} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App
