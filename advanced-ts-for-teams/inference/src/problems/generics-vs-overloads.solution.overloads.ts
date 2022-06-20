import { expect } from "./_utils";

/**
 * You can make this work with function overloads
 * OR generics - try it out!
 */
function myFunc(input: string): string;
function myFunc(input: number): number;
function myFunc(input: boolean): boolean;
function myFunc(input: unknown) {
  return input;
}

expect<string>(myFunc("matt"));
expect<number>(myFunc(123));
expect<boolean>(myFunc(true));
