<!--  -->

# Type -> Type

Type -> type transformations can also DRY up your code:

```ts
const routes = {
  // ...
};

type Route = keyof typeof routes;

// '/admin/' | '/admin/user/create' | '/admin/user'
type AdminRoute = `/admin${Route}`;
```

<!--  -->

# Type vs runtime syntax (part 1)

The two worlds have some syntax differences. For instance, property access:

```ts
const obj = {
  a: 1,
};

// Runtime world property access
const a = obj.a;

type Obj = {
  a: number;
};

// Type world property access
type A = Obj["a"];
```

<!--  -->

# Type vs runtime syntax (part 3)

TS has an annoying habit of reusing JS keywords in the type world. For instance, `typeof` means something different in the type world than the runtime world:

```ts
// Runtime world - returns 'number'
const isNumber = typeof 123 === "number";

const myNumber = 123;

// Type world - grabs the type of whatever you pass it
type OneTwoThree = typeof myNumber;
```

<!--  -->

# Derive, don't declare

- Maintain a single source of truth
- Derive any helper types _from_ that source of truth

<!--  -->

# `typeof` operator

The `typeof` operator is the most useful tool we have for transforming runtime to types

<!--  -->

# Understanding the syntax

Thinking about the type/runtime world is most useful for de-scarifying scary TS syntax.

```ts
type Input = number;

const toString = (input: Input): string => {
  return String(input);
};
```

In JS, this looks like this:

```js
const toString = (input) => {
  return String(input);
};
```

<!-- Dropped, too difficult -->

# Syntax differences (part 2)

Important to know when you're using 'runtime syntax' vs 'type syntax'.

A challenge - one of these syntaxes is invalid. Which one?

```ts
const obj = {
  deep: {
    a: 1,
    b: 2
  }
};

type A1 = typeof obj.deep.a;
type A2 = (typeof obj)['deep']['a'];
type A3 = (typeof obj).deep.a;
```

<!--  -->

# Runtime world -> Type world

But going from runtime -> type is also useful.

A common mistake: maintaing _two_ sources of truth for the same type.

```ts
// BEFORE
type Route = "/user" | "/user/create" | "/";

const routes = {
  "/user": {},
  "/user/create": {},
  "/": {},
};
```

<!--  -->

# Runtime world -> Type world

```ts
// AFTER

const routes = {
  "/user": {},
  "/user/create": {},
  "/": {},
  "/user/delete": {},
};

// "/user" | "/user/create" | "/"
type Route = keyof typeof routes;
```

There's now a single source of truth for the routes - the runtime `routes` themselves.

<!--  -->

# Deriving types > declaring types

- Maintain a single source of truth
- Derive any other types _from_ that source of truth

<!--  -->

# Exercises on typeof

<!--  -->

# Syntax differences

There are some differences between the type world and the runtime world:

```ts
const obj = {
  a: 1,
};

// Runtime world property access
const a = obj.a;

type Obj = {
  a: number;
};

// Type world property access
type A = Obj["a"];
```

<!--  -->

# Zod

Maybe include a mention of zod?

<!--  -->

# Exercises

Practice TS inference
Practice property access
Practice `typeof`
Practice `as const`
