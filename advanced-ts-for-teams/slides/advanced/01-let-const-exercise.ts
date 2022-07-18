/**
 * 💡 In this exercise, we're going to see how TypeScript infers
 * different types in different situations, based on whether
 * the value is read-only or not.
 */

/**
 * 🛠 Declare a new variable with a const, called `firstName`. E.g:
 *
 * const firstName = 'Matt';
 */

/**
 * 🚁 Hover over `firstName`. It should be
 * inferred as 'Matt'
 *
 * const firstName = "Matt";
 *       ^ 🚁
 */

/**
 * 🛠 Declare a new variable with a let, called `lastName`
 *
 * let lastName = "Pocock";
 */

/**
 * 🚁 Hover over `lastName`. It should be
 * inferred as 'string'
 *
 * 💡 If a variable can't be updated, TypeScript will
 * infer it as its literal type. So, declaring firstName
 * with a const means it gets inferred as its literal: 'Matt'
 */

/**
 * 🛠 In the function below, change the type annotations from:
 *
 * `firstName: string` -> `firstName: 'Matt'`
 * `lastName: string` -> `lastName: 'Pocock'`
 */
const concatenateName = (firstName: string, lastName: string) => {};

/**
 * 🛠 Call the function with the two variables you declared above.
 * eg: `concatenateName(firstName, lastName)`
 */

/**
 * ⛔️ You should be seeing an error on `lastName`
 *
 * Argument of type 'string' is not assignable to parameter of type '"Pocock"'.
 */

/**
 * 🛠 Fix the error by changing `lastName` from a let to a const
 */

/**
 * ✅ The error above should be gone.
 *
 * 💡 You can declare literal types in the arguments of functions
 * to ensure that ONLY those values can be passed.
 */

export {};
