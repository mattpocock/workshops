/**
 * 💡 TODO
 */

interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
  "maps:depth": number;
}

/**
 * 💡 We've got a slightly uncomfortable looking data
 * structure above. We've got a bunch of properties that
 * are all prefixed with "maps:".
 *
 * Ideally, we'd like to have an object which removed "maps:"
 * from the property names, leaving us with:
 *
 * {
 *   longitude: string,
 *   latitude: string,
 *   depth: number,
 * }
 *
 * 🧑‍💻 We're getting the "maps:" data structure from an
 * external API, so we can't change it.
 */

interface DesiredDataShape {
  longitude: string;
  latitude: string;
  depth: number;
}

const fetchData = (): DesiredDataShape => {
  const data = {
    "maps:longitude": "123",
    "maps:latitude": "456",
    "maps:depth": 789,
  };

  return data;
};

/**
 * ⛔️ You should be seeing an error above:
 *
 * Type '{ "maps:longitude": string; "maps:latitude": string;
 * "maps:depth": number; }' is missing the following properties
 * from type 'DesiredDataShape': longitude, latitude, depth
 *
 * That's because the data variable doesn't match the DesiredDataShape,
 * which is what we've specified as the return type of fetchData.
 */

/**
 * 💡 To make this work, we're going to need to create a
 * function which massages the data to the correct shape.
 *
 * The code will eventually look something like this:
 *
 * const fetchData = (): DesiredDataShape => {
 *   const data = {
 *     "maps:longitude": "123",
 *     "maps:latitude": "456",
 *     "maps:depth": 789,
 *   };
 *
 *   return removeMapsPrefixes(data);
 * };
 */

/**
 * 🛠 Create a new function called removeMapsPrefixes.
 */

const removeMapsPrefixes = <T>(
  obj: T,
): { [K in keyof T as RemoveMaps<K>]: T[K] } => {
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    if (key.startsWith("maps:")) {
      newObj[key.slice("maps:".length)] = obj[key];
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj as { [K in keyof T as RemoveMaps<K>]: T[K] };
};

const newVal = removeMapsPrefixes({
  "maps:longitude": "123",
  "maps:latitude": "456",
  "maps:depth": 789,
});

type RemoveMaps<K extends PropertyKey> = K extends `maps:${infer U}` ? U : K;
