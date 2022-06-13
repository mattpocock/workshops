/**
 * Prev: literals-vs-primitives.ts, get-array-member.ts
 */

namespace ObjectMemberOfArray {
  const config = [
    {
      name: "matt",
    },
  ];

  // TODO:
  type EditMe = any;

  type cases = [Expect<Equal<"matt", EditMe>>];
}

namespace ArrayMember {
  const config = ["matt"];

  // TODO:
  type EditMe = any;

  type cases = [Expect<Equal<"matt", EditMe>>];
}

namespace ArrayMemberToUnion {
  const config = ["matt", "david"];

  // TODO:
  type EditMe = any;

  type cases = [Expect<Equal<"matt" | "david", EditMe>>];
}

namespace ObjectArrayMemberToUnion {
  const config = [
    {
      name: "matt",
    },
    {
      name: "david",
    },
  ];

  // TODO:
  type EditMe = any;

  type cases = [Expect<Equal<"matt" | "david", EditMe>>];
}
