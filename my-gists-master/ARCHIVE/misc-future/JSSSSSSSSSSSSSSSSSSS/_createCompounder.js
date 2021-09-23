import arrayReduce from "./_arrayReduce";
import deburr from "./deburr";
import words from "./words";

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";

/** Used to match apostrophes. */
const reApos = RegExp(rsApos, "g");

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return (string) => {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}

export default createCompounder;
