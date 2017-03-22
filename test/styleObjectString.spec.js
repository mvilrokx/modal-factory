import test from 'tape'
import style2str from '../src/lib/styleObjectString'

test('styleObjectString with no parameters', (assert) => {
  const expected = ''
  const actual = style2str()

  assert.equals(actual, expected, 'Empty string gets returned')

  assert.end()
})

test('styleObjectString with empty object as parameters', (assert) => {
  const expected = ''
  const actual = style2str({})

  assert.equals(actual, expected, 'Empty string gets returned')

  assert.end()
})

test('styleObjectString with style object as parameters', (assert) => {
  const expected = 'background-color: #dddddd; border-top-left-radius: 3px; '
  const actual = style2str({
    backgroundColor: '#dddddd',
    borderTopLeftRadius: '3px',
  })

  assert.equals(actual, expected, 'CSS Text String gets returned')

  assert.end()
})
