/**
 * 💡 Our user type is serving us pretty well, but
 * there's some refactoring to do! Turns out, users
 * can be _more_ than an admin or not, they can be
 * either a:
 *
 * User (team member)
 * Admin (admin over their team)
 * Super admin (admin over the whole system)
 *
 * So we need to change our isAdmin boolean to something
 * different to reflect these three roles.
 */

export interface User {
  id: string;
  name: string;
  age: number;
  isAdmin: boolean;
}

const demoUser: User = {
  id: "1",
  name: "Matt",
  age: 22,
  isAdmin: false,
};

/**
 * 🛠 Inside User, change isAdmin: boolean to be
 * role: 'admin' | 'super-admin' | 'user';
 *
 * interface User {
 *   id: string;
 *   name: string;
 *   age: number;
 *   role: 'admin' | 'super-admin' | 'user'
 * }
 */

/**
 * ⛔️ You should be seeing an error on demoUser!
 *
 * Object literal may only specify known properties,
 * and 'isAdmin' does not exist in type 'User'.
 *
 * 🛠 This is because isAdmin no longer exists on our
 * User object. Let's remove it.
 *
 * const demoUser: User = {
 *   id: "1",
 *   name: "Matt",
 *   age: 22,
 * };
 */

/**
 * ⛔️ You should be seeing ANOTHER error!
 *
 * Property 'role' is missing in type
 * '{ id: string; name: string; age: number; }'
 * but required in type 'User'.
 *
 * 🛠 This is because we need to add 'role' to our
 * object in order to satisfy it. Let's give it a
 * value of 'user'.
 *
 * const demoUser: User = {
 *   id: "1",
 *   name: "Matt",
 *   age: 22,
 *   role: 'user',
 * };
 */

/**
 * ✅ The error should have disappeared!
 *
 * This is because we're satisfying the User contract
 * with our type, now that we've passed role: 'user';
 *
 * 🕵️‍♂️ Try assigning the 'role' attribute to 'super-admin',
 * or 'admin'. Try assigning it an incorrect string, like
 * 'mega-user'. See what errors pop up.
 */

/**
 * 💡 We used some new syntax! The | is an 'OR' operator,
 * which means it's saying that the type can be this
 * OR that.
 */

export const coolName: "Matt" | "Louise" | "David" = "Louise";
/**                           ⬆️ OR       ⬆️ OR         ⬆️ 🕵️‍♂️ Try changing me!
 *
 * 💡 This is called a Union Type - the type is a
 * 'union' of several possile things.
 *
 * 🕵️‍♂️ Try adding or removing elements from the type above.
 * See if the error you're getting changes.
 *
 * export const coolName: "Matt" | "Louise" | "David" | "Brian" = "Louise";
 */

/**
 * 🛠 To practice, let's add another attribute to User:
 * contactPreference: 'none' | 'email' | 'phone'
 *
 * interface User {
 *   // Other attributes!
 *   contactPreference: 'none' | 'email' | 'phone';
 * }
 */

/**
 * 🕵️‍♂️ You'll be getting an error on demoUser! See if you
 * can figure this one out yourself...
 *
 * Property 'contactPreference' is missing in type
 * '{ id: string; name: string; age: number; role: "user"; }'
 * but required in type 'User'.
 */

/**
 * 💡 We need to specify what the default role a user
 * is going to be when it's created.
 *
 * 🛠 Add a new variable called DEFAULT_USER_ROLE, which
 * is typed the same as the role attribute in User. Let's
 * assign it to 'user';
 *
 * const DEFAULT_USER_ROLE: 'user' | 'admin' | 'super-admin' = 'user';
 */

/**
 * 💡 We've got some duplicated code between the User
 * and the DEFAULT_USER_ROLE: the type declaration
 * 'user' | 'admin' | 'super-admin' is in both places.
 *
 * We can tidy this up by using a type alias, which
 * uses the type keyword.
 *
 * 🛠 Create a new type called 'Role' using the 'type'
 * keyword. Assign it to 'user' | 'admin' | 'super-admin'.
 *
 * type Role = 'user' | 'admin' | 'super-admin';
 */

/**
 * 💡 This Role type can now be used everywhere we previously
 * declared this type manually. Handy!
 *
 * 🛠 Change the DEFAULT_USER_ROLE so it's typed as
 * Role:
 *
 * const DEFAULT_USER_ROLE: Role = 'user';
 *
 * 🛠 Change the User type so it references Role instead of
 * 'user' | 'admin' | 'super-admin':
 *
 * interface User {
 *   // Other attributes
 *   role: Role;
 * }
 */

/**
 * 💡 Great job! We've covered union types, using
 * the | operator, and type aliases, using the type
 * operator.
 */
