/**
 * 💡 Let's ramp things up a bit by combining the
 * things we've learned so far.
 */

const userRoles = {
  admin: ["create", "update", "delete", "view"],
  user: ["update", "view"],
  anonymous: ["view"],
} as const;

type UserRoles = typeof userRoles;

const canRolePerformAction = <TRole extends keyof UserRoles>(
  role: TRole,
  action: UserRoles[TRole][number],
): boolean => {
  const arrOfMembers = userRoles[role];

  return arrOfMembers.includes(action as any);
};

// Usage
canRolePerformAction("user", "update");
canRolePerformAction("anonymous", "view");
