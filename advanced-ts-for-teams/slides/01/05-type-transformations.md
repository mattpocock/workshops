<!--  -->

# Type transformations

In the type world, you can transform pretty much _anything_ to any other thing.

<!--  -->

# Object values

```ts
const obj = {
  a: 1,
  b: 2,
} as const;

type ObjValue = typeof obj[keyof typeof obj];
```

<!--  -->

# Array member

```ts
const array = [1, 2] as const;

type ArrayMember = typeof array[number];
```

<!--  -->

# String to string

```ts
const fruits = [1, 2] as const;

type FruitPie = `${typeof fruits[number]} pie`;
```

<!--  -->

# Removing keys from an object (Omit)

```ts
const object = {
  a: 1,
  b: 2,
} as const;

type ObjectWithoutA = Omit<typeof object, "a">;
```

<!--  -->

# Only keeping some keys in an object (Pick)

```ts
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
} as const;

type ObjectWithOnlyBAndC = Pick<typeof object, "b" | "c">;
```

<!--  -->

# Getting the first parameter of a function

```ts
const func = (a: string) => {};

type FuncParameter = Parameters<typeof func>[0];
```

# Getting the return type of a function

```ts
const get123 = (): string => {
  return "123";
};

type FuncReturnType = ReturnType<typeof get123>;
```

# Getting the return type of an async function

```ts
const get123 = () => {
  return Promise.resolve("123");
};

type FuncReturnType = Awaited<ReturnType<typeof get123>>;
```

<!--  -->

- Literals
- Mapping types
- Get object value
- Get array member
- F.Narrow
