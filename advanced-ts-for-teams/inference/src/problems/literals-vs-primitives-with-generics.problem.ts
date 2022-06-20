/**
 * Prev: literals-vs-primitives.ts
 */

import { expect } from "./_utils";

const func = <T>(t: T) => t;

// TODO: Literal Number

const num = func(undefined);

expect<1>(num);

// TODO: Literal String

const str = func(undefined);

expect<"matt">(str);

// TODO: Literal Boolean

const bool = func(undefined);

expect<true>(bool);

/**
 * Next: deep-narrowing-in-function-args.ts
 */
