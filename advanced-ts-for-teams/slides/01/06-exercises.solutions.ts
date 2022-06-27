export {};

// ----------
// Exercise 1
// ----------

const wrapCreateTreeWalker = (
  node: Parameters<typeof document.createTreeWalker>[0],
) => {
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

const getRole = (hasAccess: boolean, isAdmin: boolean) => {
  if (!hasAccess) {
    return "anonymous";
  }

  if (isAdmin) {
    return "admin";
  }
  return "user";
};

type Role = ReturnType<typeof getRole>;

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
      ? ([
          "delete-user",
          "view-user",
          "update-user",
          "create-new-user",
        ] as const)
      : (["view-user"] as const),
  };
};

/**
 * Change the 'unknown' here to be the
 * return type of getConfig above.
 *
 * You are allowed to change getConfig to improve
 * its inference
 */
const config: Awaited<ReturnType<typeof getConfig>> = {
  // This should error!
  allowedActions: ["view-post"],
  shouldShowAdminFeatures: true,
};
