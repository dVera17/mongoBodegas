import express from 'express';
import { config } from "dotenv";
import routerJWT from './routes/JWT.routes.js';
import verifyToken from './middlewares/JWT/authToken.js';
import routerBodegas from './routes/bodega.routes.js';
import routerProducto from './routes/producto.routes.js';
config();
const app = express();
app.set('port', process.env.PORT_SERVER);
app.use(express.json());

app
    .use('/token', routerJWT)
    .use('/api/bodegas', verifyToken, routerBodegas)
    .use('/api/productos', verifyToken, routerProducto)

export default app;