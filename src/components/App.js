import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate, isNumber } from '../logic/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next } = this.state;
    if (next === null && buttonName === '=') {
      this.setState({ next: total });
    }

    this.allClear(buttonName);
    this.buildNumber(buttonName);
    this.setState((state) => calculate(buttonName, state));
  };

  allClear(buttonName) {
    const { total } = this.state;
    if (total === 'NaN' || buttonName === 'AC') {
      this.setState({ total: null, next: null, operation: null });
    }
  }

  buildNumber(value) {
    if (isNumber(value) || value === '.') {
      this.setState({
        next: this.appendValue(value),
      });
    }
  }

  appendValue(value) {
    const { next } = this.state;
    if (next === null) {
      return value;
    }

    if (Number.isNaN(Number(next + value))) {
      return next;
    }
    return `${next + value}`;
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="app">
        <Display result={`${next || total || 0}`} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
