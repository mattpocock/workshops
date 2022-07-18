const userAccessModel = {
  user: ["update-self", "view"],
  admin: ["create", "update-self", "update-any", "delete", "view"],
  anonymous: ["view"],
} as const;

type Role = keyof typeof userAccessModel;
type Action = typeof userAccessModel[Role][number];

const canUserAccess = (role: Role, action: Action) => {
  return userAccessModel[role].includes(action as any);
};

export {};
