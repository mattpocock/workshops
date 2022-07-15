/**
 * 💡 We've looked at how to turn arrays into
 * literal types and extract their members.
 * Let's do the same with objects:
 */

const colors = {
  /** ^ 🚁
   * Note that because we're not using as const,
   * the string values of flamingo are all inferred
   * as string
   */
  flamingo: {
    "50": "#FDEDED",
    "100": "#FCDADA",
    "200": "#F9B5B5",
    "300": "#F58F8F",
    "400": "#F26A6A",
    "500": "#EF4444",
    "600": "#E71414",
    "700": "#B30F0F",
    "800": "#800B0B",
    "900": "#4C0707",
  },
};

/**
 * 🛠 Create a type, Color, which is the type of
 * the colors object above.
 *
 * type ColorsAsType = typeof colors;
 */

/**
 * 🛠 Create another type, Flamingo, which is the
 * 'flamingo' property of `ColorsAsType`:
 *
 * type Flamingo = ColorsAsType['flamingo'];
 */

/**
 * 💡 Note that `ColorsAsType.flamingo` would be
 * a syntax error. In the type world, you access
 * properties using Obj['property'] syntax only.
 */

/**
 * 🚁 Hover over Flamingo. Note that the keys of
 * the object are already being inferred - it's just
 * the values of the object that aren't.
 */

/**
 * 🛠 Create a new type, FlamingoKeys, which is
 * the `keyof` Flamingo:
 *
 * type FlamingoKeys = keyof Flamingo;
 */

/**
 * 🚁 Hover over FlamingoKeys. It should be a
 * union of all of flamingo's property keys:
 *
 * "50" | "100" | "200" | "300" | "400" | ...
 *
 * 🕵️‍♂️ Try creating your own objects, turning them
 * into types, and running keyof on them. You can
 * even chain typeof and keyof, as below:
 *
 * const myObject = { a: 1, b: 2 };
 *
 * type ObjKeys = keyof typeof myObject;
 * //   ^ 🚁
 */

/**
 * 💡 We can see that TypeScript's inference of
 * property keys is pretty good. But, property
 * values? Not so good. Let's firm it up with
 * 'as const'
 */

/**
 * 🛠 Add an 'as const' annotation to colors:
 *
 * const colors = { ... } as const;
 */

/**
 * 🚁 Hover over `colors` - you'll now see
 * that all properties of the object are
 * readonly.
 *
 * 💡 Since they now can't be mutated, TypeScript
 * is safe to infer them as their literal type.
 */

/**
 * 🛠 Create a type called Flamingo50, which
 * is the '50' attribute of the Flamingo type:
 *
 * type Flamingo50 = Flamingo['50'];
 */

/**
 * 🚁 Hover over Flamingo50. It should be inferred
 * as '#FDEDED'
 */

/**
 * 💡 Similar to the last exercise, we're able
 * to extract a single value from the Flamingo
 * object via a property access. But how do we
 * create a union of each of the property values?
 */

/**
 * 🛠 Create a new type called FlamingoColor,
 * declared as:
 *
 * type FlamingoColor = Flamingo[keyof Flamingo];
 */

/**
 * 🚁 Hover over FlamingoColor. It should be
 * a union of all of the values in the flamingo
 * object.
 *
 * 💡 Why does Flamingo[keyof Flamingo] work?
 *
 * When you access a property using a union type,
 * TypeScript returns a union type of all of those
 * property accesses.
 *
 * 🕵️‍♂️ Try changing FlamingoColor to Flamingo["100" | "200"].
 * It'll return a union of only those values.
 */

/**
 * Extra credit!
 *
 * 🕵️‍♂️ Try removing as const, and see how
 * FlamingoColor changes.
 *
 * 🕵️‍♂️ Try changing some of the values in the
 * colors object, and seeing if the union updates.
 *
 * 🕵️‍♂️ Try creating other objects, adding as const,
 * and using the Obj[keyof Obj] strategy to grab
 * their property values.
 */
