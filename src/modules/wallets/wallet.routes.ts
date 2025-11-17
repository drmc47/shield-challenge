import { Router } from "express";
import { authMiddleware } from "../../middleware/auth";
import { getWallets, createWallet, getWalletById, updateWallet, deleteWallet } from "./wallet.controller";
import { validateData } from "../../middleware/validateSchema";
import { createWalletSchema, walletIdSchema } from "../../schemas/walletSchemas";
import { validateParams } from "../../middleware/validateParams";

const router = Router();

router.use(authMiddleware);

router.get("/", getWallets);

router.post("/", validateData(createWalletSchema), createWallet);

router.get("/:id", validateParams(walletIdSchema), getWalletById);

router.put("/:id", validateParams(walletIdSchema), validateData(createWalletSchema), updateWallet);

router.delete("/:id", validateParams(walletIdSchema), deleteWallet);

export default router;
