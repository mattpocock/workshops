/**
 * Prev: literals-vs-primitives-with-generics.ts
 */
import { expect } from "./_utils";
import { F } from "ts-toolbelt";

/**
 * TODO: Change this function so that all cases
 * are covered
 */
const func = <T>(t: F.Narrow<T>) => t;

const obj = func({
  name: "matt",
});
expect<"matt">(obj.name);

const arrMember = func(["matt"]);
expect<"matt">(arrMember[0]);

let arrOfObjects = func([
  {
    name: "matt",
  },
]);
expect<"matt">(arrOfObjects[0].name);
