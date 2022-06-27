export {};

// ----------
// Exercise 1
// ----------

// How many type annotations can you remove?
const plusOneAndToString = (input: number | string) => {
  let inputAsNumber;

  if (typeof input === "string") {
    inputAsNumber = Number(input);
  } else {
    inputAsNumber = input;
  }

  const result = inputAsNumber + 1;

  return String(result);
};

// ----------
// Exercise 2
// ----------

// How many type annotations can you remove?
const expectStringOrNumber = (input: unknown) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input === "number") {
    return input;
  }
  throw new Error("Invalid type!");
};
