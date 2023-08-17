import { Router } from "express";
import limiter from "../limiter/limiter.js";
import verifyStructureMiddleware from "../middlewares/validateStructure.js";
import validateDTODataMiddleware from "../middlewares/validateDTOData.js";
import { productoController } from "../controllers/producto.controller.js";
import Producto from '../storage/Producto.js';
const verifyStructure = verifyStructureMiddleware(Producto);
const validateDTOData = validateDTODataMiddleware(Producto);

const router = Router();

router
    .get('/', limiter.limiterGet(), verifyStructure, productoController.getTotalProducts)
    .post('/', limiter.limiterPost(), verifyStructure, validateDTOData, productoController.addProducto)

export default router;