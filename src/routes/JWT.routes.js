import { Router } from "express";
import generateToken from "../middlewares/JWT/token.js";
const router = Router();

router
    .get('/:table', generateToken);

export default router;