const proceduralSumSquareOfOdds = (...nums) => {
  let sum = 0

  for (const num of nums) {
    if (num % 2 !== 0) {
      const square = num * num
      sum += square
    }
  }

  return sum
}

const isOdd = num => num % 2 !== 0
const square = num => num ** 2
const sum = (a, b) => a + b

const declarativeSumSquareOfOdds = (...nums) =>
  nums
    .filter(isOdd)
    .map(square)
    .reduce(sum, 0)

module.exports = { proceduralSumSquareOfOdds, declarativeSumSquareOfOdds }
