const getUser = async (id: number) => {
  return {
    data: {
      id,
      name: "John",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
    },
  };
};

const getPost = async (id: number) => {
  return {
    data: {
      id,
      title: "Hello",
      body: "World",
    },
  };
};

type GetDataShape<T> = T extends (...args: any[]) => Promise<{ data: infer U }>
  ? U
  : never;

type Post = GetDataShape<typeof getPost>;
type User = GetDataShape<typeof getUser>;
