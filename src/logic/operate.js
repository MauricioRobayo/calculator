import Big from 'big.js'

const operations = {
  '+': (a, b) => a.plus(b),
  '-': (a, b) => a.minus(b),
  '*': (a, b) => a.times(b),
  '/': (a, b) => a.div(b),
  '%': (a, b) => a.mod(b),
}

const operate = (num1, num2, operation) =>
  operations[operation](Big(num1), Big(num2)).toString()

export default operate
