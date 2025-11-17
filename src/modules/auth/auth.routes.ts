import { Router } from "express";
import { signin, signup, signout } from "./auth.controller";
import { authMiddleware } from "../../middleware/auth";
import { validateData } from "../../middleware/validateSchema";
import { signinSchema, signupSchema } from "../../schemas/authSchemas";

const router = Router();

router.post("/signup", validateData(signupSchema), signup);

router.post("/signin", validateData(signinSchema), signin);

router.post("/signout", authMiddleware, signout);

export default router;
