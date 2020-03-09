import { kek, kek2 } from '.'

describe('index file', () => {
  it('exports 123', () => {
    expect(kek).toBe(123)
    expect(kek2).toBe(123)
  })
})
