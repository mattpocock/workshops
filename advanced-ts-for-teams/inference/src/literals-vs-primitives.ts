import { expect } from "./_utils";

// TODO: Literal Number

let num = undefined;

expect<1>(num);

// TODO: Literal String

let str = undefined;

expect<"matt">(str);

// TODO: Literal Boolean

let bool = undefined;

expect<true>(bool);

// TODO: Array member

let arr = undefined;

expect<"matt">(arr[0]);

// TODO: Object property

let obj = undefined;

expect<"matt">(obj.name);

// TODO: Array inside object

let arrOfObjects = undefined;

expect<"matt">(arrOfObjects[0].name);
