export {};

/**
 * Prev: literals-vs-primitives.ts, get-array-member.ts
 */

// TODO: edit this so that the cases below don't error
const config1 = ["matt"] as const;
type EditMe1 = typeof config1[number];

type cases1 = [Expect<Equal<"matt", EditMe1>>];

// -------------------------------------------------------

// TODO:
const config2 = ["matt", "david"] as const;
type EditMe2 = typeof config2[number];

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
] as const;
type EditMe3 = typeof config3[number]["name"];

type cases3 = [Expect<Equal<"matt" | "david", EditMe3>>];
