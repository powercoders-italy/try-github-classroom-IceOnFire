const expect = require('expect')

describe('Spread operator', () => {
  describe('On arrays', () => {
    it('creates sub-arrays', () => {
      const arr = [1, 2, 3, 4, 5]

      const [first, second, ...rest] = arr

      expect(first).toBe(1)
      expect(second).toBe(2)
      expect(rest).toEqual([3, 4, 5])
    })

    it('concatenates arrays easily', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [4, 5]

      const arr = [...arr1, ...arr2]

      expect(arr).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('On objects', () => {
    it('creates sub-objects', () => {
      const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }

      const { a: f, b, ...rest } = obj

      expect(f).toBe(1)
      expect(b).toBe(2)
      expect(rest).toEqual({ c: 3, d: 4, e: 5 })
    })

    it('merges objects easily', () => {
      const obj1 = { a: 1, b: 2, c: 3 }
      const obj2 = { d: 4, e: 5, b: 6 }

      const obj = { ...obj1, ...obj2 }

      expect(obj).toEqual({ a: 1, b: 6, c: 3, d: 4, e: 5 })
    })
  })
})
