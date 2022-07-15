/**
 * 💡 Building on our `as const` knowledge from
 * last time, we're going to use typeof to
 * build a function containing our routes.
 */

const routes = ["/", "/users"] as const;
/**   ^ 🚁
 *
 * 🚁 Hover over `routes`. Because of as const,
 * we're getting literal inference on all
 * the members of this routes array
 */

/**
 * 🛠 Create a new type called RoutesAsType,
 * using the typeof operator:
 *
 * type RoutesAsType = typeof routes;
 */

/**
 * 🚁 Hover over RoutesAsType, then hover
 * over routes. They should have exactly
 * the same type signature:
 *
 * readonly ["/", "/users"]
 */

/**
 * 💡 This is what typeof does - it takes
 * a bit of TypeScript's inference and
 * turns it into a type
 */

/**
 * 🛠 Try adding an route to the routes array:
 *
 * const routes = ['/', '/users', '/posts'] as const;
 */

/**
 * 🚁 Hover over RoutesAsType - it should have
 * kept itself up to date with the routes array.
 */

/**
 * 🛠 Create a new type called FirstRoute which
 * accesses the first member of RoutesAsType
 *
 * type FirstRoute = RoutesAsType[0];
 */

/**
 * 🚁 Hover over FirstRoute. It should have
 * the same type as the first member of the
 * array.
 */

/**
 * 🛠 Create a new function called goToRoute
 * which takes in firstRoute: FirstRoute as the
 * first argument:
 *
 * const goToRoute = (firstRoute: FirstRoute) => {}
 *
 * 🕵️‍♂️ Try calling goToRoute, exploring which
 * autocomplete options are available and which values
 * are erroring:
 *
 * goToRoute('/');
 * goToRoute('/users');
 * goToRoute('/something-else');
 */

/**
 * 💡 You should notice that you only get
 * autocomplete for the first route, and
 * that calling the function with anything
 * other than the first route fails.
 *
 * 💡 We need to make this function take in _any_
 * of the routes in the `routes` array. This is
 * the type we'd like to create:
 *
 * '/' | '/users' | '/other-members-of-the-array'
 */

/**
 * 🛠 Create a new type called FirstTwoRoutes. Declare
 * it as RoutesAsType[0 | 1];
 *
 * type FirstTwoRoutes = RoutesAsType[0 | 1];
 */

/**
 * 🚁 Hover over FirstTwoRoutes - it should be
 * a union of the first two members of the routes
 * array.
 *
 * type FirstTwoRoutes = RoutesAsType[0 | 1];
 *      ^ 🚁
 */

/**
 * 💡 This is cool! Passing a union type as a property
 * access to a type RETURNS a union of those members.
 *
 * But we're not quite there yet - we need to return
 * a union of ALL the members of the array.
 */

/**
 * 🛠 Create a new type called Route. Instead
 * of using RoutesAsType[0], we're going to declare
 * it as RoutesAsType[number]:
 *
 * type Route = RoutesAsType[number];
 */

/**
 * 🚁 Hover over the type Route. It should be
 * a union of all members of the routes array:
 *
 * '/' | '/users' | '/other-members-of-the-array'
 *
 * 💡 We've done it! In this position, accessing
 * the array with [number] means that it returns
 * a union of all the members of the array. It acts
 * as if it were 0 | 1 | 2 | 3 ...
 */

/**
 * 🛠 Change the goToRoute function to take in
 * Route as its parameter, not FirstRoute:
 *
 * const goToRoute = (route: Route) => {}
 *
 * 🕵️‍♂️ Again, try calling goToRoute, exploring which
 * autocomplete options are available and which values
 * are erroring:
 *
 * goToRoute('/');
 * goToRoute('/users');
 * goToRoute('/something-else');
 */

/**
 * 💡 We've managed to create a union type of
 * all of the members of the array, and we're using
 * it to safely type a runtime function. Pretty cool!
 */

/**
 * 🛠 We can remove some lines of code here. Delete
 * the RoutesAsType type, and change Route to:
 *
 * type Route = typeof routes[number];
 */

/**
 * 🚁 Hover over Route - the type will be
 * just the same as before we refactored.
 */

export {};
