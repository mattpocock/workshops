# Runtime world vs Type world

**Runtime world** - the code that will actually run
**Type world** - the code that'll get stripped out at runtime

```ts
// Runtime world
const names = ["Matt", "David"];

// Type world
type Name = "Matt" | "David";
```

<!--  -->

# Type -> Runtime

Going from type -> runtime is most common.

Declare the type, then annotate the usage.

```ts
interface User {
  id: string;
  name: string;
}

const exampleUser: User = {
  id: "123",
  name: "Matt",
};
```

<!--  -->

# Runtime -> Type

But going from runtime -> type is where TS gets really powerful.

TS is turning your runtime code into types _all the time_ - using **type inference**.

```ts
// Hover over me!
const exampleUser = {
  id: "123",
  name: "Matt",
};
```

<!--  -->

# TS inference exercise

How many type annotations can we remove from the code below? Answer in chat.

```ts
const plusOneAndToString = (input: number): string => {
  const inputPlusOne: number = input + (1 as number);
  const result: string = String(inputPlusOne);

  return result as string;
};
```
