type Role = "user" | "admin" | "super-admin";

export interface User {
  id: string;
  name: string;
  age: number;
  role: Role;
  phoneNumber?: string;
}

/**
 * 💡 Now our createUser function is returning the right user type,
 * we want to hook it up to a demo database so we can build the rest
 * of our functions - like updating, fetching and deleting users.
 *
 * For that, we're going to need to learn about how to build a
 * record in TypeScript.
 */

/**
 * 🛠 Add a variable called usersDb, declared with const and
 * assigned to an empty object.
 *
 * const usersDb = {};
 *
 * Make sure you add it above createUser below.
 */

/**
 * 🛠 We're going to change createUser so that it assigns the
 * user it creates to the database, using its id as a key.
 *
 * To do that, let's change createUser so it creates its new user
 * in a newUser variable:
 *
 * const createUser = (
 *   name: string,
 *   age: number,
 *   role: Role,
 *   phoneNumber?: string,
 * ): User => {
 *   const newUser = {
 *     id: "1",
 *     age: age,
 *     name: name,
 *     role: role,
 *     phoneNumber: phoneNumber,
 *   };
 * };
 */

const createUser = (
  name: string,
  age: number,
  role: Role,
  phoneNumber?: string,
): User => {
  return {
    id: "1",
    age: age,
    name: name,
    role: role,
    phoneNumber: phoneNumber,
  };
};

/**
 * 🛠 Then, let's add a line of code assigning the newUser to
 * our usersDb object, using the id as a key.
 *
 * const createUser = (
 *   name: string,
 *   age: number,
 *   role: Role,
 *   phoneNumber?: string,
 * ): User => {
 *   const newUser = {
 *     id: "1",
 *     age: age,
 *     name: name,
 *     role: role,
 *     phoneNumber: phoneNumber,
 *   };
 *
 *   usersDb[newUser.id] = newUser;
 * };
 */

/**
 * ⛔️ There should be two errors! Let's look at the one on User
 * first:
 *
 * A function whose declared type is neither 'void' nor
 * 'any' must return a value.
 *
 * 🛠 This is because we're no longer returning anything from our
 * function. Let's add a line returning newUser:
 *
 * usersDb[newUser.id] = newUser;
 *
 * return newUser;
 *
 * ✅ The error should have disappeared!
 */

/**
 * ⛔️ But there's still one hanging around, and it's a complex
 * error:
 *
 * Element implicitly has an 'any' type because expression of type
 * 'string' can't be used to index type '{}'. No index signature
 * with a parameter of type 'string' was found on type '{}'.
 *
 * What on earth does this mean?
 *
 * 💡 In TypeScript, you can create objects with dynamic keys. In
 * our case, we want to create an object where the keys are the ids
 * of the users we create.
 *
 * This means you need to create a type with an 'index signature',
 * which is TypeScript's name for the type given to a dynamic key.
 */

/**
 * 🛠 Let's create our type with an index signature. Let's create a
 * type using 'interface', and use the { [id: string]: User } syntax:
 *
 * interface UserDb {
 *   [id: string]: User;
 * }
 *
 * 🛠 Annotate your usersDb variable with this new type:
 *
 * const usersDb: UserDb = {};
 *
 * ✅ The error should have disappeared! Let's examine why.
 */

interface IndexExample {
  [indexName: string]: string;
  /** ⬆️       ⬆️        ⬆️ The value when this index is accessed
   *  ⬆️       ⬆️
   *  ⬆️       ⬆️ The type given to the index - can be string,
   *  ⬆️         number or Symbol.
   *  ⬆️
   *  ⬆️ The name of the index - can be anything you like!
   */
}

const exampleMap: IndexExample = {};

/**
 * 💡 The example above breaks down each element of the
 * syntax for index signature types.
 *
 * 🛠 Add a line of code assigning a string to the exampleMap:
 *
 * exampleMap.greeting = 'hello';
 */

/**
 * ⛔️ You should be seeing an error!
 *
 * Type 'string' is not assignable to type 'number'.
 *
 * That's because we've said that our object can only
 * contain numbers as its values.
 *
 * 🛠 Try changing the number type to a string. The error
 * should disappear!
 *
 * 🕵️‍♂️ Try experimenting with the IndexExample:
 *
 * Try changing the index to a number instead of a string.
 * Try changing the value to a boolean, or even a User.
 * Try assigning correct (and incorrect) values to the
 * example, to see what errors pop up.
 */

/**
 * 💡 Index signature types are very useful for declaring objects
 * with dynamic keys. In the next section, we'll use our usersDb
 * to build out the rest of our CRUD functions - update, delete,
 * findAll and findOne.
 */
