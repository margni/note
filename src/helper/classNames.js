/**
 * Experimental micro classnames-esque function
 *
 * A useEffect-esque version could be even smarter, but im not sure it would
 * actually be worth the effort.
 *
 * @param {Object<String, Boolean>} classMap
 * @param {Object<String, String>} [styles={}]
 * @return {String}
 */
export const classNames = (classMap, styles = {}) =>
    Object.entries(classMap)
        .filter(([_name, bool]) => bool)
        .map(([name]) => styles[name] || name)
        .join(' ');
