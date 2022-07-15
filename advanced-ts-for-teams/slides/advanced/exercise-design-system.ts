/**
 * 💡 Let's imagine we're creating a library where you can
 * build your own design system. It's going to allow users
 * to specify variants and return a different class
 * based on those variants.
 *
 * 🛠 Create a function called
 */

const makeKeyRemover =
  <TKey extends string = "id">(keys: TKey[] = ["id"] as [TKey]) =>
  <TObj>(obj: TObj): Omit<TObj, TKey> => {
    return {} as any;
  };

const idRemover = makeKeyRemover();

const obj = {
  id: "123",
  name: "Matt",
};

const newObject = idRemover(obj);

const makeRoutePrefixer =
  <TFirst extends `/${string}`>(a: TFirst) =>
  <TSecond extends `/${string}`>(b: TSecond): `${TFirst}${TSecond}` =>
    `${a}${b}`;

const usersPrefixer = makeRoutePrefixer("/users");

const route = "/view";

const usersRoute = usersPrefixer(route);

// Functions can return functions
// Understand behaviour of generics in curried functions
// extends
// keyof
// Basic generic syntax
const createComponent =
  <TComponent extends Record<string, string>>(component: TComponent) =>
  <TVariant extends keyof TComponent>(variant: TVariant) => {
    return component[variant];
  };

const getClasses = createComponent({
  primary: "bg-blue-300",
  secondary: "bg-green-300",
});

const classes = getClasses("primary");
