const expect = require('expect')

const { shout, exclamation, html, compose } = require('../composition')

describe('Composition', () => {
  describe('Shout', () => {
    it('should shout a string', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = 'HELLO WORLD'

      // when
      const state = shout(stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })
  })

  describe('Exclamation', () => {
    it('should add exclamation marks to a string', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = 'hello world!!!'

      // when
      const state = exclamation('!!!')(stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })
  })

  describe('Html', () => {
    it('should wrap a string into html tags', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = '<p>hello world</p>'

      // when
      const state = html('p')(stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })
  })

  describe('Composition', () => {
    it('should wrap all supporting functions to a string', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = '<h1>HELLO WORLD!</h1>'

      // when
      const state = html('h1')(exclamation('!')(shout(stateBefore)))

      // then
      expect(state).toBe(stateAfter)
    })

    it('should cascade all supporting functions to a string', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = '<h1>HELLO WORLD!</h1>'

      // when
      let state = stateBefore
      state = shout(state)
      state = exclamation('!')(state)
      state = html('h1')(state)

      // then
      expect(state).toBe(stateAfter)
    })

    it('should apply all supporting functions to a string', () => {
      // given
      const stateBefore = 'hello world'
      const stateAfter = '<h1>HELLO WORLD!</h1>'

      // when
      const state = compose(html('h1'), exclamation('!'), shout)(stateBefore)

      // then
      expect(state).toBe(stateAfter)
    })
  })
})
