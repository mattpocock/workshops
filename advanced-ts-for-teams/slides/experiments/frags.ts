/**
 * 💡 The code below uses some tricks we're used to. We extract
 * Privilege from privileges, and use it to type a
 * getPrivilegesByName function.
 */

const privileges = {
  matt: ["sleeping", "eating", "planning"],
  waqas: ["sleeping", "eating", "coding"],
  default: ["sleeping", "eating"],
} as const;

type Privilege = typeof privileges[keyof typeof privileges][number];
//   ^ 🚁

/**
 * 💡 You should be able to pass any name into the function.
 * If you pass "matt", it should return only Matt's privileges.
 * Same for "waqas". Otherwise, it should pass the default
 * privileges.
 */
function getPrivilegesByName(name: string): readonly Privilege[] {
  if (name in privileges) {
    return (privileges as any)[name];
  }
  return privileges.default;
}

const mattPrivileges = getPrivilegesByName("matt").includes("coding");
/**
 * 💡 There's an issue, though. The above code should be erroring,
 * because Matt's privileges don't include "coding".
 */

/**
 * 🛠 We can get this to work by adding a function overload
 * to getPrivilegesByName, which uses a generic to figure out
 * which name the user has passed in.
 */
