// Lives in the backend
const api = {
  getUser: async (id: number) => {
    return {
      data: {
        id,
        name: "John",
      },
    };
  },
  getPosts: async (userId: number) => {
    return {
      data: [
        {
          id: 1,
          title: "Post 1",
          body: "This is the first post",
          userId,
        },
        {
          id: 2,
          title: "Post 2",
          body: "This is the second post",
          userId,
        },
      ],
    };
  },
};

type Api = typeof api;

// Frontend

const client = {
  request: async <TRoute extends keyof Api>(
    route: TRoute,
    ...args: Parameters<Api[TRoute]>
  ): Promise<ReturnType<Api[TRoute]>> => {
    return fetch(`/api/${route}`, {
      method: "POST",
      body: JSON.stringify(args),
    }).then((res) => res.json());
  },
};

export {};
