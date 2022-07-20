type Brand<TValue, TBrand> = TValue & {
  __brand?: TBrand;
};

type ValidEmail = Brand<string, "ValidEmail">;

const isValidEmail = (email: string): email is ValidEmail => {
  return email.includes("@");
};

const createUser = async (user: { email: ValidEmail }) => {
  // Pseudocode, creates a user in the database
  return user;
};

const onSubmit = async (values: { email: string }) => {
  if (!isValidEmail(values.email)) {
    throw new Error("Email is invalid");
  }

  await createUser({
    email: values.email,
  });
};

export {};
