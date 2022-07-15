/**
 * 💡 TypeScript is really good at handling literal
 * strings. We've seen how you can infer literal
 * strings from objects and arrays - now let's look
 * at manipulating them.
 */

/**
 * 🛠 Create a type called Route - this is going to
 * represent any string which starts with a forwards
 * slash.
 *
 * type Route = `/${string}`;
 */

/**
 * 🛠 Create a function called goToRoute, which takes
 * in Route as an argument:
 *
 * const goToRoute = (route: Route) => {};
 */

/**
 * 🕵️‍♂️ Try calling goToRoute. You should notice that
 * you can only call it with strings starting with
 * '/'
 *
 * ✅ goToRoute('/users'); // should work
 * ✅ goToRoute('/'); // should work
 * ⛔️ goToRoute('users'); // should NOT work
 */

/**
 * 💡 We can use `${string}` syntax in TypeScript to
 * compose string literal types together. These are
 * called Template Literal Types.
 *
 * https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 *
 * There are even some type helpers which help you
 * manipulate strings, like Capitalize<T> or
 * Uppercase<T>.
 */

/**
 * 🕵️‍♂️ Declare a type called MyName, containing your first
 * name.
 *
 * type MyName = 'Matt';
 *
 * Declare a new type called UppercaseName, which calls
 * Uppercase on the previously declared type:
 *
 * type UppercaseName = Uppercase<MyName>;
 *      ^ 🚁
 *
 * Hover over it to investigate the type.
 */

/**
 * 💡 Let's combine our knowledge of generics and
 * string literals together to create a function
 * which can prefix a route with another route.
 */

/**
 * 🛠 Create a function called prefixRoute, which
 * takes in two parameters, prefix and suffix.
 *
 * Declare both of the parameters as Route, using
 * the type we declared earlier
 *
 * const prefixRoute = (prefix: Route, suffix: Route) => {}
 *
 * 🛠 Inside prefixRoute, return the two routes
 * concatenated together:
 *
 * return `${prefix}${suffix}`;
 */

/**
 * 🛠 Call prefixRoute with '/admin' and '/users'
 *
 * const route = prefixRoute('/admin', '/users');
 */

/**
 * 🚁 Hover over route - it should be being inferred
 * as a string.
 *
 * const route = prefixRoute('/admin', '/users');
 *       ^ 🚁
 *
 * 💡 We're not getting literal inference back from
 * our function. I.e. the string isn't being inferred
 * as the actual value of `/admin/users`.
 *
 * The reason is that we're not usin any generics inside
 * our function - two Route types mashed together just
 * end up in a string, not a literal type.
 *
 * Let's see if we can use generics to get better
 * typings on prefixRoute.
 */

/**
 * 🛠 Add two generic slots to prefixRoute, TPrefix
 * and TSuffix
 *
 * const prefixRoute = <TPrefix, TSuffix>(prefix: TPrefix, suffix: TSuffix) => {
 */

/**
 * 🛠 Let's also add a return type which combines
 * these two generics together: `${TPrefix}${TSuffix}`:
 *
 * const prefixRoute = <TPrefix, TSuffix>(
 *   prefix: TPrefix,
 *   suffix: TSuffix
 * ): `${TPrefix}${TSuffix}` => {
 */

/**
 * ⛔️ Woah, errors everywhere! Let's look at the
 * errors on TPrefix and TSuffix first:
 *
 * Type 'TPrefix' is not assignable to type 'string
 * | number | bigint | boolean | null | undefined'.
 *
 * 💡 This is because generics without constraints
 * can represent any value. BUT only certain types
 * of values can be passed to a template literal:
 * strings, numbers, bigints, booleans, null or
 * undefined.
 *
 * We need to constrain TPrefix and TSuffix so that
 * we can pass them to the template literal.
 */

/**
 * 🛠 Add an extends clause to TPrefix and TSuffix
 * to constrain them to being the Route type.
 *
 * const prefixRoute = <TPrefix extends Route, TSuffix extends Route>(
 */

/**
 * ✅ Hooray! All our errors have disappeared. That's
 * because we're ensuring that the values that get put into
 * the template literal type are strings.
 */

/**
 * 🚁 Hover over route again - it should now be being
 * inferred as the literal '/admin/users'.
 *
 * 🚁 Also hover over prefixRoute() - you should see
 * that the generic slots are locked in as '/admin'
 * and '/users', as expected.
 *
 * const route = prefixRoute('/admin', '/users');
 *       ^ 🚁     ^ 🚁
 */

/**
 * 💡 Hooray - we're now getting literal inference
 * of the returned route based on what we passed in.
 *
 * That's because we've captured the literals with
 * two generics, TPrefix and TSuffix, and used a template
 * literal type to concatenate them together at the
 * TYPE level as well as the runtime level.
 *
 * 🕵️‍♂️ Try changing the values passed to prefixRoute to
 * see what the literal changes to.
 *
 * 🕵️‍♂️ Try passing values which don't begin with a forward
 * slash to prefixRoute to see what errors come up.
 */

export {};
