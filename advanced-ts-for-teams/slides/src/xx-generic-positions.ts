/**
 * 💡 The inference on generics is extremely flexible. You
 * can place generics in almost any position in the function's
 * arguments.
 */

export const pickFromObject = <TObj, TPicked extends keyof TObj>(config: {
  obj: TObj;
  pick: TPicked[];
}): Pick<TObj, TPicked> => {
  const { obj, pick } = config;
  return pick.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<TObj, TPicked>);
};

const newObject = pickFromObject({
  obj: { a: 1, b: 2, c: 3 },
  pick: ["a", "b"],
});
/**   ^ 🚁         ^ 🚁
 *
 * 🚁 The first generic locked in is the object, which is TObj.
 * The second is TPicked, inferred from the members of the
 * array we passed in.
 *
 * 🚁 The return type is the 'picked' version of TObj, which
 * uses the built-in TS type to return a new object with only
 * the keys we selected.
 *
 * 🕵️‍♂️ Try changing the ['a', 'b'] keys, or the object itself,
 * to see what errors you get.
 */

/**
 * 🛠 Let's experiment with a different API. Change the
 * pickFromObject function above so that it takes an object
 * called config, which contains 'obj' and 'pick' as keys.
 *
 * export const pickFromObject = <TObj, TPicked extends keyof TObj>(
 *   config: {
 *     obj: TObj;
 *     pick: TPicked[];
 *   }
 * ): Pick<TObj, TPicked> => {
 *
 * 🛠 You can also destructure the config inside the function
 * to ensure the code still works:
 *
 * const { obj, pick } = config;
 *
 * 🛠 Finally, you'll need to change pickFromObject() so that you pass
 * it an object instead of two arguments.
 *
 * const newObject = pickFromObject({
 *   obj: { a: 1, b: 2, c: 3 },
 *   pick: ["a", "b"],
 * });
 */

/**
 * 🚁 Try hovering over pickFromObject again:
 *
 * const newObject = pickFromObject({
 *                   ^ 🚁
 *   obj: { a: 1, b: 2, c: 3 },
 *   pick: ["a", "b"],
 * });
 *
 * 💡 You should see that both generics are still locked in!
 * Even though they're deep in the function arguments.
 */

/**
 * 💡 Let's examine some more adventurous API's:
 */

const mapOverArray = <TItem, TNewItem>(
  array: TItem[],
  map: (item: TItem) => TNewItem
) => {
  return array.map(map);
};

mapOverArray([1, 2, 3], (item) => `${item}`);
/** ^ 🚁
 *
 * Here, the first generic is inferred by the array. The
 * second is inferred by the return type of the function.
 *
 * 🕵️‍♂️ Try changing the mapOverArray call to return a boolean, number,
 * or object. See what happens to the generic inference.
 *
 * mapOverArray([1, 2, 3], (item) => ({ item }));
 * mapOverArray([1, 2, 3], (item) => !!item);
 */
