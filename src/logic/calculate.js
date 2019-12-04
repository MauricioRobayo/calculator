import operate from './operate'

const isNumber = value => !Number.isNaN(parseFloat(value))

const operator = (buttonName, { total, next, operation }) => {
  if (!isNumber(next) && !isNumber(total)) {
    return {}
  }

  if (!isNumber(next) && total) {
    return {
      operation: buttonName,
    }
  }

  if (next && !isNumber(total)) {
    return {
      operation: buttonName,
      total: next,
      next: null,
    }
  }

  return {
    total: operate(total, next, operation),
    next: null,
    operation: buttonName === '=' ? operation : buttonName,
  }
}

const calculate = (buttonName, { total, next, operation }) => {
  const modifiers = {
    '+/-': {
      total: total * -1,
      next: next * -1,
    },
    '%': {
      next: next ? next / 100 : next,
    },
  }
  if (modifiers[buttonName]) {
    return modifiers[buttonName]
  }

  if (['*', '/', '+', '-', '='].includes(buttonName)) {
    return operator(buttonName, { total, next, operation })
  }
  return {}
}

export { calculate, isNumber }
