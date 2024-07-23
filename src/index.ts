/**
 * A wrapper for the `throw` statement, for use in an
 * expression context.
 * 
 * @param {function|*} thing The thing that gets thrown.
 *  - If `thing` is a *function*, then the **return value** of the function gets thrown instead.
 *  - `null` and `undefined` are allowed.
 * 
 * @throws `thing()` if `thing` is a `function`, otherwise `thing`.
 */
export function throw_(thing: any): never {
  throw typeof thing === "function" ? thing() : thing;
};