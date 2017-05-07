
/**
 * Find two connected nodes using the quick find algorithm.
 *
 * @param {Array} ids
 * @param {Number} p
 * @param {Number} q
 * @return {Boolean} true if connected
 * @api public
 */

module.exports = function(ids, p, q) {
  return ids[p] === ids[q]
}
