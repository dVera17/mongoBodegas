import conn from "../db/connection.js";
import { ErrorHandler } from "../storage/errorHandler.js";
const db = await conn();
let inventarios = db.collection("inventarios");

const addInventario = async (req, res) => {
    let result;
    try {
        const { id_producto, id_bodega, cantidad } = req.body;

        const existingInventory = await inventarios.findOne({
            id_producto: id_producto,
            id_bodega: id_bodega
        });

        if (!existingInventory) {
            const result = await inventarios.insertOne(req.body);
            res.status(201).send(result);
        } else {
            const newCantidad = existingInventory.cantidad + cantidad;
            const result = await inventarios.updateOne(
                { id_producto: id_producto, id_bodega: id_bodega },
                { $set: { cantidad: newCantidad } }
            );
            res.send(result);
        }
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const inventarioController = {
    addInventario
}