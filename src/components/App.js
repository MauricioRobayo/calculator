import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate, isNumber } from '../logic/calculate';
import './App.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  function appendValue(value, currValue) {
    if (currValue === null) {
      return value;
    }

    if (Number.isNaN(Number(currValue + value))) {
      return currValue;
    }
    return `${currValue + value}`;
  }

  function handleClick(buttonName) {
    let currTotal = total;
    let currNext = next;

    if (currNext === null && buttonName === '=') {
      currTotal = total;
    }

    if (currTotal === 'NaN' || buttonName === 'AC') {
      setTotal(null);
      setNext(null);
      setOperation(null);
    }

    if (isNumber(buttonName) || buttonName === '.') {
      currNext = appendValue(buttonName, currNext)
    }

    const {
      next: newNext,
      total: newTotal,
      operation: newOperation,
    } = calculate(buttonName, { total: currTotal, next: currNext, operation });
    setNext(newNext);
    setTotal(newTotal);
    setOperation(newOperation);
  }

  return (
    <div className="app">
      <Display result={`${next || total || 0}`} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
