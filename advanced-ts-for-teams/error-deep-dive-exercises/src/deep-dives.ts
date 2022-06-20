/**
 * TODO: Why is this erroring? (hard)
 */
const crypto = new Crypto();

const cryptoKey = new CryptoKey();

const arrayBuffer = new ArrayBuffer(8);

crypto.subtle.decrypt({ name: "RSA-OAEP" }, cryptoKey, arrayBuffer);

// Added here to ensure that this is a module
export {};
