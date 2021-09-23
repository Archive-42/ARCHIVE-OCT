import baseForOwnRight from "./_baseForOwnRight";
import createBaseEach from "./_createBaseEach";

/**
 * The base implementation of `_.forEachRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
const baseEachRight = createBaseEach(baseForOwnRight, true);

export default baseEachRight;
