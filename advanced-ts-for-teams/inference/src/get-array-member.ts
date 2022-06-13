import { expect } from "./_utils";

namespace GetArrayMember {
  type Arr = string[];

  type EditMe = any;

  type cases = [Expect<Equal<string, EditMe>>];
}
