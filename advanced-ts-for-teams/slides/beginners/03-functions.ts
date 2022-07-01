/**
 * 💡 We've got our types set up pretty well, but
 * we're not actually _doing_ anything with them
 * at runtime apart from declaring a demoUser.
 *
 * Let's build some functions so we can start
 * creating users.
 */

type Role = "user" | "admin" | "super-admin";

export interface User {
  id: string;
  name: string;
  age: number;
  role: Role;
}

const demoUser: User = {
  id: "1",
  name: "Matt",
  age: 22,
  role: "user",
};

/**
 * 🛠 Create a function called createUser, which takes
 * no arguments and returns a User.
 *
 * function createUser(): User {}
 */

// function createUser(name, age, role): User {
//   return {
//     id: "123",
//     age: 12,
//     name: "awda",
//     role: "admin",
//   };
// }

/**
 * 💡 This syntax means we're saying to TypeScript "this
 * function returns a User". You could also declare it
 * like this:
 *
 * const createUser = (): User => {}
 */

/**
 * ⛔️ You should be seeing an error!
 *
 * A function whose declared type is neither 'void'
 * nor 'any' must return a value.
 *
 * This is because we've said our function returns a User,
 * but in fact it's returning nothing (which TypeScript
 * calls 'void')
 */

/**
 * 🛠 Change your createUser function so that it returns
 * a user with some default values:
 *
 * function createUser(): User {
 *   return {
 *     id: '2',
 *     name: 'Brian',
 *     age: 48,
 *     role: 'admin',
 *   }
 * }
 *
 * ✅ The error should have disappeared! That's because
 * we're now returning something from our function which
 * matches our User contract.
 */

/**
 * 💡 This is pretty good - but really, we want to be able
 * to create a user with _dynamic_ values, not always the
 * same values. For that, we're going to need some arguments
 * to our function.
 *
 * 🛠 Change createUser so that it takes name, age, and role
 * arguments.
 *
 * function createUser(name, age, role): User {
 *   return {
 *     id: '2',
 *     name: 'Brian',
 *     age: 48,
 *     role: 'admin',
 *   }
 * }
 */

function createUser(name: string, age: number, role: Role): User {
  return {
    id: "3",
    age,
    name,
    role,
  };
}

/**
 * ⛔️ Woah, three errors! At least they're all the same:
 *
 * Parameter 'role' implicitly has an 'any' type.
 *
 * 💡 This is an infamously hard-to-read TypeScript error.
 *
 * This is what it means:
 *
 * 1. You have strict mode turned on in TypeScript (`strict: true`
 * in tsconfig.json)
 * 2. Strict mode means you MUST annotate all parameters to
 * functions with types
 * 3. This parameter ('role') hasn't been assigned a type
 * 4. Until you do assign it a type, we'll assume it's typed as
 * 'any', which means 'anything'
 *
 * In a nutshell, it means: 'give me a type!'
 */

/**
 * 🛠 Give name, age and role a type annotation that
 * matches their attributes in User:
 *
 * function createUser(name: string, age: number, role: Role): User {
 *   return {
 *     id: '2',
 *     name: 'Brian',
 *     age: 48,
 *     role: 'admin',
 *   }
 * }
 *
 * 💡 This syntax - name: string - tells TypeScript that whenever
 * this function is called, it must be called with a string, number
 * and a role.
 */

/**
 * 🛠 Let's change the values we're returning so that they send back
 * the parameters of the function:
 *
 * function createUser(name: string, age: number, role: Role): User {
 *   return {
 *     id: '2',
 *     name: name,
 *     age: age,
 *     role: role,
 *   }
 * }
 */

/**
 * 🛠 Let's now call our function using the parameters above:
 *
 * const newUser = createUser('Matt', 31, 'super-admin');
 */

/**
 * 🚁 Hover over newUser - you'll see it's typed as a User!
 *
 * 🕵️‍♂️ Try accessing some properties on that user, you'll
 * see that you get autocomplete on them!
 *
 * newUser.
 *         ^ autocomplete here!
 *
 * 🚁 Hover over createUser - you'll see that you can see
 * the whole function signature! This makes it a lot easier
 * for devs trying out the function to know how to use it.
 *
 * const newUser = createUser('Matt', 31, 'super-admin');
 * //              ^ 🚁
 */

/**
 * 🛠 Try removing the last argument from the function call:
 *
 * const newUser = createUser('Matt', 31);
 */

/**
 * ⛔️ You should be seeing an error!
 *
 * Expected 3 arguments, but got 2.
 *
 * That's because we've told our function that it
 * MUST take in 3 arguments.
 *
 * 🛠 Add the third argument back in to fix the error.
 */

/**
 * 💡 There we go - we now know how to make our functions
 * type safe. We can ensure that both the return type AND
 * the arguments match a contract.
 */
