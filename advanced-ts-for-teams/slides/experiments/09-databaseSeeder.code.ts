interface User {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  authorId: string;
}

interface DbShape {
  users: Record<string, User>;
  posts: Record<string, Post>;
}

export class DbSeeder<
  Db extends DbShape = {
    users: {};
    posts: {};
  },
> {
  public users: Db["users"] = {};
  public posts: Db["posts"] = {};

  addUser = <Id extends string>(
    id: Id,
    user: Omit<User, "id">,
  ): DbSeeder<Db & { users: Db["users"] & Record<Id, User> }> => {
    (this.users as DbShape["users"])[id] = {
      ...user,
      id: id,
    };
    return this;
  };

  addPost = <Id extends string>(
    id: Id,
    post: Omit<Post, "id">,
  ): DbSeeder<Db & { posts: Db["posts"] & Record<Id, Post> }> => {
    (this.posts as DbShape["posts"])[id] = {
      ...post,
      id,
    };
    return this;
  };

  /**
   * Saves all users to the database in a single
   * transaction
   */
  transact = async () => {
    // PSEUDOCODE: actually add users/posts to database

    return {
      users: this.users,
      posts: this.posts,
    };
  };
}

const usage = async () => {
  const result = await new DbSeeder()
    .addUser("matt", {
      name: "Matt",
    })
    .addPost("post1", {
      authorId: "matt",
      title: "Post 2",
    })
    .addPost("post2", {
      authorId: "matt",
      title: "Post",
    })
    .transact();

  result.posts.post2;
};
