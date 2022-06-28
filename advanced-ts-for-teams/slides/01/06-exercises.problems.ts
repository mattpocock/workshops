export {};

// ----------
// Exercise 1
// ----------

// TODO - improve this exercise (make it more relatable)

const wrapCreateTreeWalker = (
  // Type this correctly!
  node: unknown,
) => {
  // Fix this error!
  document.createTreeWalker(node);
};

// ----------
// Exercise 2
// ----------

const utils = {
  makeTheme: (theme: {
    colors: {
      red: string;
      green: string;
      blue: string;
    };
  }) => {},
};

// Without changing the utils config above,
// type the function below:
const makeTheme = (themeParam: Parameters<typeof utils["makeTheme"]>[0]) => {};

// This should error!
makeTheme({
  colors: {
    red: 123,
    green: 123,
    blue: 123,
  },
});

// This should pass!
makeTheme({
  colors: {
    red: "123",
    green: "123",
    blue: "123",
  },
});

// ----------
// Exercise 3
// ----------

const getRole = (hasAccess: boolean, isAdmin: boolean): Role => {
  if (!hasAccess) {
    return "anonymous";
  }

  if (isAdmin) {
    return "admin";
  }
  return "user";
};

type Role = "anonymous" | "admin" | "user";

// Can you refactor the code above so that
// there is only one source of truth for the
// type Role?

// Must not fail:
((_expect: "anonymous" | "admin" | "user") => {})(getRole(true, false));

// Must not fail:
const role: Role = "anonymous";
((_expect: "anonymous" | "admin" | "user") => {})(role);

// ----------
// Exercise 4
// ----------

const getConfig = async (isAdmin: boolean) => {
  return {
    shouldShowAdminFeatures: isAdmin,
    allowedActions: isAdmin
      ? ["delete-user", "view-user", "update-user", "create-new-user"]
      : ["view-user"],
  };
};

/**
 * Change the 'unknown' here to be the
 * return type of getConfig above.
 *
 * You are allowed to change getConfig to improve
 * its inference
 */
const config: unknown = {
  // This should error!
  allowedActions: ["view-post"],
  shouldShowAdminFeatures: true,
};
