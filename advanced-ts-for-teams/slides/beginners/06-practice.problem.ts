/**
 * 💡 This is the practice section! You'll find the full solutions
 * in ./06-practice.solution.ts
 */

type Role = "user" | "admin" | "super-admin";

export interface User {
  id: string;
  name: string;
  age: number;
  role: Role;
  phoneNumber?: string;
}

interface UsersDb {
  [id: string]: User;
}

const usersDb: UsersDb = {};

const createUser = (
  name: string,
  age: number,
  role: Role,
  phoneNumber?: string,
): User => {
  const newUser = {
    id: "1",
    age: age,
    name: name,
    role: role,
    phoneNumber: phoneNumber,
  };

  usersDb[newUser.id] = newUser;

  return newUser;
};

/**
 * 💡 So far, we can only create users and add them to our
 * local database. We need to build out a few new functions
 * if we're going to have a fully working user system.
 */

/**
 * 🛠 Let's start with deleteUser. Create a new function which
 * takes in an id (a string) and returns void.
 *
 * Inside the function, delete the user with the correct id
 * in the usersDb.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 *
 * 💡 void is a type which means the function returns nothing.
 *
 * 🕵️‍♂️ Try calling your function a couple of times to see if
 * you got it right. Valid usage should be:
 *
 * deleteUser('1');
 * deleteUser('2');
 *
 * 🕵️‍♂️ Test that it errors when you call it with invalid usage:
 *
 * deleteUser(1);
 * deleteUser('1', 'Matt');
 */

/**
 * 🛠 Let's build getOneUser. This function will take in an
 * id: string, and return User | undefined.
 *
 * Inside the function, get the user from the database and
 * return it:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties
 *
 * 💡 The reason we're returning User | undefined is that the id
 * the user passes in might not exist in our database.
 */

/**
 * 🛠 Next, let's build updateUser. This function will take in:
 *
 * An id: string,
 * A name: string,
 * An age: number,
 * A role: Role,
 * A phoneNumber: string (but make it optional!)
 *
 * It'll return User | undefined, for the same reason as
 * getOneUser - it might not exist in the database.
 *
 * Inside the function, first check that the user exists
 * in our database. If it doesn't exist, return undefined.
 *
 * If it does exist, update the record in the usersDb via
 * the id, then return the updated record.
 *
 * 🕵️‍♂️ Check that it works with valid usage:
 *
 * updateUser('1', 'Matt', 21, 'super-admin', '123');
 * updateUser('1', 'Matt', 21, 'user');
 *
 * 🕵️‍♂️ Check that it errors correctly with invalid usage:
 *
 * updateUser('1', 'Matt', '21', 'super-admin', '123');
 * updateUser('1', 'Matt', 21, 'non-super-admin');
 * updateUser('1', 'Matt');
 */
