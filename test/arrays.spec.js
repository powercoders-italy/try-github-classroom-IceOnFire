const expect = require('expect')

const {
  proceduralSumSquareOfOdds,
  declarativeSumSquareOfOdds,
} = require('../arrays')

describe('Array methods', () => {
  it('should sum the square of odd numbers in a procedural way', () => {
    expect(proceduralSumSquareOfOdds(1, 2, 3, 4, 5)).toBe(35)
  })

  it('should sum the square of odd numbers in a declarative way', () => {
    expect(declarativeSumSquareOfOdds(1, 2, 3, 4, 5)).toBe(35)
  })
})
