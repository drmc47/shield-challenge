import { z } from "zod";

export const createWalletSchema = z.object({
  tag: z.string().max(50).optional(),
  chain: z.string().min(1, "Chain is required"), //slug
  address: z.string().trim().min(1, { error: "Address cannot be empty" }),
});

export const walletIdSchema = z.object({
  id: z.uuid(),
});

export type CreateWalletInput = z.infer<typeof createWalletSchema>;
