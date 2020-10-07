/**
 * Tokenize query into lookaround regex.
 *
 * @param {String} query
 * @returns {RegExp | undefined}
 */
export const tokenize = (query) => {
    const trimmed = query.trim();

    return trimmed
        ? new RegExp(
              trimmed
                  // Escape
                  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                  // Lookarounds
                  .replace(/[^\s]+/g, '(?=.*$&)')
                  // Remove whitespace
                  .replace(/\s/g, ''),
              'i'
          )
        : undefined;
};
