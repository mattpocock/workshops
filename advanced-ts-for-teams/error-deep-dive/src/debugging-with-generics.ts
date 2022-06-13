import { expect } from "./_utils";

/**
 * TODO: Why is this erroring?
 */
const elements = document.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "*",
);

expect<HTMLElement[]>(elements);
