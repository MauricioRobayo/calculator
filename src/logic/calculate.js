import operate from './operate'

const calculate = (buttonName, { total, next, operation }) => {
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
  if (modifiers[buttonName]) {
    return modifiers[buttonName]
  }

  const operations = ['*', '/', '+', '-', '=']
  if (operations.includes(buttonName) && !next && !total) {
    return
  }

  if (operations.includes(buttonName) && !next && total) {
    return {
      operation: buttonName,
    }
  }

  if (operations.includes(buttonName) && next && total && operation) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName === '=' ? null : buttonName,
    }
  }

  if (operations.includes(buttonName)) {
    return {
      operation: buttonName,
      total: next,
      next: null,
    }
  }
  return { next: next === null ? buttonName : next + buttonName }
}

export default calculate
