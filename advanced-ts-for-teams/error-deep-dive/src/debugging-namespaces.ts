import { expect } from "./_utils";

/**
 * TODO: why is this erroring?
 */

const memoryDescriptor = {};

expect<WebAssembly.MemoryDescriptor>(memoryDescriptor);
