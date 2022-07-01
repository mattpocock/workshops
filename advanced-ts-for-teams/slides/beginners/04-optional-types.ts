/**
 * 💡 So far, we've been dealing with types that always must
 * be present. But what if we want a type to be optional?
 *
 * Let's imagine that we want to track user's phone numbers.
 * Some users will want to provide their phone numbers, and
 * some won't. So we need to reflect that on the User type.
 */

type Role = "user" | "admin" | "super-admin";

export interface User {
  id: string;
  name: string;
  age: number;
  role: Role;
}

const createUser = (name: string, age: number, role: Role): User => {
  return {
    id: "1",
    age: age,
    name: name,
    role: role,
  };
};

/**
 * 🛠 Add an optional property, phoneNumber, onto the User.
 * We're going to declare it as a string.
 *
 * interface User {
 *   phoneNumber?: string;
 * }
 */

/**
 * 💡 The `?:` syntax tells TypeScript that we don't _need_
 * to provide the phoneNumber to satisfy the User contract.
 * It's an optional property.
 */

/**
 * 🛠 Create a new variable called user1PhoneNumber, and assign
 * user1.phoneNumber to it.
 *
 * const user1PhoneNumber = user1.phoneNumber;
 */

/**
 * 🚁 Hover over user1PhoneNumber - it will show up as string
 * | undefined. This means that it might be either a string,
 * or undefined.
 *
 * const user1PhoneNumber = user1.phoneNumber;
 *       ^ 🚁
 */

/**
 * 💡 Because the phoneNumber property is optional, it means
 * that createUser isn't erroring. If we were to remove the ?
 * from phoneNumber?: string, it would start erroring again.
 *
 * 🕵️‍♂️ Try this out! Make the phoneNumber property required
 * and see the error.
 *
 * interface User {
 *   phoneNumber: string;
 * }
 */

/**
 * 🛠 Let's also allow users to add a phone number in our
 * createUser function. Add the optional parameter
 * phoneNumber?: string to the end of the parameters list:
 *
 * const createUser = (
 *   name: string,
 *   age: number,
 *   role: Role,
 *   phoneNumber?: string
 * ): User => {
 *   return {
 *     // Other attributes!,
 *     phoneNumber,
 *   }
 * }
 *
 */

/**
 * 🛠 Change the createUser call above so that it now also
 * adds a phone number in the final parameter.
 */

/**
 * 💡 There you go - you can make function parameters
 * optional and make properties of objects optional just
 * with the ?: syntax.
 *
 * 🕵️‍♂️ Try adding some more optional properties to the User
 * object, and adding some more optional properties to the
 * createUser function! Some ideas:
 *
 * favouriteCheese?: 'cheddar' | 'gruyere' | 'stilton';
 * bestFriendName?: string;
 * catAge?: number;
 */
