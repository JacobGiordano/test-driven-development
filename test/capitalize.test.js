const capitalize = require('../code/capitalize')

test('Capitalize 1', () => {
  expect(capitalize('hi')).toBe('Hi')
})
test('Capitalize 2', () => {
  expect(capitalize('mother')).toBe('Mother')
})
test('Capitalize 3', () => {
  expect(capitalize('father')).toBe('Father')
})
test('Capitalize 4', () => {
  expect(capitalize('hoWs it going')).toBe('HoWs it going')
})
