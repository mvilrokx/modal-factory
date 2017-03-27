import test from 'tape'
import './setup'
import el, { divEl, headerEl, sectionEl, footerEl, buttonEl } from '../src/lib/el'

test('Sanity checks', (assert) => {
  assert.equals(typeof el, 'function', 'el is a function.')
  assert.equals(typeof divEl, 'function', 'divEl is a function.')
  assert.equals(typeof headerEl, 'function', 'headerEl is a function.')
  assert.equals(typeof sectionEl, 'function', 'sectionEl is a function.')
  assert.equals(typeof footerEl, 'function', 'footerEl is a function.')
  assert.equals(typeof buttonEl, 'function', 'buttonEl is a function.')
  assert.end()
})

test('el function parameters', (t) => {
  // CAN'T GET THIS TESTED SOMEHOW, FIX LATER
  // t.test('no parameters', (assert) => {
    // const actual = el()
    // const expected = document.createElement()
    // assert.deepEquals(
    //  actual,
    //  expected,
    //  'Create an HTMLUnknownElement DOM object when passing in no type and no options'
    // )
    // assert.doesNotThrow(() => el())
    // assert.throws(el, /argument required/)
    // const elem = el('div')
    // t.comment(elem)
    // assert.throws(
    //  () => el(),
    //  new RegExp('.*'),
    //  'TypeError gets thrown when no parameters are supplied.'
    // )
    // assert.throws(
    //  () => el(),
    //  new RegExp('1 argument required, but only 0 present.'),
    //  'TypeError gets thrown when no parameters are supplied.'
    // )

    // assert.end()
  // })
  t.test('type, but no options', (assert) => {
    const actual = el('div')
    const expected = document.createElement('div')

    assert.deepEquals(
      actual,
      expected,
      'Create a <div> DOM object when passing in "div" as type with no options'
    )

    assert.end()
  })

  t.test('type, with options', (assert) => {
    const actual = el('div', { id: 'right-id' })
    const expected = document.createElement('div')
    expected.id = 'wrong-id'
    // I tried deepEquals on the actual DOM Objects but that always seems to
    // pass the test so I can't use that.
    // Is there a toString option for DOM objects???
    assert.notEqual(actual.id, expected.id, 'ID not set correctly')

    expected.id = 'right-id'
    assert.equals(
      actual.id,
      expected.id,
      `Create a <div> DOM object when passing in "div" as type with the ID set
      to whatever id is passed in through the options`
    )

    assert.end()
  })

  t.test('type, with class in options', (assert) => {
    const actual = el('div', { classes: 'optional-class' })
    const expected = document.createElement('div')
    expected.className = 'optional-class'
    assert.equals(
      actual.className,
      expected.className,
      `Create a <div> DOM object when passing in "div" as type with the class set
      to whatever class is passed in through the options`
    )

    assert.end()
  })

  t.test('type, with styles in options', (assert) => {
    const actual = el('div', { styles: { backgroundColor: 'black' }})
    const expected = document.createElement('div')
    expected.style = {}
    expected.style.cssText = 'background-color: black;'
    assert.equals(
      actual.style.cssText,
      expected.style.cssText,
      `Create a <div> DOM object when passing in "div" as type with the class set
      to whatever class is passed in through the options`
    )

    assert.end()
  })

})
