import styleObjectString from './styleObjectString'

/**
 * @module
*/

/**
 * Convenience method that allows you to create a DOM element and assign an id,
 * classes (space separated string) and styles to it.
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import el from './lib/el'
 *
 * const divEl = el('div', {
 *   classes: 'myCls1 myCls2',
 *   id: 'myDiv',
 *   styles: {
 *     modalOverlay: { backgroundColor: 'red' }
 *   }
 * })
 * // Also has convenience methods (no need to specify type, only options):
 * // import { divEl } from './lib/el'
 * // const divEl = elDiv({})
 *
 * @function
 * @param {string} type - a string that represents the type of DOM element you
 * want to create
 * @param {object} options - An object that contains css styles
 * @param {string} options.classes - A space seperated list of classes
 * @param {string} options.id - an identifier
 * @param {object} options.styles - an object that contains all the styles you
 * want to apply to the DOM element (and override the class-styles with)
 * @param {object} options.styles.modalContainer - styles for the container
 * @param {object} options.styles.modalOverlay - styles for the overlay
 * @param {object} options.styles.modalClose - styles for the close cross/button
 * @param {object} options.styles.modalContent - styles for the content
 * @param {object} options.styles.modalFooter - styles for the footer
 * @param {object} options.styles.modalBody - styles for the body
 * @param {object} options.styles.modalHeader - styles for the header
 * @returns {object} the DOM object
 *
 */
const el = (type, options = {}) => {
  const element = document.createElement(type)

  if (options.classes) element.className = options.classes
  if (options.id) element.id = options.id
  if (options.styles) element.style.cssText = styleObjectString(options.styles)

  return element
}

export default el

/**
 * Syntactical Sugar method for el to create a <div> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
export const divEl = options => el('div', options)
/**
 * Syntactical Sugar method for el to create a <button> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
export const buttonEl = options => el('button', options)
/**
 * Syntactical Sugar method for el to create a <section> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
export const sectionEl = options => el('section', options)
/**
 * Syntactical Sugar method for el to create a <header> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
export const headerEl = options => el('header', options)
/**
 * Syntactical Sugar method for el to create a <footer> DOM element, works
 * exactly the same except you don't have to pass a type.
 */
export const footerEl = options => el('footer', options)
