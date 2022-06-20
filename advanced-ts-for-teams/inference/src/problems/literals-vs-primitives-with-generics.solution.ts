/**
 * Prev: literals-vs-primitives.ts
 */

import { expect } from "./_utils";

const func = <T>(t: T) => t;

// TODO: Literal Number

const num = func(1);

expect<1>(num);

// TODO: Literal String

const str = func("matt");

expect<"matt">(str);

// TODO: Literal Boolean

const bool = func(true);

expect<true>(bool);

/**
 * Next: deep-narrowing-in-function-args.ts
 */
