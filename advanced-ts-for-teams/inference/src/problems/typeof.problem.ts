export {};

/**
 * Prev: literals-vs-primitives.ts, get-array-member.ts
 */

// TODO: edit this so that the cases below don't error
const config1 = ["matt"];
type EditMe1 = any;

type cases1 = [Expect<Equal<"matt", EditMe1>>];

// -------------------------------------------------------

// TODO:
const config2 = ["matt", "david"];
type EditMe2 = any;

type cases2 = [Expect<Equal<"matt" | "david", EditMe2>>];

// -------------------------------------------------------

// TODO:
const config3 = [
  {
    name: "matt",
  },
  {
    name: "david",
  },
];
type EditMe3 = any;

type cases3 = [Expect<Equal<"matt" | "david", EditMe3>>];
