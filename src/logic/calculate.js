import operate from './operate'

const calculate = (buttonName, { total, next, operation }) => {
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
    return {
      total: null,
      next: null,
      operation: null,
    }
  }

  if (modifiers[buttonName]) {
    return modifiers[buttonName]
  }

  if (operations.includes(buttonName)) {
    if (!next && !total) {
      return
    }
    if (!next && total) {
      return {
        operation: buttonName,
      }
    }
    if (next && total && operation) {
      return {
        total: operate(total, next, operation),
        next: null,
        operation: buttonName === '=' ? null : buttonName,
      }
    }
    return {
      operation: buttonName,
      total: next,
      next: null,
    }
  }
  return { next: next === null ? buttonName : next + buttonName }
}

export default calculate
