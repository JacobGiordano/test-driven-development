const ceasor = require('../code/caesor')

test('Ceasor 1', () => {
  expect(ceasor('greetings good sir', 0)).toBe('greetings good sir')
})

test('CAESAR CIPHER TEST 2', () => {
  expect(ceasor('what a wonderful day', 3)).toBe('zkdw d zrqghuixo gdb')
})

test('CAESAR CIPHER TEST 3', () => {
  expect(ceasor('i really need to sleep early tonight!', 6)).toBe(
    'o xkgrre tkkj zu yrkkv kgxre zutomnz!'
  )
})

test('CAESAR CIPHER TEST 4', () => {
  expect(ceasor('going to work', 11)).toBe('rztyr ez hzcv')
})
