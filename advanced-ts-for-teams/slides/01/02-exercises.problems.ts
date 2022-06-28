export {};

// ----------
// Exercise 1
// ----------

// 🛠 How many type annotations can you remove?
const plusOneAndToString = (input: number | string): string => {
  //  ^ 🚁

  let inputAsNumber: number;
  //  ^ 🚁

  if (typeof input === "string") {
    inputAsNumber = Number(input as string);
    //                     ^ 🚁
  } else {
    inputAsNumber = input as number;
    //              ^ 🚁
  }

  const result = (inputAsNumber as number) + 1;
  //              ^ 🚁

  return String(result);
};

// ----------
// Exercise 2
// ----------

// 🛠 How many type annotations can you remove?
const expectStringOrNumber = (input: unknown): string | number => {
  //  ^ 🚁

  if (typeof input === "string") {
    return input as string;
    //     ^ 🚁
  }
  if (typeof input === "number") {
    return input as number;
    //     ^ 🚁
  }
  throw new Error("Invalid type!");
};
