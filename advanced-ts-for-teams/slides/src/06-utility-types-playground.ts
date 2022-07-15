/**
 * 💡 TypeScript has a BUNCH of other utility types.
 * I don't want to teach these by rote - there's a
 * fabulous docs page where you can learn all about them:
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 *
 * But let's see if you can work out what they do
 * WITHOUT looking at the docs, just by your hovering
 * and deduction skills:
 */

/**
 * 🛠 Write a comment describing:
 *
 * What is Omit doing?
 *
 * ...
 */

interface ObjectWithA {
  a: number;
  b: number;
}

type ObjectWithoutA = Omit<ObjectWithA, "a">;
//   ^ 🚁                                ^ 🕵️‍♂️

/**
 * 🛠 Write a comment describing:
 *
 * What is Pick doing?
 *
 * ...
 */

interface Obj {
  a: number;
  b: number;
  c: number;
}

type ObjWithBAndC = Pick<Obj, "b" | "c">;
//   ^ 🚁                      ^ 🕵️‍♂️

/**
 * 🛠 Write a comment describing:
 *
 * What is Partial doing?
 *
 * ...
 */

interface Obj {
  a: number;
  b: number;
  c: number;
}

type PartialObj = Partial<Obj>;
//   ^ 🚁

/**
 * 🛠 Write a comment describing:
 *
 * What is Record doing?
 *
 * ...
 */

type AAndBRecord = Record<"a" | "b", number>;
//   ^ 🚁                 ^ 🕵️‍♂️

/**
 * 🛠 Write a comment describing:
 *
 * What is Extract doing?
 *
 * ...
 */

type EventUnion =
  | {
      type: "click";
      mouseButton: number;
    }
  | {
      type: "change";
      value: string;
    };

type ClickEvent = Extract<EventUnion, { type: "click" }>;
//   ^ 🚁                                      ^ 🕵️‍♂️
