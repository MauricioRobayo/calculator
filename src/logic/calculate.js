import operate from './operate'

const operator = (buttonName, { total, next, operation }) => {
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

  if (['*', '/', '+', '-', '='].includes(buttonName)) {
    return operator(buttonName, { total, next, operation })
  }

  return { next: next === null ? buttonName : next + buttonName }
}

export default calculate
