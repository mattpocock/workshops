/**
 * TODO: Why is this erroring? (hard)
 */
const crypto = new Crypto();

crypto.subtle.decrypt({ name: "RSA-OEAP" }, "123", {});

// Added here to ensure that this is a module
export {};
