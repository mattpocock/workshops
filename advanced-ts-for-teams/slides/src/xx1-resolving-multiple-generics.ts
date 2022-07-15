/**
 * 💡 Let's dive deeper into generics, starting
 * with one of the most common mistakes I see:
 * adding too many generics.
 */

export const compare = <TFirstArg, TSecondArg>(
  first: TFirstArg,
  second: TSecondArg
) => {
  return first === second;
};

const isEqual = compare("a", 2);

/**
 * 💡 The function above compares two arguments,
 * and returns whether they're the same, using
 * deep equality.
 *
 * ⛔️ It should be erroring:
 *
 * This condition will always return 'false'
 * since the types 'TFirstArg' and 'TSecondArg'
 * have no overlap.
 *
 * 🕵️‍♂️ See if you can work out an explanation
 * for why that error is happening.
 */

/**
 * 🚁 Try hovering over compare, in the function
 * call above:
 *
 * const isEqual = compare("a", 2);
 *                 ^ 🚁
 *
 * You'll notice that the generics have been
 * locked in as string, and number. The string
 * comes from 'a', and number comes from 2.
 */

/**
 * 🛠 Try changing the argument above to remove
 * the second generic slot, leaving the function
 * with only a single generic. Change the second
 * argument of the function to be the type TFirstArg.
 *
 * export const compare = <TFirstArg>(
 *   first: TFirstArg,
 *   second: TFirstArg,
 * ) => {
 *   return first === second;
 * };
 */

/**
 * ✅ The error goes away! But...
 *
 * ⛔️ The error has now moved to the second argument
 * of compare():
 *
 * Argument of type 'number' is not assignable to
 * parameter of type 'string'.
 *
 * 🚁 Hover over compare to see that the generic slot
 * has now been locked in as a single 'string':
 *
 * const isEqual = compare("a", 2);
 *                 ^ 🚁
 */

/**
 * 💡 This gives us an important insight on TypeScript.
 * If you declare TWO generics, TypeScript will by default
 * assume that the two are completely unrelated to the
 * other. That's why the initial error was showing:
 *
 * This condition will always return 'false'
 * since the types 'TFirstArg' and 'TSecondArg'
 * have no overlap.
 *
 * Inside the _context of the function_, TFirstArg and
 * TSecondArg could be inferred to be anything! Meaning
 * TS can't guarantee that they would be related enough
 * to even be comparable via '==='.
 *
 * So for our compare function to make sense, you would
 * need to pass it two of the _same thing_ in order for
 * it ever to return true.
 *
 * 🕵️‍♂️ Try changing the compare function to compare two
 * of the same type:
 *
 * compare("a", "b");
 */
