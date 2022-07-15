/**
 * 💡 We're going to examine how you can use 'as const'
 * to get literal inference on members of arrays
 */

/**
 * 🛠 Declare a new array containing several routes
 * declared as strings. Declare it with a let:
 *
 * let routes = ['/', '/users']
 */

/**
 * 🚁 Hover over the `routes` variable name.
 * It should be inferred as `string[]` - an array
 * of strings
 */

/**
 * 🛠 Change the `let` above to a `const`:
 *
 * const routes = ['/', '/users']
 */

/**
 * 🚁 Hover over the `routes` variable name.
 * It should STILL be inferred as string[] -
 * we're not getting literal inference on the
 * members of the array yet.
 */

/**
 * 🛠 Try to change the first member of the array
 * to a different value:
 *
 * routes[0] = '/something-else'
 */

/**
 * 💡 TypeScript doesn't error here because even
 * though we've declared the array with const,
 * the elements of the array are still mutable.
 *
 * If we could say that the entire array was not
 * mutable, we could get inference on the members
 * of the array, not just the array itself.
 */

/**
 * 🛠 Add an 'as const' annotation to the end of
 * the routes:
 *
 * const routes = ['/', '/users'] as const;
 */

/**
 * ⛔️ The code we wrote above should be erroring,
 * with this error:
 *
 * Cannot assign to '0' because it is a read-only property.
 */

/**
 * 🚁 Hover over the `routes` variable name.
 * It should now be inferred as:
 *
 * readonly ["/", "/users"]
 */

export {};
