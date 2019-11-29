import operate from './operate'

const calculate = (buttonName, { total, next, operation }) =>
  ['+', '-', '/', '*', '%'].includes(buttonName)
    ? { total: operate(total, next, operation), next, operation }
    : { total: total * -1, next: next * -1, operation }

export default calculate
