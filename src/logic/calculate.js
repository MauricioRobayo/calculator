import operate from './operate'

const calculate = (buttonName, { total, next, operation }) => ({
  total: operate(total, next, operation),
  next: null,
  operation: buttonName === '=' ? null : buttonName,
})

export default calculate
