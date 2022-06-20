<!--  -->

# let vs const

TS can also infer literal types from `const`:

```ts
let age = 30;

let name = "Matt";

let people = ["Matt", "David"];

let peopleToAgeMap = {
  david: 68,
  matt: 31,
};
```

<!--  -->

# `typeof` operator

You can extract a type from the runtime world by using `typeof`:

```ts
const people = ["Matt", "David"] as const;

type PeopleArray = typeof people;
```

<!--  -->

# Transforming types

Once a type is in the type world, you can _transform it_ to the type you want.

```ts
const people = ["Matt", "David"] as const;

type PeopleArray = typeof people;
type Person = PeopleArray[number];
```

<!--  -->

# Single source of truth

A common mistake I see in TS code is that devs maintain _two_ sources of truth - one in the type world and one in the runtime world.

```ts
// BEFORE
type Route = "/user" | "/user/create" | "/";

const routes = ["/user", "/user/create", "/"];
```

# Single source of truth

```ts
// AFTER

const routes = ["/user", "/user/create", "/"] as const;

type Route = typeof routes[number];
```

Now, we've got a single source of truth for the routes.

<!--  -->

# Runtime world -> Type world

- Work _with_ TS's powers of inference
- When you work against them, you end up with too many annotations (and usually some `any`'s')
