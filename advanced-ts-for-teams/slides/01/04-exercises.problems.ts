export {};

// Exercises on transforming configs to types

// ----------
// Exercise 1
// ----------

let CITY_1 = "Copenhagen";
let CITY_2 = "San Diego";

const planRoute = (city1: typeof CITY_1, city2: typeof CITY_2) => {};

// Should pass, and have autocomplete
planRoute("Copenhagen", "San Diego");

// Should fail
planRoute("San Diego", "Copenhagen");

// Should fail
planRoute("Brussels", "London");

// ----------
// Exercise 2
// ----------

const buttonClassnames = {
  primary: "bg-blue-500",
  secondary: "bg-green-500",
};

const getButtonClassnames = (variant: string) => {
  // Fix this error!
  return buttonClassnames[variant];
};

// This should error!
getButtonClassnames("tertiary");

// ----------
// Exercise 3
// ----------

let MATT = "Matt";
let JESS = "Jess";
let MATEUSZ = "Mateusz";

const names = [MATT, JESS, MATEUSZ];

const assertIsValidName = (name: string) => {
  if (!names.includes(name)) {
    throw new Error("Name is not valid!");
  }
};

// Should not error
assertIsValidName("Matt");

// Should error
assertIsValidName("Colin");

// ----------
// Exercise 4
// ----------

const routesWithPathSegments = [
  ["/", []],
  ["/user/:id", ["id"]],
  ["/post/:slug", ["slug"]],
];

const goToRoute = (route: string) => {};

// Should not error (and have autocomplete)
goToRoute("/");

// Should error
goToRoute("/user");

// Should error
goToRoute("/post");
