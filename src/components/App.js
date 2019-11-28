import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from './../logic/calculate' // eslint-disable-line
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
    this.setState(state => calculate(buttonName, state))
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App
