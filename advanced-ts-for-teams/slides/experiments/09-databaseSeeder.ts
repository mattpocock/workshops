/**
 * 🧑‍💻 Here, we've got a piece of code which helps us seed
 * our database before tests, and use that seeded data
 * in a type-safe way.
 */

/**
 * 🧑‍💻 We've got a couple of simple interfaces, User and Post,
 * which represent things in our database.
 */
interface User {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  authorId: string;
}

/**
 * 🧑‍💻 This DbShape appears to represent a pair of maps in the
 * database. Both users and posts are represented by an object
 * that has strings for keys and Users/Posts for values.
 */
interface DbShape {
  users: Record<string, User>;
  posts: Record<string, Post>;
}

/**
 * 💡 This shape is then used to constrain the generic passed
 * to the DbSeeder class... Interesting.
 */
export class DbSeeder<
  Db extends DbShape = {
    users: {};
    posts: {};
  },
> {
  /**
   * 💡 Inside the class, the users references Db['users']...
   */
  public users: Db["users"] = {};
  public posts: Db["posts"] = {};

  /**
   * 💡 And there are a couple of functions, addUser and addPost,
   * which take in a generic Id and return an altered DbSeeder class...
   */
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
   * 💡 Finally, there's a transact function, stubbed out here,
   * which actually saves the entities to the database and returns
   * the users and posts.
   */

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

/**
 * 💡 Good, there's a usage example.
 */
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
  /** ^ 🚁
   *
   * 🚁 The result here is typed with _exactly_ the ids
   * that were passed in above. That means you can access
   * users.matt, users.post1 and users.post2.
   *
   * 🕵️‍♂️ Try adding extra addUser calls to the chain, and
   * extra addPost calls to the chain. See what new things
   * you can access on result.
   *
   * 🕵️‍♂️ Try removing the transact() call at the end of the
   * chain. See what errors occur.
   */
};

/**
 * 💡 This example represents one of THE most powerful patterns
 * in TypeScript - the builder pattern.
 *
 * The builder pattern uses a chain of function calls to slowly
 * build up a larger data structure. In our case, this is:
 *
 * new DbSeeder().addUser().addPost().addPost().transact();
 *     ^ 🚁        ^ 🚁       ^ 🚁      ^ 🚁      ^ 🚁
 *
 * 🚁 Hovering over each element here gives you a lot of
 * information, but you should see a pattern.
 *
 * Hovering DbSeeder returns:
 *
 * DbSeeder<{
 *   users: {};
 *   posts: {};
 * }>
 *
 * The first addUser returns the initial database plus:
 *
 * {
 *   users: Record<"matt", User>;
 * }
 *
 * Then each .addPost() adds more information to the db.
 *
 * 🚁 You'll also notice that each function call has a
 * generic slot locked in that matches the id of the entity
 * we're passing in.
 *
 * Hovering the first addUser, you'll see:
 *
 * <"matt">(id: "matt", user: Omit<User, "id">)
 *
 * This indicates that the id is locked in as "matt" in
 * that function call.
 */

/**
 * 🛠 We're going to build this up again from scratch. To
 * get started, comment out DbSeeder AND usage above, and
 * uncomment DbSeeder and usage below:
 */

/**
 * 💡 Note that DbSeeder is no longer generic. Neither
 * are addUser and addPost.
 */
// export class DbSeeder {
//   public users: DbShape["users"] = {};
//   public posts: DbShape["posts"] = {};

//   addUser = (id: string, user: Omit<User, "id">) => {
//     this.users[id] = {
//       ...user,
//       id: id,
//     };
//     return this;
//   };

//   addPost = (id: string, post: Omit<Post, "id">) => {
//     this.posts[id] = {
//       ...post,
//       id,
//     };
//     return this;
//   };

//   transact = async () => {
//     return {
//       users: this.users,
//       posts: this.posts,
//     };
//   };
// }

// const usage = async () => {
//   const result = await new DbSeeder()
//     .addUser("matt", {
//       name: "Matt",
//     })
//     .addPost("post1", {
//       authorId: "matt",
//       title: "Post 2",
//     })
//     .addPost("post2", {
//       authorId: "matt",
//       title: "Post",
//     })
//     .transact();

//   result.posts.post2;
//   /**          ^ 🚁
//    *
//    * 🚁 With this simplified version, we're losing
//    * some of the cool inference we had before. This
//    * .post2 is now typed as Post | undefined, and we
//    * don't get autocomplete for the options we've added.
//    */
// };

/**
 * 💡 So, where do we start? With any builder pattern,
 * the first step is to give the thing you're building
 * a generic slot.
 */
