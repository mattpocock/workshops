<!--  -->

# TS inference exercise 2

TS also has extremely powerful control flow analysis which helps its inference.

How many type annotations can we remove?

```ts
const plusOneAndToString = (input: number | string): string => {
  let inputAsNumber: number;

  if (typeof input === "string") {
    inputAsNumber = Number(input as string);
  } else {
    inputAsNumber = input as number;
  }

  const result: number = inputAsNumber + 1;

  return String(result);
};
```

<!--  -->

# TS inference exercise 3

```ts
const expectString = (input: unknown): string => {
  if (typeof input !== "string") {
    throw new Error();
  }
  return input as string;
};
```
