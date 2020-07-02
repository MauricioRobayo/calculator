import Big from 'big.js/big';

const operations = {
  '/': (a, b) => (b.eq(0) ? NaN : a.div(b)),
  '*': (a, b) => a.times(b),
  '-': (a, b) => a.minus(b),
  '+': (a, b) => a.plus(b),
};

const operate = (num1, num2, operation) =>
  operations[operation](Big(num1), Big(num2));

export default operate;
