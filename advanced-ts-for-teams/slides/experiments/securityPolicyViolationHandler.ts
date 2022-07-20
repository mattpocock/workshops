window.addEventListener("securityPolicyViolation", (e) => {
  // securityPolicyViolation events have a status code -
  // why is this erroring?
  console.log(e.statusCode);
});

import { z } from "zod";

const result = z.object({}).safeParse({});

result.data;
