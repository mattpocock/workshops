<!--  -->

# Type transformations

In the type world, you can transform pretty much _anything_ to any other thing.

<!--  -->

# Array member

```ts
const array = [1, 2] as const;

type ArrayMember = typeof array[number];
```

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
