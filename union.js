

/**
 * Union algorithm following quick-find method.
 *
 * @param {Array} ids
 * @param {Number} p
 * @param {Number} q
 * @api public
 */

module.exports = function(ids, p, q) {
  let length = ids.length
  const pid = ids[p]
  const qid = ids[q]
  while (length--) {
    if (ids[length] === pid) ids[length] = qid
  }
}
