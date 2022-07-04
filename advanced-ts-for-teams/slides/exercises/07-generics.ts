/**
 * 💡 While pulling things from the runtime world
 * to the type world is useful, it also requires
 * lines of code that you need to maintain.
 *
 * Take the following example:
 */

export const removeIdFromElement = (input: { id: string }) => {
  const { id, ...otherAttributes } = input;
  return otherAttributes;
};

const element = { id: "1", name: "Matt" };

type ElementWithoutId = Omit<typeof element, "id">;
/**  ^ 🚁
 *
 * Here, we declare a type that omits the id
 * attribute.
 */

const elementWithoutId = removeIdFromElement(element) as ElementWithoutId;
/**   ^ 🚁                ^ 🚁
 * Here, we cast the the result of removeIdFromElement
 * to ElementWithoutId.
 *
 * 🕵️‍♂️ Try changing the cast into a type annotation, and
 * note the error that appears:
 *
 * const elementWithoutId: ElementWithoutId = removeIdFromElement(element);
 */

const name = elementWithoutId.name;

/**
 * 🕵️‍♂️ Try removing the cast altogether, and seeing the
 * error that appears on the name above.
 *
 * const elementWithoutId = removeIdFromElement(element);
 */

/**
 * 💡 What would be ideal is if elementWithoutId could
 * be inferred without us needing to pull it into the
 * type world at all - i.e. by removing typeof.
 *
 * 💡 It's time to talk about generics. Generics allow
 * you to extract types at runtime _without_ using typeof.
 *
 * One of the most useful type of generics is the function
 * generic. The function below will return a type identical
 * to the one that is passed to its first argument
 */

const returnWhatIPassIn = <TInput>(input: TInput) => {
  //                       ⬆️ Input        ⬆️ Argument to infer
  return input;
  //     ^ 🚁 This is typed as TInput
};

const output = returnWhatIPassIn("a");
/**   ^ 🚁       ^ 🚁              ^ 🕵️‍♂️
 *
 * Hovering over each of these reveals some useful info.
 *
 * Hovering over output1 tells us that it is typed as "a" -
 * the literal type that we passed in.
 *
 * Hovering over returnWhatIPassIn shows us exactly what the
 * generic is being inferred to! In this case, <"a">.
 *
 * 🕵️‍♂️ Try changing "a" and hover over returnWhatIPassIn again
 * to see what has changed.
 */

/**
 * 💡 You can think of generics in terms of our type/runtime
 * worlds like this:
 *
 * If typeof goes "runtime -> type", generics goes "runtime
 * -> type -> runtime". Except it's only a type _in the scope
 * of that function_.
 */

/**
 * 💡 Let's look at our removeIdFromElement function, right at
 * the top of the file.
 *
 * What we want to do is:
 *
 * 1. Take in any object
 * 2. Remove its id
 * 3. Return that from the function
 *
 * We can think of this as runtime -> type -> runtime
 *
 * 1. Take in any object (runtime)
 * 2. Remove its id (type)
 * 3. Return that from the function (runtime)
 *
 * Currently, we're doing that with typeof and casting:
 *
 * 1. Declare element as an object (runtime)
 * 2. Declare a ElementWithoutId using typeof and Omit (type)
 * 3. Cast the result of removeIdFromElement (runtime)
 *
 * But let's do it with generics instead.
 */

/**
 * 🛠 Change removeIdFromElement so that it takes a TInput
 * generic:
 *
 * export const removeIdFromElement = <TInput>(input: TInput) => {
 *
 * 🛠 Add a return type annotation of Omit<TInput, 'id'>:
 *
 * export const removeIdFromElement = <TInput>(input: TInput): Omit<TInput, 'id'> => {
 */

/**
 * ⛔️ You should be seeing an error on 'id':
 *
 * Property 'id' does not exist on type 'unknown'.
 *
 * We'll get to it in a minute.
 */

/**
 * 🛠 Remove the cast on the result of removeIdFromElement:
 *
 * const elementWithoutId = removeIdFromElement(element);
 */

/**
 * 🚁 Hover over elementWithoutId. It should be typed as:
 *
 * Omit<{ id: string; name: string; }, "id">
 */

/**
 * 🚁 Hover over removeIdFromElement(). The generic should
 * be locked in as:
 *
 * { id: string; name: string; }
 *
 * const elementWithoutId = removeIdFromElement(element);
 *                          ^ 🚁
 */

/**
 * 💡 We did it! We pulled in our runtime -> type -> runtime
 * calculation _inside_ the function, meaning we can remove
 * our ElementWithoutId type declaration.
 *
 * 🕵️‍♂️ Try changing the values of 'element', then hovering over
 * elementWithoutId to see if they appear there. Try
 * adding age, or isAdmin:
 *
 * const element = { id: "1", name: "Matt", age: 12, isAdmin: true };
 */

/**
 * ⛔️ Let's go back to the error on 'id'. What's causing this?
 *
 * Property 'id' does not exist on type 'unknown'.
 *
 * When you're inside a generic function, the generic itself
 * is considered 'unknown'. That's because TypeScript doesn't
 * know what shape it should be.
 *
 * The error is showing because we haven't told TypeScript
 * that the input should contain an id.
 */

/**
 * 💡 We can give TypeScript this info by adding a 'constraint'
 * on the generic to ensure it always matches a certain type.
 * Conceptually, this is like adding a type annotation to
 * a function parameter.
 *
 * The syntax is a little different - we use 'extends'.
 *
 * 🛠 Replace the generic with `TInput extends { id: string }`:
 *
 * export const removeIdFromElement = <TInput extends { id: string }>(
 *   input: TInput,
 * ): Omit<TInput, "id"> => {
 */

/**
 * ✅ The error should have disappeared! That's because TS now
 * knows that you'll always pass in an object that should
 * contain an id.
 *
 * 🚁 Hover over id inside the function - it'll now be typed
 * as string:
 *
 * const { id, ...otherAttributes } = input;
 *         ^ 🚁
 */

/**
 * 🕵️‍♂️ Try calling removeIdFromElement again, but with some
 * illegal values:
 *
 * removeIdFromElement(1);
 * removeIdFromElement('some-string');
 * removeIdFromElement(true);
 * removeIdFromElement({});
 *
 * Note the errors that appear.
 *
 * 🕵️‍♂️ Try calling removeIdFromElement with some objects
 * to check that all the inference still works:
 *
 * removeIdFromElement({ id: '123', name: 'Matt' });
 * removeIdFromElement({ id: '1', age: 21 });
 * removeIdFromElement({ id: 'a', tags: ['a', 'b'] });
 */

/**
 * 💡 There we go - generics allow us to cut down even
 * more on the amount of type annotations we need to add.
 *
 * They allow us to transform runtime code within the
 * scope of a single function, or sometimes in classes too.
 */
