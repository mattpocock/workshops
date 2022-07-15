/**
 * 💡 We're going to be creating some simple
 * functions for updating users in a database.
 *
 * Before that, we need to figure out what a
 * 'User' even means in our system.
 *
 * We're going to create a contract which we MUST
 * fulfil in order for something to be considered
 * a user in our system.
 */

/**
 * 🛠 Create an interface called User.
 *
 * interface User {
 *   id: string;
 * }
 */

/**
 * 💡 This User interface represents a user in
 * our system. Let's use it to ensure our users
 * are always in a predictable shape.
 */

/**
 * 🛠 Create an object called demoUser with an id
 * of '1'.
 *
 * const demoUser = {
 *   id: '1',
 * };
 */

/**
 * 💡 This user we've created _looks_ like the
 * User interface we created in TypeScript above,
 * but we're not telling TypeScript to enforce it.
 *
 * Let me show you what I mean:
 */

/**
 * 🛠 Change the User interface above so that it has
 * a name attribute, which is also a string:
 *
 * interface User {
 *   id: string;
 *   name: string;
 * }
 */

/**
 * 💡 You'll notice that the demoUser above has NOT
 * been updated. Let's tell TypeScript to ensure that
 * this user1 always has all the up-to-date properties
 * it needs.
 */

/**
 * 🛠 Give demoUser a type annotation of User, using
 * the `demoUser: User` syntax:
 *
 * const demoUser: User = { ... };
 */

/**
 * ⛔️ You should be seeing an error!
 *
 * Property 'name' is missing in type '{ id: string; }'
 * but required in type 'User'.
 *
 * 💡 Here, TypeScript is telling you that you haven't
 * added a name property to the object, but name is
 * required on a user.
 */

/**
 * 🛠 Add the 'name' attribute to demoUser.
 *
 * const demoUser = {
 *   id: '1',
 *   name: 'Matt',
 * }
 *
 * 💡 You should notice that you get autocomplete by
 * typing ctrl-space inside the demoUser! TypeScript
 * is pretty cool.
 */

/**
 * ✅ The error should have disappeared! That's because
 * our demoUser now satisfies the User contract.
 *
 * 🕵️‍♂️ Try adding other attributes to the User, like
 * firstName, lastName and middleName. See what errors
 * this reveals on demoUser!
 */

/**
 * 🛠 Let's add some more properties to our User. Let's
 * add age (as a number), and isAdmin as a boolean.
 *
 * interface User {
 *   id: string;
 *   name: string;
 *   age: number;
 *   isAdmin: boolean;
 * }
 */

/**
 * ⛔️ demoUser will now be erroring!
 *
 * Type '{ id: string; }' is missing the following
 * properties from type 'User': age, isAdmin
 *
 * 🛠 Pass it any number to age, and either true or
 * false to isAdmin:
 *
 * const demoUser = {
 *   id: '123',
 *   name: 'Matt',
 *   age: 22,
 *   isAdmin: true,
 * }
 */

/**
 * ✅ The error should have vanished!
 *
 * 💡 You can use boolean to represent true/false,
 * number to represent any number, and string to
 * represent any string.
 */
