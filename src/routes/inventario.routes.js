import { Router } from "express";
import limiter from "../limiter/limiter.js";
import { inventarioController } from "../controllers/inventario.controller.js";
import verifyStructureMiddleware from "../middlewares/validateStructure.js";
import validateDTODataMiddleware from "../middlewares/validateDTOData.js";
import Inventario from "../storage/Inventario.js";
const router = Router();


router
    .post('/', limiter.limiterPost(), verifyStructureMiddleware(Inventario), validateDTODataMiddleware(Inventario), inventarioController.addInventario)

export default router;