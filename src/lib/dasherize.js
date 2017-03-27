/**
 * @module
*/
const dasherize = (str = '') =>
  str.replace(/[A-Z]/g, (c, i) => (i !== 0 ? '-' : '') + c.toLowerCase())

/**
 * Converts the camelCased/CamelCased string that is passed in to a dash'ed
 * string.
 * This is handy to convert JavaScript object keys and we use it to convert
 * object styles to css styles, e.g. borderWidth becomes 'border-width'
 *
 * @author Mark Vilrokx <mark@vilrokx.com>
 *
 * @example
 *  import dasherize from './lib/dasherize'
 *
 * console.log(dasherize('camelCase')) //'camel-case'
 *
 * @function
 * @param {string} str - camelCased string you would like to convert
 * @returns {string} dasherized string
 *
 */
export default dasherize
