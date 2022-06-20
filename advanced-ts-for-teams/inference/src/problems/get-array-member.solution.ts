type Arr = string[];

export type EditMe = Arr[number];

type cases = [Expect<Equal<string, EditMe>>];
