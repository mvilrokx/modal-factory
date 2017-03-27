import dasherize from './dasherize'

/**
 * @module
*/
const styleObjectString = (style = {}) =>
  Object.keys(style).reduce((str, key) => `${str}${dasherize(key)}: ${style[key]}; `, '')

/**
 * Converts an object that contains CSS styles into a string.
 * Returns a string of semi-colon-seperated css that can be easily assigned to the
 * cssText proporty of a DOM element
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import style2str from './lib/styleObjectString'
 *
 * console.log(style2str({
 *   backgroundColor: '#dddddd',
 *   borderTopLeftRadius: '3px',
 * }) // 'background-color: #dddddd; border-top-left-radius: 3px; '
 *
 * @function
 * @param {object} style - An object that contains css styles
 * @returns {string} a string that contains a semi-colon-seperated list of css styles
 *
 */
export default styleObjectString
