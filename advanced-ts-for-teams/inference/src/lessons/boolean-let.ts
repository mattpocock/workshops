export function boolFunc(t: true) {}

let bool = true;
//  ^?

// TS figures out that it's true here
boolFunc(bool);
//       ^?

bool = false;

// TS knows that it's been changed to false here
boolFunc(bool);
//       ^?

bool = Date.now() > 1000 ? true : false;

// TS knows that it could be either true or false,
// so it reverts it to boolean
boolFunc(bool);
//       ^?
