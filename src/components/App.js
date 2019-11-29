import React from 'react'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from './../logic/calculate' // eslint-disable-line
import './App.css'

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
)

export default App
