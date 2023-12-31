import conn from "../db/connection.js";
import { ErrorHandler } from "../storage/errorHandler.js";
const db = await conn();
let productos = db.collection("productos");

const getTotalProducts = async (req, res) => {
    try {
        let result = await productos.aggregate([
            {
                $lookup: {
                    from: "inventarios",
                    localField: "id",
                    foreignField: "id_producto",
                    as: "inventarios"
                }
            },
            {
                $unwind: "$inventarios"
            },
            {
                $group: {
                    _id: { id: "$id", nombre: "$nombre", descripcion: "$descripcion" },
                    Total: { $sum: "$inventarios.cantidad" }
                }
            },
            {
                $project: {
                    _id: 0,
                    id: "$_id.id",
                    nombre: "$_id.nombre",
                    descripcion: "$_id.descripcion",
                    Total: 1
                }
            },
            {
                $sort: { Total: -1 }
            }
        ]).toArray();
        res.send(result)
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

const addProducto = async (req, res) => {
    try {
        let result = await productos.insertOne(req.body)
        let resultIntentario = await db.collection("inventarios").insertOne({
            id: 1,
            id_bodega: 11,
            id_producto: req.body.id,
            cantidad: 12,
            created_by: 1
        });
        res.send(result);
    } catch (error) {
        let err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

export const productoController = {
    getTotalProducts,
    addProducto,
}