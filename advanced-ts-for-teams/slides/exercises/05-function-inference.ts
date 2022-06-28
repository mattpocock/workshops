/**
 * 💡 We've seen how you can infer from primitives,
 * objects, and arrays - but how about functions?
 */

const myFunc = async (user: { id: string }) => {
  return {
    name: "Matt Pocock",
  };
};

type User = Parameters<typeof myFunc>[0];
//   ^ 🚁

type MyFuncReturn = Awaited<ReturnType<typeof myFunc>>;
//   ^ 🚁

/**
 * 💡 The code above might look scary! In this
 * exercise, we'll break it down.
 */

/**
 * 💡 TypeScript ships with some built-in Utility
 * Types:
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 *
 * These types use some syntax that we haven't used
 * yet, so let's learn that first.
 */

/**
 * 🛠 Write a type helper called ToString that takes
 * in a type called TInput and returns a string:
 *
 * type ToString<TInput> = string;
 *
 * 💡 This is called a generic type!
 */

/**
 * 🚁 Hover over TInput. It'll tell you it's a
 * 'type parameter'.
 */

/**
 * 🛠 Create a new type called ToStringResult, where
 * you 'call' ToString with a number.
 *
 * type ToStringResult = ToString<number>;
 */

/**
 * 🚁 Hover over ToStringResult - it'll be inferred
 * as a string, because that's what we're returning
 * from our ToString type helper we created.
 *
 * 🕵️‍♂️ Try changing what we're returning in ToString
 * to a boolean, and see what happens to ToStringResult.
 *
 * type ToString<TInput> = boolean;
 *
 * 🕵️‍♂️ Try changing what we're returning in ToString
 * to TInput, and see what happens to ToStringResult.
 *
 * type ToString<TInput> = TInput;
 *
 */

/**
 * 💡 Our ToString type helper above is exactly like
 * a function. It takes in some inputs and returns
 * some outputs.
 *
 * When it's declared, it looks like this:
 */

//              ⬇️ input     ⬇️ input      ⬇️ output
type NameObject<TFirstName, TLastName> = {
  firstName: TFirstName;
  lastName: TLastName;
};

/**
 * 💡 And when it's 'called', it looks like this:
 */

//   ⬇️ output            ⬇️ input    ⬇️ input
type MyName = NameObject<"Matthew", "Pocock">;
/**  ^ 🚁
 *
 * 💡 This NameObject helper returns an object with a
 * firstName and lastName attribute, which we pass in.
 *
 * 🕵️‍♂️ Try changing the values of 'Matthew' and 'Pocock'
 * and seeing how the value of MyName changes
 *
 * 🕵️‍♂️ Try removing 'Pocock' from MyName - you should
 * see an error saying "Generic type 'NameObject'
 * requires 2 type argument(s)."
 *
 * type MyName = NameObject<"Matthew">;
 *
 * 🕵️‍♂️ Try adding a TMiddleName to the list of type
 * arguments, and seeing what errors pop up.
 *
 * 💡 You can call your type arguments anything you like -
 * but adding T to the start of them is a useful convention.
 */

/**
 * 💡 Now we know how type helpers work, we can use
 * some of the built-in ones to get the return types
 * of our functions
 */

const createUserSync = (name: string) => {
  return {
    name,
  };
};

/**
 * 🛠 Create a type called CreateUserReturn, using
 * the built-in ReturnType and typeof:
 *
 * type CreateUserReturn = ReturnType<typeof createUserSync>;
 *
 * 💡 You don't have to import ReturnType from anywhere,
 * it's built-in.
 */

/**
 * 🚁 Hover over CreateUserReturn - it should be
 * an object with a name: string property.
 *
 * 🕵️‍♂️ Try adding some properties to the { name } object
 * to see if they get added to the CreateUserReturn
 */

/**
 * 🛠 Create a type called CreateUserParams, using
 * the built-in Parameters and typeof:
 *
 * type CreateUserParams = Parameters<typeof createUserSync>;
 */

/**
 * 🚁 Hover over CreateUserParams - it's a tuple,
 * with each of the arguments of the function in the
 * array.
 *
 * 🕵️‍♂️ Try adding arguments of the function to see
 * if they show up in the CreateUserParams.
 */

/**
 * 🛠 Create a new type - CreateUserParamsFirstArg, which
 * grabs the first element of the CreateUserParams tuple.
 *
 * type CreateUserParamsFirstArg = CreateUserParams[0];
 */

/**
 * 🚁 Hover over CreateUserParamsFirstArg - it should have
 * the same type as the first argument to createUserSync.
 */

/**
 * 💡 You can use ReturnType<T> and Parameters<T> to extract
 * information from functions dynamically. This is critical
 * for bringing inference from the runtime world to the
 * type world.
 *
 * There's one more wrinkle - what about async functions?
 */

const createUserAsync = async (name: string) => {
  return {
    name,
  };
};

type CreateUserAsyncResult = ReturnType<typeof createUserAsync>;
/**  ^ 🚁
 *
 * Hover over CreateUserAsyncResult - it's not quite what
 * you'd expect. Instead of:
 *
 * { name: string }
 *
 * It's being inferred as:
 *
 * Promise<{ name: string }>
 *
 * 🕵️‍♂️ Try removing 'async' from the function to
 * see what happens to CreateUserAsyncResult.
 *
 * 🕵️‍♂️ Try adding elements to the returned object to
 * see what happens to CreateUserAsyncResult.
 */

/**
 * 💡 We want to extract the result of the promise.
 * For that, we can use the built in Awaited<T>.
 *
 * 🛠 Change CreateUserAsyncResult so that it's
 * wrapped inside an Awaited<...>
 *
 * type CreateUserAsyncResult = Awaited<ReturnType<typeof createUserAsync>>;
 */

/**
 * 💡 Awaited behaves exactly like 'await' - it
 * resolves the result of a promise.
 */

type Result1 = Awaited<Promise<string>>;
/**  ^ 🚁
 *
 * 🕵️‍♂️ BEFORE YOU HOVER, see if you can figure out
 * what the result will be from the syntax on the
 * right.
 */

type Result2 = Awaited<boolean>;
/**  ^ 🚁
 *
 * 🕵️‍♂️ Same as above, see if you can figure it out
 * before you hover.
 */
