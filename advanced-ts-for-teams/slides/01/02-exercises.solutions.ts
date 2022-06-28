export {};

// ----------
// Exercise 1
// ----------

/**
 * 🛠 How many type annotations can you remove?
 * 💡 All of them, except for the first!
 */
const plusOneAndToString = (input: number | string) => {
  //  ^ 🚁
  /**
   * 💡 The return type of this function is always
   * a string, so no need to re-annotate it here
   */

  let inputAsNumber;
  //  ^ 🚁
  /**
   * 💡 We _can_ annotate this as a number if we like,
   * but it's not necessary. We can let it default
   * to any, and have it infer from the control
   * flow below.
   */

  if (typeof input === "string") {
    inputAsNumber = Number(input);
    //                     ^ 🚁
    /**
     * 💡 TypeScript knows that input is a string
     * inside this closure, so no need to re-annotate it
     */
  } else {
    inputAsNumber = input;
    //              ^ 🚁
    /**
     * 💡 We've declared that input can only be either
     * number OR string. TypeScript knows that input
     * is _not_ a string (because we're in an else
     * closure). So it must be... a number!
     */
  }

  const result = inputAsNumber + 1;
  //             ^ 🚁
  /**
   * 💡 inputAsNumber is being inferred
   * as number, because in both branches
   * above it gets assigned to a number
   */

  return String(result);
};

// ----------
// Exercise 2
// ----------

/**
 * 🛠 How many type annotations can you remove?
 * 💡 All of them, except for the first!
 */
const expectStringOrNumber = (input: unknown) => {
  //  ^ 🚁

  if (typeof input === "string") {
    return input;
    //     ^ 🚁
    // 💡 Inside this closure, `input` is inferred as a string!
  }
  if (typeof input === "number") {
    return input;
    //     ^ 🚁
    // 💡 Inside this closure, `input` is inferred as a number!
  }
  /**
   * 💡 Throwing this error means that this function
   * can only return either a number or a string, so
   * we can remove the return type annotation above.
   */
  throw new Error("Invalid type!");
};
