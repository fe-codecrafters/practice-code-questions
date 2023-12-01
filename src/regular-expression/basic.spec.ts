import { expect, test, describe } from "vitest";

describe('basic regular expression', () => {
  test('full match', () => {
    expect(/regex/.test('regex')).toBe(true)
  })
  
  test('full match with global modifier', () => {
    expect(/regex/g.test('Regex')).toBe(false)
    expect(/regex/g.test('Regex regex')).toBe(true)
  })
  
  test('full match with global modifier, case insensitive', () => {
    expect(/regex/gi.test('Regex')).toBe(true)
  })
})

describe('Character Sets', () => {
  test('basic character set', () => {
    expect(/[rh]egex/.test('regex')).toBe(true)
    expect(/[rh]egex/.test('hegex')).toBe(true)
  })  
  
  test('negated set', () => {
    expect(/[^abc]egex/.test('regex')).toBe(true)
    expect(/[^abc]egex/.test('aegex')).toBe(false)
  })
  
  test('range character set', () => {
    expect(/[a-z]/.test('r111')).toBe(true)
    expect(/[a-z]/g.test('r111')).toBe(true)
    expect(/[0-9]/.test('r')).toBe(false)
    expect(/[A-Z]/.test('r')).toBe(false)
    expect(/[^A-Z]/.test('r')).toBe(true)
    expect(/[a-zA-Z]/.test('regex REGEX')).toBe(true)
    expect(/[a-zA-Z]/.test('regex REGEX 101')).toBe(true)
    expect(/[^a-zA-Z0-9]/.test('regex REGEX 101')).toBe(true)
    expect(/[^a-zA-Z0-9]/.test('!@#$%^')).toBe(true)
  })

})