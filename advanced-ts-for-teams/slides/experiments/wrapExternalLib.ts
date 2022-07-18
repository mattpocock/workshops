const fetchUser = (id: string) => {
  return Promise.resolve({
    id,
    firstName: "Matt",
    lastName: "Pocock",
    age: 30,
  });
};

const fetchUserWithFullName = async (
  ...args: Parameters<typeof fetchUser>
): Promise<Awaited<ReturnType<typeof fetchUser>> & { fullName: string }> => {
  const user = await fetchUser(...args);
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

export {};
