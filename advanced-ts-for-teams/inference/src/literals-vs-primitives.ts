import { expect } from "./_utils";

// TODO: Literal Number

let num = undefined;

expect<1>(num);
expect<number>(num);

// TODO: Literal String

let str = undefined;

expect<"matt">(str);
expect<string>(str);

// TODO: Literal Boolean

let bool = undefined;

expect<true>(bool);
expect<boolean>(bool);

// TODO: Array member

let arr = undefined;

expect<"matt">(arr[0]);
expect<string>(arr[0]);

// TODO: Object property

let obj = undefined;

expect<"matt">(obj.name);
expect<string>(obj.name);

// TODO: Array inside object

let arrOfObjects = undefined;

expect<"matt">(arrOfObjects[0].name);
expect<string>(arrOfObjects[0].name);
