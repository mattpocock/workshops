import { expect } from "./_utils";

/**
 * TODO: Why is this erroring?
 */
const myEvent = document.createEvent("wheelevent");

expect<WheelEvent>(myEvent);

/**
 * TODO: Why is this erroring?
 */
const myFunc = (event: HTMLElementEventMap["securityPolicyViolation"]) => {
  expect<number>(event.statusCode);
};
