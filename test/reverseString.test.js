const reverseString = require('../code/reverseString')

test('Reverse string test 1', () => {
  expect(reverseString('Hello')).toBe('olleH')
})
test('Reverse string test 2', () => {
  expect(reverseString('car race')).toBe('ecar rac')
})
test('Reverse string test 3', () => {
  expect(reverseString('my name is dev chaudhary')).toBe(
    'yrahduahc ved si eman ym'
  )
})
test('Reverse string test 4', () => {
  expect(reverseString('i am learning test driven development')).toBe(
    'tnempoleved nevird tset gninrael ma i'
  )
})
