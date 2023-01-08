import { Router } from "express";
import { serve, setup } from "swagger-ui-express";

import swaggerData from "../swagger.json";

const swaggerRoutes = Router();

swaggerRoutes.use("/api-docs", serve, setup(swaggerData));

export { swaggerRoutes };
