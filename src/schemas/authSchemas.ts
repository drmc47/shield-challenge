import { z } from "zod";

export const signupSchema = z.object({
  email: z.email({ error: "Invalid email" }).transform((v) => v.toLowerCase()),
  password: z.string().min(6, { error: "Password must have at least 6 characters" }),
});

export const signinSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignupInput = z.infer<typeof signupSchema>;
