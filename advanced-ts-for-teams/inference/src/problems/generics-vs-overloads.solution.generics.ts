import { expect } from "./_utils";

/**
 * You can make this work with function overloads
 * OR generics - try it out!
 */
function myFunc<T>(input: T): T {
  return input;
}

expect<string>(myFunc("matt"));
expect<number>(myFunc(123));
expect<boolean>(myFunc(true));
