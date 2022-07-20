import { F } from "ts-toolbelt";

type BaseRouterConfig = Record<string, { search?: string[] }>;

const makeRouter = <TConfig extends BaseRouterConfig>(
  _config: F.Narrow<TConfig>,
) => {
  return {
    goTo: <TRoute extends keyof TConfig, TSearch = TConfig[TRoute]["search"]>(
      route: TRoute,
      search?: TSearch extends string[]
        ? { [SearchParam in TSearch[number]]?: string }
        : never,
    ) => {
      let newRoute = String(route);

      if (search) {
        newRoute += new URLSearchParams(
          search as Record<string, string>,
        ).toString();
      }
      window.location.href = newRoute;
    },
  };
};

const routes = makeRouter({
  "/": {},
  "/dashboard": {
    search: ["page", "perPage", "something"],
  },
});

routes.goTo("/dashboard", {
  page: "1",
  something: "",
});

routes.goTo("/");
