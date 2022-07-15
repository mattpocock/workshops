/**
 * 💡 Another more mind-bending property of generics is
 * that you can use them to infer the slots of other
 * generic types, like interfaces and types.
 *
 * The function below has been stubbed with 'any'. It
 * currently allows anything in, and returns any out.
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
