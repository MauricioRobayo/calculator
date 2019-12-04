/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate' // eslint-disable-line
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null,
      error: null,
    }
  }

  handleClick = buttonName => {
    this.setState(state =>
      state.total === 'NaN' || buttonName === 'AC'
        ? { total: null, next: null, operation: null }
        : calculate(buttonName, state),
    )
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
