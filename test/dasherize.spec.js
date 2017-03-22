import test from 'tape'
import dasherize from '../src/lib/dasherize'

test('dasherize empty string', (assert) => {
  const expected = ''
  const actual = dasherize()

  assert.equals(actual, expected, 'Empty string gets echo\'ed back')

  assert.end()
})

test('dasherize string with no uppercase letters', (assert) => {
  const expected = 'nouppercaseletters'
  const actual = dasherize('nouppercaseletters')

  assert.equals(actual, expected, 'String with no uppercase letters returns unchanged as there is nothing to dasherize')

  assert.end()
})

test('dasherize string with uppercase letter', (assert) => {
  const expected = 'uppercase-letter'
  const actual = dasherize('uppercaseLetter')

  assert.equals(actual, expected, 'String with a uppercase letter returns a dasherize version')

  assert.end()
})

test('dasherize string with many uppercase letters', (assert) => {
  const expected = 'upper-case-letter'
  const actual = dasherize('upperCaseLetter')

  assert.equals(actual, expected, 'String with several uppercase letters returns a dasherize version')

  assert.end()
})

test('dasherize string with many uppercase letters, including initial letter', (assert) => {
  const expected = 'upper-case-letter'
  const actual = dasherize('UpperCaseLetter')

  assert.equals(actual, expected, 'String with several uppercase letters, including initial letter, returns a dasherize version')

  assert.end()
})
