type Role = "user" | "admin" | "super-admin";

export interface User {
  id: string;
  name: string;
  age: number;
  role: Role;
  phoneNumber?: string;
}

interface UsersDb {
  [id: string]: User;
}

const usersDb: UsersDb = {};

const createUser = (
  name: string,
  age: number,
  role: Role,
  phoneNumber?: string,
): User => {
  const newUser = {
    id: "1",
    age: age,
    name: name,
    role: role,
    phoneNumber: phoneNumber,
  };

  usersDb[newUser.id] = newUser;

  return newUser;
};

const deleteUser = (id: string): void => {
  delete usersDb[id];
};

const getOneUser = (id: string): User | undefined => {
  return usersDb[id];
};

const updateUser = (
  id: string,
  name: string,
  age: number,
  role: Role,
  phoneNumber?: string,
): User | undefined => {
  if (!usersDb[id]) {
    return undefined;
  }

  usersDb[id] = {
    id,
    name,
    age,
    role,
    phoneNumber,
  };

  return usersDb[id];
};
