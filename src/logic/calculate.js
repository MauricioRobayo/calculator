import operate from './operate'

const operations = ['+', '-', '/', '*', '=']

const calculate = (buttonName, { total, next, operation }) => {
  if (operations.includes(buttonName)) {
    const result = operate(total, next, operation)
    return {
      total: result,
      next: null,
      operation: buttonName === '=' ? null : buttonName,
    }
  }
  return {
    '+/-': { total: total * -1, next: next * -1, operation },
    '%': {
      total,
      next: next ? next / 100 : next,
      operation,
    },
    AC: { total: null, next: null, operation: null },
  }[buttonName]
}

export default calculate
