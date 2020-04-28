import mod from '.'

describe('sanity', () => {
  it('should reverse a string', () => {
    expect(mod('hello')).toBe('olleh')
  })
})
