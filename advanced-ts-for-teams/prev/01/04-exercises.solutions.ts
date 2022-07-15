export {};

// Exercises on transforming configs to types

// ----------
// Exercise 1
// ----------

const CITY_1 = "Copenhagen";
const CITY_2 = "San Diego";

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

const getButtonClassnames = (variant: keyof typeof buttonClassnames) => {
  // Fix this error!
  return buttonClassnames[variant];
};

// This should error!
getButtonClassnames("tertiary");

// ----------
// Exercise 3
// ----------

const MATT = "Matt";
const JESS = "Jess";
const MATEUSZ = "Mateusz";

const names = [MATT, JESS, MATEUSZ] as const;

const assertIsValidName = (name: typeof names[number]) => {
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

const goToRoute = (route: typeof routesWithPathSegments[number][0]) => {};

// Should not error (and have autocomplete)
goToRoute("/");

// Should error
goToRoute("/user");

// Should error
goToRoute("/post");
