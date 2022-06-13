import { expect } from "./_utils";

// TODO: Literal Number

const num = 1;

expect<1>(num);

// TODO: Literal String

const str = "matt";

expect<"matt">(str);

// TODO: Literal Boolean

const bool = true;

expect<true>(bool);

// TODO: Array member

const arr = ["matt"] as const;

expect<"matt">(arr[0]);

// TODO: Object property

const obj = {
  name: "matt",
} as const;

expect<"matt">(obj.name);

// TODO: Array inside object

let arrOfObjects = undefined;

expect<"matt">(arrOfObjects[0].name);
