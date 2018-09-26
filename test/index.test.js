const test = require('ava')
const theAnswer = require('../src')

test(`the answer is 42`, t => {
  // arrange
  const expected = 42

  // act
  const result = theAnswer()

  // assert
  t.is(result, expected, 'is 42')
})
