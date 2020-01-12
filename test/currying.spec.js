const expect = require('expect')

const {
  sayHello,
  sayGoodbye,
  simonSays,
  simonSaysCurried,
} = require('../currying')

describe('Currying', () => {
  describe('Supporting functions', () => {
    it('should say hello to someone', () => {
      // given
      const stateBefore = 'students'
      const stateAfter = 'Hello students!'

      // when
      const state = sayHello(stateBefore)

      //then
      expect(state).toBe(stateAfter)
    })

    it('should say goodbye to someone', () => {
      // given
      const stateBefore = 'students'
      const stateAfter = 'Goodbye students...'

      // when
      const state = sayGoodbye(stateBefore)

      //then
      expect(state).toBe(stateAfter)
    })
  })

  describe('Simon Says', () => {
    it('should show that function references can be passed as parameters', () => {
      // given
      const stateBefore = 'students'
      const stateAfter = 'Simon says: "Heya students!!!"'
      const greeting = who => `Heya ${who}!!!`

      // when
      const state = simonSays(greeting, stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })

    it('should show that currying improves performance and power', () => {
      // given
      const stateBefore = 'students'
      const stateAfter = 'Simon says: "Heya students!!!"'
      const greeting = who => `Heya ${who}!!!`
      const simonSaysHeya = simonSaysCurried(greeting)

      // when
      const state = simonSaysHeya(stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })
  })
})
