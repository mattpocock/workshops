<!--  -->

# Bringing functions into the type world

We've seen that you can bring objects/primitives into the type world via `typeof`.

But what about functions?

How do we infer the return type of this function?

```ts
const func = () => {
  return "123";
};

//                How do we infer this?
type FuncReturn = unknown;
```

<!--  -->

# This is where TS gets scary

```ts
const func = async () => {
  return "123";
};

type FuncReturn = Awaited<ReturnType<typeof func>>;
```

<!--  -->

# Utility types

TypeScript ships with a bunch of utility types built-in.

```ts
const func = () => {
  return "123";
};

type FuncReturn = ReturnType<typeof func>;
```

Let's break down the syntax.

<!--  -->

# Utility types syntax

Utility types are functions which take a type as an input and return a new type.

Declaration:

```ts
//             Input     Output
type MyUtility<TInput> = string;

//                  Input   Input        Input               Output
type MyOtherUtility<TInput, TOtherInput, TLastOneIPromise> = string;
```

Call:

```ts
//   Output                Input
type MyNewType = MyUtility<number>;

//   Output                     Input   Input   Input
type MyNewType = MyOtherUtility<number, string, boolean>;
```

<!--  -->

# ReturnType

```ts
const func = () => {
  return "123";
};

type FuncReturn = ReturnType<typeof func>;
```

<!--  -->

# Async/Await Functions

```ts
const func = async () => {
  return "123";
};

type FuncReturn = Awaited<ReturnType<typeof func>>;
```

<!--  -->

# Parameters

```ts
const func = (a: number, b: string) => {};

type Params = Parameters<typeof func>;
type A = Params[0];
type B = Params[1];
```
