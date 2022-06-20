import { expect } from "./_utils";

// TODO: Literal Number

let num = 1;

expect<1>(num);

// TODO: Literal String

let str = "matt";

expect<"matt">(str);

// TODO: Array member

const arr = ["matt"];

expect<"matt">(arr[0]);

// TODO: Object property

const obj = {
  name: "matt",
};

expect<"matt">(obj.name);

// TODO: Array inside object

let arrOfObjects = undefined;

expect<"matt">(arrOfObjects[0].name);
