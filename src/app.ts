import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRoutes from "./modules/auth/auth.routes";
import walletRoutes from "./modules/wallets/wallet.routes";
import { errorHandler } from "./middleware/errorHandler";
import { swaggerSpec } from "./docs/swagger";
import swaggerUi from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", authRoutes);
app.use("/api/wallets", walletRoutes);

app.use(errorHandler);

export default app;
