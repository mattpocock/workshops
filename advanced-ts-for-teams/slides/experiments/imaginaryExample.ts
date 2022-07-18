/**
 * HELP ME - IN CHAT, write down actual real-life
 * examples that could help me show off this code
 */

const fish = ["scampi", "pike", "carp", "trout", "salmon"] as const;

type NiceFish = typeof fish[0 | 3 | 4];

const map = {
  getUser: "/api/users/:id",
  getPosts: "/api/posts/:userId",
  getComments: "/api/comments/:postId",
  getAdminUsers: "/api/admin/users",
} as const;

type NonAdminRoutes = typeof map["getUser" | "getPosts" | "getComments"];
