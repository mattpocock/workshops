window.addEventListener("securityPolicyViolation", (e) => {
  console.log(e.statusCode);
});

// 2

import { z } from "zod";

const result = z.object({}).safeParse({});

result.data;
