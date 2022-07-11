/**
 * 💡 The inference on generics is extremely flexible. You
 * can place generics in almost any position in the function's
 * arguments.
 */

export const pickFromObject = <TObj, TPicked extends keyof TObj>(
  obj: TObj,
  pick: TPicked[],
): Pick<TObj, TPicked> => {
  return pick.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<TObj, TPicked>);
};

const newObject = pickFromObject({ a: 1, b: 2, c: 3 }, ["a", "b"]);
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
 */

/**
 * 🚁 Try hovering over pickFromObject again:
 *
 * const newObject = pickFromObject({ a: 1, b: 2, c: 3 }, ["a", "b"]);
 *                   ^ 🚁
 *
 * 💡 You should see that both generics are still locked in!
 * Even though they're deep in the function arguments.
 */

/**
 * 💡 Let's examine some more adventurous API's:
 */

const mapOverArray = <TItem, TNewItem>(
  array: TItem[],
  map: (item: TItem) => TNewItem,
) => {
  return array.map(map);
};

mapOverArray([1, 2, 3], (item) => `${item}`);
/** ^ 🚁
 *
 * Here, the first generic is inferred by the array. The
 * second is inferred by the return type of the function.
 *
 * 🕵️‍♂️ Try changing the function to return a boolean, number,
 * or object. See what happens to the generic inference.
 *
 * mapOverArray([1, 2, 3], (item) => ({ item }));
 * mapOverArray([1, 2, 3], (item) => !!item);
 */

/**
 * 💡 Another more mind-bending property of generics is
 * that you can use them to infer the slots of other
 * generic types, like interfaces and types.
 *
 * The function below has been stubbed with 'any'. It
 * currently allows anything in, and returns any out.
 *
 */

const massageData = (result: any) => {
  return result.data;
};

massageData({
  // ^ 🚁
  data: {
    id: "123",
    name: "John",
  },
  statusCode: 200,
});

/**
 * 🚁 Hover over the massageData call. You should see that
 * it takes in any, and returns any:
 *
 * const massageData: (result: any) => any
 */

/**
 * 🛠 Create a new interface with the name of Result, which
 * contains a single generic slot, TData. Give the interface
 * a 'data' property assigned to TData, and a statusCode property
 * assigned to number.
 *
 * interface Result<TData> {
 *   statusCode: number;
 *   data: TData;
 * }
 */

/**
 * 🛠 Change the massageData function to take in TData in
 * its generic slots.
 *
 * const massageData = <TData>(result: any) => {
 *
 * 🛠 Next, change
 *
 * result: any
 *
 * to be
 *
 * result: Result<TData>
 */

/**
 * 🚁 Hover over the massageData call:
 *
 * massageData({
 *   // ^ 🚁
 *   data: {
 *     id: "123",
 *     name: "John",
 *   },
 *   statusCode: 200,
 * });
 *
 * You'll now see that the generic of TData has been locked in with
 * { id: string, name: string }.
 *
 * 💡 This is kind of amazing - we're able to infer the TData
 * inside Result<TData> just by using it in our arguments set.
 */
