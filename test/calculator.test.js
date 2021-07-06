const calculator = require('../code/calculator')

test('Addition', () => {
  expect(calculator.add(1, 1)).toBe(2)
})

test('Subraction', () => {
  expect(calculator.sub(20, 10)).toBe(10)
})

test('Subraction', () => {
  expect(calculator.mul(20, 10)).toBe(200)
})

test('Subraction', () => {
  expect(calculator.div(20, 10)).toBe(2)
})
