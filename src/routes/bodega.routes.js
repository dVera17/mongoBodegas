import { Router } from "express";
import limiter from "../limiter/limiter.js";
import { bodegaController } from "../controllers/bodega.controller.js";
import verifyStructureMiddleware from "../middlewares/validateStructure.js";
import validateDTODataMiddleware from "../middlewares/validateDTOData.js";
import Bodega from "../storage/Bodega.js";
const router = Router();

const verifyStructure = verifyStructureMiddleware(Bodega);
const validateDTOData = validateDTODataMiddleware(Bodega);

router
    .get('/', limiter.limiterGet(), verifyStructure, bodegaController.getBodegas)
    .post('/', limiter.limiterPost(), verifyStructure, validateDTOData, bodegaController.addBodega)

export default router;