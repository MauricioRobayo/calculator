import operate from './operate'

const buildNumber = (next, value) => {
  return { next: next === null ? value : next + value }
}

const operator = (buttonName, { total, next, operation }) => {
  if (!next && total) {
    return {
      operation: buttonName,
    }
  }

  if (next && !total) {
    return {
      operation: buttonName,
      total: next,
      next: null,
    }
  }

  try {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName === '=' ? null : buttonName,
    }
  } catch (e) {
    return {
      total: null,
      next: null,
      operation: null,
    }
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
  return buildNumber(next, buttonName)
}

export default calculate
