interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;

/**
 * When it's OK to use any
 * Return types
 * Generics in functions
 * infer
 */
const removeMapsFromObj = <T>(obj: T): RemoveMapsFromObj<T> => {
  const newObj = {} as any;

  for (const key in obj) {
    if (key.startsWith("maps:")) {
      newObj[key.substring(6)] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export {};
