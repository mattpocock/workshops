/**
 * 💡 Generics get EXTREMELY powerful with third-party libraries.
 * Let's bring in one of my favourite TypeScript libs, zod.
 *
 * https://github.com/colinhacks/zod
 *
 * Zod is a schema validation library that gives you a lot of
 * confidence when dealing with unknown inputs. It's also a mega-
 * powerful TS lib, with some extremely complex types.
 */

import { z } from "zod";

const User = z.object({
  id: z.string(),
});

/**
 * 💡 In the example above, we create a new zod 'schema' from an
 * z.object(), and give it an id attribute using z.string().
 *
 * This is similar to declaring an interface in TypeScript:
 *
 * interface User {
 *   id: string;
 * }
 *
 * Except that it can also be called at runtime to validate
 * variables, using User.parse().
 */

const somethingThatMightBeAUser = {};

const parsedUser = User.parse(somethingThatMightBeAUser);
/**   ^ 🚁
 *
 * User.parse will error if it's called with something that
 * doesn't match the schema. That means TypeScript can safely
 * consider this as an object matching that schema.
 *
 * 🕵️‍♂️ Try changing the User schema above to see how the
 * inference changes on parsedUser.
 */

/**
 * 💡 You can also create types directly from zod schemas
 * using z.infer.
 *
 * 🛠 Add a new type called UserType, which uses
 * z.infer<typeof User>;
 *
 * https://github.com/colinhacks/zod#basic-usage
 *
 * type UserType = z.infer<typeof User>;
 *
 * 💡 We need typeof here to transform the runtime 'User'
 * into the type world.
 */

/**
 * 🚁 Try hovering over UserType - it should be the same
 * shape as you declared in the User.
 */

/**
 * 💡 Zod can enable some pretty exciting API's when used
 * in combination with generics.
 */

const Users = z.array(User);

const fetchUsers = async () => {
  //  ^ 🚁
  const result = await fetch("/users").then((res) => res.json());

  return Users.parse(result);
};

const fetchPosts = async (userId: string) => {
  //  ^ 🚁
  const result = await fetch(`/user/${userId}/posts`).then((res) => res.json());

  return Posts.parse(result);
};

/**
 * 💡 Take a look at the code above. In both of the fetch functions,
 * we're doing two things:
 *
 * 1. Fetching data from an endpoint
 * 2. Validating the data with a zod schema
 *
 * 💡 This is a common pattern when working with third-party API's, since
 * you don't control the data you get back. Validating with zod
 * ensures that you fail _early_, and bad data doesn't mess up your
 * system.
 */

/**
 * 🚁 Hover over the two functions above. Because we're validating
 * with our zod schema's, we're getting type-safety on what gets
 * returned. Pretty cool!
 *
 * const fetchUsers: () => Promise<{
 *   id: string;
 * }[]>
 */

/**
 * 💡 But there's a lot of duplication here. Really, the only
 * thing that changes between the two functions is the endpoint
 * and the schema. Let's refactor this to a single function
 * while still keeping the type safety.
 */

/**
 * 🛠 Create a new function called fetchWithSchema, which takes
 * in two arguments: a zod schema and a url.
 *
 * For the zod schema, use the built in type z.ZodType.
 *
 * const fetchWithSchema = async (schema: z.ZodType, url: string) => {}
 *
 * 🛠 Inside the function, fetch the data from the url, then
 * parse the data:
 *
 * => {
 *   const result = await fetch(url).then((res) => res.json());
 *   return schema.parse(result);
 * }
 *
 * 🛠 Try calling the function with the posts schema:
 *
 * const posts = fetchWithSchema(Posts, "/posts");
 */

/**
 * 🚁 Hover over posts:
 *
 * const posts = fetchWithSchema(Posts, "/posts");
 *       ^ 🚁
 *
 * Annoyingly, it's still typed as Promise<any>. It's not inferring
 * the type that we want based on the 'Posts' variable we're passing
 * in.
 *
 * 💡 Time for a generic! Remember - when a function return type
 * isn't inferring what you want from the function's arguments,
 * it might be time for a generic.
 */

/**
 * 🛠 Change fetchWithSchema so that it takes in a generic slot
 * called TSchema, which we're going to constrain to z.ZodType.
 *
 * const fetchWithSchema = async <TSchema extends z.ZodType>(
 *
 * 🛠 Change the schema argument to be of type TSchema:
 *
 * schema: TSchema
 */

/**
 * 🚁 Hover over posts:
 *
 * const posts = fetchWithSchema(Posts, "/posts");
 *       ^ 🚁
 *
 * Hmmm, we're STILL not inferring the type that we want. We're
 * still getting Promise<any>.
 *
 * 💡 That's because TypeScript isn't quite smart enough to
 * infer the return type of fetchWithSchema. So let's add a
 * type annotation to help it out.
 */

/**
 * 🛠 Add a return type annotation to fetchWithSchema, which is
 * z.infer<TSchema>:
 *
 * const fetchWithSchema = async <TSchema extends z.ZodType>(
 *   schema: TSchema,
 *   url: string,
 * ): z.infer<TSchema> => {
 */

/**
 * ⛔️ Whoops! We're seeing an error:
 *
 * The return type of an async function or method must be the global
 * Promise<T> type. Did you mean to write 'Promise<TypeOf<TSchema>>'?
 *
 * We _did_ mean to use a Promise, because we're in an async function.
 *
 * 🛠 Wrap z.infer with Promise<> to make the error go away:
 *
 * ): Promise<z.infer<TSchema>> => {
 */

const Post = z.object({
  slug: z.string(),
  content: z.string(),
});

const Posts = z.array(Post);

const fetchWithSchema = async <TSchema extends z.ZodType>(
  schema: TSchema,
  url: string
): Promise<z.infer<TSchema>> => {
  const result = await fetch(url).then((res) => res.json());
  return schema.parse(result);
};

const posts = fetchWithSchema(Posts, "/posts");
//    ^?

/**
 * ✅ The error should have disappeared!
 *
 * 🚁 Hover over posts again:
 *
 * const posts = fetchWithSchema(Posts, "/posts");
 *       ^ 🚁
 *
 * Now we're inferring the type that we want. We're getting
 * Promise<{ slug: string; content: string }[]>
 *
 * 🕵️‍♂️ Try calling fetchWithSchema with the users schema:
 *
 * const users = fetchWithSchema(Users, "/users");
 *       ^ 🚁
 *
 * See what type users ends up as.
 *
 * 🕵️‍♂️ Try adding a brand new schema called Comments and
 * fetching it using fetchWithSchema.
 *
 * const Comments = z.array(z.object({ ... }));
 * const comments = fetchWithSchema(Comments, "/comments");
 */

/**
 * 💡 Generics can be combined with third-party API's to make
 * amazing things.
 */

export {};
